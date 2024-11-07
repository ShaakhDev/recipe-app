import {Button, Text, TextField} from '@/components';
import {colors, spacing} from '@/theme';
import {useState} from 'react';
import {Pressable, TextStyle, View, ViewStyle} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import {useSignUpMutation} from '@/features';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {AuthStackParamList} from 'src/navigators/auth-navigator';
import {RootStackParamList} from '@/navigators';

export const SignupScreen = ({
  navigation,
}: NativeStackScreenProps<AuthStackParamList & RootStackParamList>) => {
  const [signupMutation, {isLoading}] = useSignUpMutation();
  const [email, setEmail] = useState('');

  const [password, setPassword] = useState('');

  const handleChange = (field: 'email' | 'password') => (value: string) => {
    if (field === 'email') {
      setEmail(value);
    } else {
      setPassword(value);
    }
  };

  const onSignUp = async () => {};

  const handleLoginPress = () => {
    navigation.replace('Login');
  };
  return (
    <View style={$container}>
      <Text fontWeight="bold" size="lg">
        Create an account
      </Text>
      <Text size="xs">
        Let’s help you set up your account, it won’t take long.
      </Text>
      <View style={$inputContainer}>
        <TextField
          onChangeText={handleChange('email')}
          value={email}
          label="Name"
          placeholder="Enter your name"
        />
        <TextField
          onChangeText={handleChange('email')}
          value={email}
          label="Email"
          placeholder="Enter your email"
        />
        <TextField
          onChangeText={handleChange('password')}
          value={password}
          label="Password"
          isPassword
          placeholder="Enter your password"
        />
        <TextField
          onChangeText={handleChange('password')}
          value={password}
          label="Confirm Password"
          isPassword
          placeholder="Retype password"
        />
      </View>
      <Pressable>
        <Text size="xss" style={$termsText}>
          Accept Terms & Conditions
        </Text>
      </Pressable>
      <Button isLoading={isLoading} style={$button} onPress={onSignUp}>
        <>
          <Text appearance="white">Sign Up</Text>
          <Icon
            name="arrowright"
            size={20}
            color={colors.palette.white}
            style={{marginLeft: spacing.xs}}
          />
        </>
      </Button>
      <View style={{flexDirection: 'row', gap: 5, justifyContent: 'center'}}>
        <Text size="xs">Already a member?</Text>
        <Pressable onPress={handleLoginPress}>
          <Text size="xs" style={{color: colors.starColor}}>
            Login
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

const $container: ViewStyle = {
  flex: 1,
  justifyContent: 'center',
  paddingHorizontal: spacing.md,
};
const $title: TextStyle = {
  fontSize: 32,
};
const $inputContainer: ViewStyle = {
  marginTop: 40,
  gap: spacing.lg,
};

const $button: ViewStyle = {
  flexDirection: 'row',
  paddingVertical: spacing.md,
  marginTop: spacing.xxl,
  marginBottom: spacing.md,
  minHeight: 60,
  height: 60,
};
const $termsText: TextStyle = {
  color: colors.starColor,
  marginTop: spacing.md,
};
