import { Link, Stack } from 'expo-router';
import { Text, View } from 'react-native';
import { Button } from '~/components/Button';

import { Container } from '~/components/Container';
import { HeaderButton } from '~/components/HeaderButton';

export default function Home() {
  return (
    <>
      <Stack.Screen options={{ title: 'Usuário' }} />
      <Container>
        <View className="flex flex-row items-center justify-between">
          <Text className="text-3xl font-bold">Perfil</Text>
          <Link href="/modal" asChild>
            <Button title="Editar" />
          </Link>
        </View>
        <View>
          <Text>gsljkhfffffffffffffffff</Text>
        </View>
      </Container>
    </>
  );
}
