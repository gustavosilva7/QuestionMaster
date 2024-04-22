import { Stack } from 'expo-router';

import { Container } from '~/components/Container';
import { ScreenContent } from '~/components/ScreenContent';

export default function Home() {
  return (
    <>
      <Stack.Screen options={{ title: 'Dashboard' }} />
      <Container>
        <ScreenContent path="app/(drawer)/(tabs)/index.tsx" title="Dashboard" />
      </Container>
    </>
  );
}
