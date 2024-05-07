import { Stack } from 'expo-router';

import { Container } from '~/components/Container';
import { Span } from '~/components/Text';

export default function Home() {
  return (
    <>
      <Stack.Screen options={{ title: 'Dashboard' }} />
      <Container>
        <Span>data</Span>
      </Container>
    </>
  );
}
