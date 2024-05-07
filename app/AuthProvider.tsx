// AuthProvider.tsx
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect, useState } from 'react';

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
    throw new Error('erro');
  }

  return context;
};

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [auth, setAuth] = useState<AuthState>(null);

  // Carregar os dados de autenticação do AsyncStorage quando o componente é montado
  useEffect(() => {
    const loadAuthData = async () => {
      try {
        const jsonValue = await AsyncStorage.getItem('@auth');
        if (jsonValue != null) {
          setAuth(JSON.parse(jsonValue));
        }
      } catch (e) {
        console.error('Erro ao carregar os dados de autenticação:', e);
      }
    };

    loadAuthData();
  }, []);

  // Salvar os dados de autenticação no AsyncStorage sempre que eles forem alterados
  useEffect(() => {
    const saveAuthData = async () => {
      try {
        const jsonValue = JSON.stringify(auth);
        await AsyncStorage.setItem('@auth', jsonValue);
      } catch (e) {
        console.error('Erro ao salvar os dados de autenticação:', e);
      }
    };

    if (auth != null) {
      saveAuthData();
    }
  }, [auth]);

  const value = { auth, setAuth };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
