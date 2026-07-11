import jwt
from dataclasses import dataclass
from fastapi import Header, HTTPException, status, Depends
from supabase import Client
from ..config import get_settings
from .supabase_client import get_supabase_client


@dataclass
class AuthenticatedUser:
    """Holds the authenticated user's ID and a Supabase client configured
    with their JWT so that Row-Level Security is enforced on all queries."""
    user_id: str
    supabase: Client


def _decode_token(authorization: str | None) -> tuple[str, str]:
    """Validate the Authorization header and return (raw_token, user_id)."""
    if not authorization or not authorization.startswith("Bearer "):
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Missing or invalid authorization header format. Expected Bearer token."
        )

    token = authorization.split(" ")[1]
    settings = get_settings()

    if not settings.supabase_jwt_secret:
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail="Supabase JWT secret is not configured in settings"
        )

    try:
        payload = jwt.decode(
            token,
            settings.supabase_jwt_secret,
            algorithms=["HS256"],
            audience="authenticated"
        )
        user_id = payload.get("sub")
        if not user_id:
            raise HTTPException(
                status_code=status.HTTP_401_UNAUTHORIZED,
                detail="Token payload is missing user ID ('sub' claim)"
            )
        return token, user_id
    except jwt.ExpiredSignatureError:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Token signature has expired"
        )
    except jwt.InvalidTokenError as e:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail=f"Invalid authorization token: {str(e)}"
        )


def get_current_user(authorization: str | None = Header(default=None)) -> str:
    """Dependency that extracts and decodes the Supabase JWT from the
    Authorization header and returns the user's UUID ('sub' claim).

    Consider using `get_current_user_client()` instead so that RLS is
    enforced at the database level for all subsequent queries.
    """
    _, user_id = _decode_token(authorization)
    return user_id


def get_current_user_client(
    authorization: str | None = Header(default=None),
) -> AuthenticatedUser:
    """Dependency that returns an AuthenticatedUser containing the user's
    UUID and a Supabase client configured with their JWT.

    Using this client **enables Row-Level Security (RLS)** on every
    database query, restricting results to rows owned by the user.
    """
    raw_token, user_id = _decode_token(authorization)
    client = get_supabase_client(user_jwt=raw_token)
    return AuthenticatedUser(user_id=user_id, supabase=client)

def verify_internal_secret(x_internal_secret: str | None = Header(default=None, alias="X-Internal-Secret")) -> str:
    """Dependency that verifies the custom X-Internal-Secret header.
    Ensures that webhook callback endpoints can only be invoked by authorized internal callers
    (like Supabase Edge Functions).
    """
    settings = get_settings()
    
    if not settings.internal_api_secret:
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail="Internal API secret is not configured in settings"
        )
        
    if not x_internal_secret or x_internal_secret != settings.internal_api_secret:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Unauthorized webhook signature. Access denied."
        )
        
    return x_internal_secret
