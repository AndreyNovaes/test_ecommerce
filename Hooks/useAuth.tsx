import { useState, useCallback } from 'react';

interface User {
  id: string;
  name: string;
}

interface AuthState {
  user: User | null;
  token: string | null;
}

export const useAuth = (): [AuthState, (user: User, token: string) => void, () => void] => {
  const [state, setState] = useState<AuthState>({ user: null, token: null });

  const login = useCallback((user: User, token: string) => {
    setState({ user, token });
    localStorage.setItem('user', JSON.stringify(user));
    localStorage.setItem('token', token);
  }, []);

  const logout = useCallback(() => {
    setState({ user: null, token: null });
    localStorage.removeItem('user');
    localStorage.removeItem('token');
  }, []);

  return [state, login, logout];
}
