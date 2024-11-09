import {Pressable, TextInput, TextStyle, View, ViewStyle} from 'react-native';
import {Text} from '../text/text';
import {colors, spacing} from '@/theme';
import Icon from 'react-native-vector-icons/Entypo';
import {useState} from 'react';

type TextFieldProps = {
  placeholder?: string;
  value: string;
  onChangeText: (text: string) => void;
  label?: string;
  isPassword?: boolean;
  error?: string;
};

export const TextField = ({
  onChangeText,
  value,
  label,
  placeholder,
  isPassword = false,
  error,
}: TextFieldProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const handleShowPassword = () => setShowPassword(!showPassword);
  const hasError = !!error;
  return (
    <View style={$container}>
      {label && <Text size="xs">{label}</Text>}
      <View style={[$inputContainer, hasError && {borderColor: '#ff0000'}]}>
        <TextInput
          secureTextEntry={isPassword && !showPassword}
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder || ''}
          placeholderTextColor={colors.inputBorder}
          style={$input}
        />
        {isPassword && (
          <Pressable onPress={handleShowPassword}>
            {showPassword ? (
              <Icon name="eye" size={20} color={colors.textSecondary} />
            ) : (
              <Icon
                name="eye-with-line"
                size={20}
                color={colors.textSecondary}
              />
            )}
          </Pressable>
        )}
      </View>
      {error && (
        <Text size="xss" style={$errorText}>
          {error}
        </Text>
      )}
    </View>
  );
};

const $container: ViewStyle = {};
const $inputContainer: ViewStyle = {
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  borderWidth: 1,
  borderRadius: 8,
  borderColor: colors.inputBorder,
  paddingHorizontal: 12,
  marginTop: 8,
  maxHeight: 50,
};

const $input: TextStyle = {
  flex: 1,
  fontSize: 12,
  lineHeight: 16,
  color: colors.text,
};
const $errorText: TextStyle = {
  color: '#ff0000',
  marginTop: spacing.xs,
};
