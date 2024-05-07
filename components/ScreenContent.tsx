import { View } from 'react-native';

type ScreenContentProps = {
  title?: string;
  path?: string;
  children?: React.ReactNode;
};

export const ScreenContent = ({ children }: ScreenContentProps) => {
  return <View className={styles.container}>{children}</View>;
};
const styles = {
  container: `items-center flex-1 justify-center p-1 bg-red-500`,
};
