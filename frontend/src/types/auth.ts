export  interface AuthPayload {
    token: string;
    username: string;
}
  
export  interface AuthState {
    token: string | null;
    payload: AuthPayload | null;
}