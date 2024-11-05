import {TextInput, TextStyle, View, ViewStyle} from 'react-native';
import {Text} from '../text/text';
import {colors} from '@/theme';

type TextFieldProps = {
  placeholder?: string;
  value: string;
  onChangeText: (text: string) => void;
  label?: string;
};

export const TextField = ({
  onChangeText,
  value,
  label,
  placeholder,
}: TextFieldProps) => {
  return (
    <View style={$container}>
      {label && <Text size="xs">{label}</Text>}
      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder || ''}
        placeholderTextColor={colors.inputBorder}
        style={$input}
      />
    </View>
  );
};

const $container: ViewStyle = {};
const $input: TextStyle = {
  borderWidth: 1,
  borderRadius: 8,
  borderColor: colors.inputBorder,
  padding: 12,
  marginTop: 8,
  fontSize: 12,
  color: colors.text,
};
