import {colors, spacing} from '@/theme';
import {TouchableOpacity, ViewStyle} from 'react-native';
import {Pressable} from 'react-native';
import {Text} from '../text';

type ButtonProps = {
  children?: string | React.ReactNode;
  onPress?: () => void;
  style?: ViewStyle;
};

export const Button = ({onPress, children, style}: ButtonProps) => {
  return (
    <TouchableOpacity
      style={[$button, style]}
      onPress={onPress}
      activeOpacity={0.7}>
      {typeof children === 'string' ? (
        <Text appearance="white">{children}</Text>
      ) : (
        children
      )}
    </TouchableOpacity>
  );
};
const $button: ViewStyle = {
  width: '100%',
  paddingHorizontal: spacing.md,
  paddingVertical: spacing.xs,
  borderRadius: 10,
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: colors.primary,
};
