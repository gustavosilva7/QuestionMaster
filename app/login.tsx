import React from 'react';
import { Button, TextInput, View } from 'react-native';
import axios from 'axios';
import { useAuth } from './AuthProvider';
import { useFormik } from 'formik';
import AsyncStorage from '@react-native-async-storage/async-storage';

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

export default function Login() {
  const { setAuth } = useAuth();
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: async (values) => {
      try {
        const response = await axios.post('http://192.168.0.13:8000/api/login', values);
        const data = response.data;
        console.log('Token de acesso:', data);
        setAuth(data);
        await storeAuthData(data);
      } catch (error: any) {
        console.error('Configuração da requisição:', error.config);
      }
    },
  });

  const storeAuthData = async (authData: Auth) => {
    try {
      const jsonValue = JSON.stringify(authData);
      await AsyncStorage.setItem('@auth', jsonValue);
    } catch (e) {
      // saving error
      console.error('Erro ao salvar os dados de autenticação:', e);
    }
  };

  return (
    <View className="flex-1 items-center justify-center bg-emerald-400">
      <TextInput
        value={formik.values.email}
        className="m-2 w-full rounded bg-white p-2"
        onChangeText={formik.handleChange('email')}
        placeholder="Email"
        autoCapitalize="none"
      />
      <TextInput
        value={formik.values.password}
        className="m-2 w-full rounded bg-white p-2"
        onChangeText={formik.handleChange('password')}
        placeholder="Senha"
        secureTextEntry
      />
      <Button title="Entrar" onPress={() => formik.handleSubmit()} />
    </View>
  );
}
