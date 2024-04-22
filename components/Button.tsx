import { FontAwesome } from '@expo/vector-icons';
import { forwardRef } from 'react';
import { Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';

interface ButtonProps extends TouchableOpacityProps {
  onPress?: () => void;
  title?: string;
}

export const Button = forwardRef<TouchableOpacity, ButtonProps>(({ onPress, title }, ref) => {
  return (
    <TouchableOpacity
      ref={ref}
      className="w-24 flex-row items-center justify-between rounded-lg bg-orange-500 px-3 py-2"
      onPress={onPress}>
      {title && <Text className="text-center text-lg font-semibold text-white">{title}</Text>}
      <FontAwesome name="edit" size={25} color="white" />
    </TouchableOpacity>
  );
});
