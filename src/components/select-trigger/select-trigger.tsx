import {colors} from '@/theme';
import {PropsWithChildren} from 'react';
import {Pressable, ViewStyle} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

type SelectTriggerProps = {
  onSelect: () => void;
} & PropsWithChildren;

export const SelectTrigger = ({onSelect, children}: SelectTriggerProps) => {
  return (
    <Pressable style={$trigger} onPress={onSelect}>
      {children}
      <Icon name="chevron-down" size={20} color={colors.text} />
    </Pressable>
  );
};

const $trigger: ViewStyle = {
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  borderWidth: 1,
  borderColor: colors.inputBorder,
  borderRadius: 8,
  paddingVertical: 10,
  paddingHorizontal: 15,
  marginVertical: 10,
  // backgroundColor: colors.palette.primary40,
};
