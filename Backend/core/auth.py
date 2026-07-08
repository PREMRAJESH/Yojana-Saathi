import jwt
from fastapi import Header, HTTPException, status, Depends
from ..config import get_settings

def get_current_user(authorization: str | None = Header(default=None)) -> str:
    """Dependency that extracts and decodes the Supabase JWT from the Authorization header.
    Returns the user's UUID (the 'sub' claim) if valid.
    """
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
        # Decode Supabase JWT. It's signed with HS256, audience is 'authenticated'
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
        return user_id
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
