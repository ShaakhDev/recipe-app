import {Button, Text, TextField} from '@/components';
import {colors, spacing} from '@/theme';
import {Pressable, TextStyle, View, ViewStyle} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import {useSignUpMutation} from '@/features';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {AuthStackParamList} from 'src/navigators/auth-navigator';
import {RootStackParamList} from '@/navigators';
import {showToast} from '@/utils';
import {Controller, FieldValues, SubmitHandler, useForm} from 'react-hook-form';

export const SignupScreen = ({
  navigation,
}: NativeStackScreenProps<AuthStackParamList & RootStackParamList>) => {
  const {
    control,
    handleSubmit,
    watch,
    formState: {errors},
  } = useForm();

  const [signupMutation, {isLoading, error}] = useSignUpMutation();

  const onSignUp: SubmitHandler<FieldValues> = async data => {
    const {name, email, password} = data;
    try {
      const result = await signupMutation({name, email, password});
      if (result?.data?.success) {
        showToast('Account created successfully, please login');
        navigation.replace('Login');
      } else {
        if ((error as any)?.status === 400) {
          showToast('User already exists');
        }
        console.log(error);
      }
    } catch (err) {}
  };

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
        <Controller
          name="name"
          rules={{required: 'Please enter your name'}}
          control={control}
          render={({field: {onChange, value}}) => (
            <TextField
              onChangeText={onChange}
              value={value}
              label="Name"
              error={errors?.name?.message as string}
              placeholder="Enter your name"
            />
          )}
        />

        <Controller
          name="email"
          rules={{required: 'Please enter your email'}}
          control={control}
          render={({field: {onChange, value}}) => (
            <TextField
              onChangeText={onChange}
              value={value}
              label="Email"
              error={errors?.email?.message as string}
              placeholder="Enter your email"
            />
          )}
        />

        <Controller
          name="password"
          rules={{required: 'Please enter your password'}}
          control={control}
          render={({field: {onChange, value}}) => (
            <TextField
              onChangeText={onChange}
              value={value}
              label="Password"
              isPassword
              error={errors?.password?.message as string}
              placeholder="Enter your password"
            />
          )}
        />

        <Controller
          name="confirmPassword"
          control={control}
          rules={{
            required: 'Please confirm your password',
            validate: value =>
              value === watch('password') || 'Passwords do not match',
          }}
          render={({field: {onChange, value}}) => (
            <TextField
              onChangeText={onChange}
              value={value}
              label="Confirm Password"
              isPassword
              error={errors?.confirmPassword?.message as string}
              placeholder="Retype password"
            />
          )}
        />
      </View>
      <Pressable>
        <Text size="xss" style={$termsText}>
          Accept Terms & Conditions
        </Text>
      </Pressable>
      <Button
        isLoading={isLoading}
        style={$button}
        onPress={handleSubmit(onSignUp)}>
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
