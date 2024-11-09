import {Button, Text, TextField} from '@/components';
import {colors, spacing} from '@/theme';
import {Pressable, TextStyle, View, ViewStyle} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import {useLoginMutation} from '@/features';
import {showToast, Storage} from '@/utils';
import {StorageKeys} from '@/constants';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {AuthStackParamList} from 'src/navigators/auth-navigator';
import {RootStackParamList} from '@/navigators';
import {Controller, FieldValues, SubmitHandler, useForm} from 'react-hook-form';

export const LoginScreen = ({
  navigation,
}: NativeStackScreenProps<AuthStackParamList & RootStackParamList>) => {
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm();
  const [loginMutation, {isLoading, error}] = useLoginMutation();

  const onLogin: SubmitHandler<FieldValues> = async data => {
    const {email, password} = data;
    try {
      const result = await loginMutation({email, password});

      if (result?.data?.token) {
        Storage.setItem(StorageKeys.TOKEN, result?.data?.token);
        navigation.replace('Tab');
      } else {
        if ((error as any)?.status === 400) {
          showToast('User not found or invalid credentials');
        }
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
        <Controller
          name="email"
          control={control}
          rules={{required: 'Email is required'}}
          render={({field: {onChange, value}}) => (
            <TextField
              onChangeText={onChange}
              value={value}
              label="Email"
              placeholder="Enter your email"
              error={errors?.email?.message as string}
            />
          )}
        />

        <Controller
          name="password"
          rules={{required: 'Password is required'}}
          control={control}
          render={({field: {onChange, value}}) => (
            <TextField
              onChangeText={onChange}
              value={value}
              label="Password"
              placeholder="Enter your password"
              isPassword
              error={errors?.password?.message as string}
            />
          )}
        />
      </View>
      <Pressable>
        <Text size="xss" style={$forgotText}>
          Forgot password?
        </Text>
      </Pressable>
      <Button
        isLoading={isLoading}
        style={$button}
        onPress={handleSubmit(onLogin)}>
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
