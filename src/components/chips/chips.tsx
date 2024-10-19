import {colors} from '@/theme';
import {PropsWithChildren} from 'react';
import {Pressable, TextStyle, ViewStyle} from 'react-native';
import {Text} from '../text';

type ChipsProps = {
  active?: boolean;
  onPress: () => void;
} & PropsWithChildren;

export const Chips = ({children, active, onPress}: ChipsProps) => {
  return (
    <Pressable style={[$chips, active && $active]} onPress={onPress}>
      <Text size="xs" style={active ? $activeText : $text}>
        {children}
      </Text>
    </Pressable>
  );
};

const $chips: ViewStyle = {
  backgroundColor: colors.screenBackground,
  paddingHorizontal: 16,
  paddingVertical: 4,
  flexDirection: 'row',
  alignItems: 'center',
  borderRadius: 12,
};
const $text: TextStyle = {
  color: colors.primary,
};
const $active: ViewStyle = {
  backgroundColor: colors.primary,
};

const $activeText: TextStyle = {
  color: colors.palette.white,
};
