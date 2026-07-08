from supabase import create_client, Client, ClientOptions
from ..config import get_settings

def get_service_role_client() -> Client:
    """Return a Supabase client initialized with the service role key.
    This client bypasses RLS and can query across all users. Useful for
    matching runs and admin tasks.
    """
    settings = get_settings()
    if not settings.supabase_url or not settings.supabase_service_role_key:
        raise RuntimeError("Supabase URL and Service Role Key must be configured")
    return create_client(settings.supabase_url, settings.supabase_service_role_key)

def get_supabase_client(user_jwt: str | None = None) -> Client:
    """Return a Supabase client. If a user JWT is provided, the client's
    requests will carry the user's authentication context, meaning RLS
    rules will apply at the database level.
    """
    settings = get_settings()
    if not settings.supabase_url or not settings.supabase_service_role_key:
        raise RuntimeError("Supabase URL and Service Role Key must be configured")
    
    headers = {}
    if user_jwt:
        headers["Authorization"] = f"Bearer {user_jwt}"
    
    options = ClientOptions(headers=headers) if headers else None
    return create_client(
        settings.supabase_url,
        settings.supabase_service_role_key,
        options=options
    )
