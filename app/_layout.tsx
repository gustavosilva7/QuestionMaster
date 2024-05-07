// RootLayout.tsx
import '../global.css';

import { Stack } from 'expo-router';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { AuthProvider, useAuth } from './AuthProvider';
import Login from './login';

export const unstable_settings = {
  initialRouteName: '(drawer)',
};

function Layout() {
  const { auth } = useAuth();

  if (!auth) {
    return <Login />;
  }

  const { user } = auth;

  if (!user) {
    return <Login />;
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Stack>
        <Stack.Screen
          name="(drawer)"
          options={{ headerShown: false, statusBarHidden: false, statusBarStyle: 'dark' }}
        />
        <Stack.Screen
          name="modal"
          options={{
            title: 'Modal',
            presentation: 'modal',
            statusBarHidden: false,
            statusBarStyle: 'dark',
          }}
        />
        <Stack.Screen
          name="user"
          options={{
            title: 'Meu perfil',
            presentation: 'modal',
            statusBarHidden: false,
            statusBarStyle: 'dark',
          }}
        />
      </Stack>
    </GestureHandlerRootView>
  );
}

export default function RootLayout() {
  return (
    <AuthProvider>
      <Layout />
    </AuthProvider>
  );
}
