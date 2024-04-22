// Login.tsx
import React, { useState } from 'react';
import { Button, TextInput, View } from 'react-native';
import axios from 'axios';
import { useAuth } from './AuthProvider';
import { useFormik } from 'formik';

export default function Login() {
  const { setAuth } = useAuth();
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: async (values) => {
      try {
        const response = await axios.post('http://172.30.82.49:1515/api/login', values);
        const { access } = response.data;
        console.error('Token de acesso:', access);
        setAuth(access);
      } catch (error: any) {
        console.error('Configuração da requisição:', error.config);
      }
    },
  });

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
