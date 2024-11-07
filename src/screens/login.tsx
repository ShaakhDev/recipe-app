import {Button, Text, TextField} from '@/components';
import {colors, spacing} from '@/theme';
import {useState} from 'react';
import {Pressable, TextStyle, View, ViewStyle} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import {useLoginMutation} from '@/features';
import {Storage} from '@/utils';
import {StorageKeys} from '@/constants';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {AuthStackParamList} from 'src/navigators/auth-navigator';
import {RootStackParamList} from '@/navigators';

export const LoginScreen = ({
  navigation,
}: NativeStackScreenProps<AuthStackParamList & RootStackParamList>) => {
  const [loginMutation, {isLoading}] = useLoginMutation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = (field: 'email' | 'password') => (value: string) => {
    if (field === 'email') {
      setEmail(value);
    } else {
      setPassword(value);
    }
  };

  const onLogin = async () => {
    try {
      const result = await loginMutation({email, password});
      console.log(result);
      if (result?.data?.token) {
        Storage.setItem(StorageKeys.TOKEN, result?.data?.token);
        navigation.replace('Tab');
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleSignUpPress = () => {
    navigation.navigate('Signup');
  };
  return (
    <View style={$container}>
      <Text fontWeight="bold" style={$title}>
        Hello,
      </Text>
      <Text size="xl">Welcome back!</Text>
      <View style={$inputContainer}>
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
          placeholder="Enter your password"
        />
      </View>
      <Pressable>
        <Text size="xss" style={$forgotText}>
          Forgot password?
        </Text>
      </Pressable>
      <Button isLoading={isLoading} style={$button} onPress={onLogin}>
        <>
          <Text appearance="white">Sign In</Text>
          <Icon
            name="arrowright"
            size={20}
            color={colors.palette.white}
            style={{marginLeft: spacing.xs}}
          />
        </>
      </Button>
      <View style={{flexDirection: 'row', gap: 5, justifyContent: 'center'}}>
        <Text size="xs">Don't have an account?</Text>
        <Pressable onPress={handleSignUpPress}>
          <Text size="xs" style={{color: colors.starColor}}>
            Sign Up
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

const $container: ViewStyle = {
  flex: 1,
  paddingTop: 100,
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
  marginVertical: spacing.xxl,
  minHeight: 60,
  height: 60,
};
const $forgotText: TextStyle = {
  color: colors.starColor,
  marginTop: spacing.md,
};
