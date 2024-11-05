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
  const [loginMutation] = useLoginMutation();
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

      if (result?.data?.access_token) {
        Storage.setItem(StorageKeys.TOKEN, result?.data?.access_token);
        navigation.replace('Tab');
      }
    } catch (err) {
      console.log(err);
    }
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
      <Button style={$button} onPress={onLogin}>
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
};
const $forgotText: TextStyle = {
  color: colors.starColor,
  marginTop: spacing.md,
};
