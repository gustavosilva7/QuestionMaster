import { Link, Stack } from 'expo-router';

import { Container } from '~/components/Container';
import { Span } from '~/components/Text';

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: 'Oops!' }} />
      <Container>
        <Span className={styles.title}>This screen doesn't exist.</Span>
        <Link href="/" className={styles.link}>
          <Span className={styles.linkText}>Go to home screen!</Span>
        </Link>
      </Container>
    </>
  );
}

const styles = {
  title: `text-xl font-bold`,
  link: `mt-4 pt-4`,
  linkText: `text-base text-[#2e78b7]`,
};
