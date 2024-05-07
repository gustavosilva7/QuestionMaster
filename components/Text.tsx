import React from 'react';
import { Text } from 'react-native';

export function Span({ children }: any) {
  return <Text className="p-1">{children}</Text>;
}
