import {Text, View, ViewStyle} from 'react-native';

export const SignupScreen = () => {
  return (
    <View style={$container}>
      <Text>Signup screen</Text>
    </View>
  );
};

const $container: ViewStyle = {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
};
