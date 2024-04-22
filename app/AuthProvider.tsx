// AuthProvider.tsx
import React, { useState } from 'react';

type Auth = {
  token: string;
  user: {
    id?: number;
    name?: string;
    email?: string;
    profile_photo?: string;
    email_verified_at?: string;
    created_at?: Date;
    updated_at?: Date;
    role_id?: number;
  };
};

type AuthState = Auth | null;
type AuthDispatch = React.Dispatch<React.SetStateAction<AuthState>>;

type AuthContextValue = {
  auth: AuthState;
  setAuth: AuthDispatch;
};

export const AuthContext = React.createContext<AuthContextValue | undefined>(undefined);

export const useAuth = () => {
  const context = React.useContext(AuthContext);

  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
};

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [auth, setAuth] = useState<AuthState>(null);

  const value = { auth, setAuth };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
