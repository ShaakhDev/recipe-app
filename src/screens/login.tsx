import {Text} from '@/components';
import {View, ViewStyle} from 'react-native';

export const LoginScreen = () => {
  return (
    <View style={$container}>
      <Text>Login screen</Text>
    </View>
  );
};

const $container: ViewStyle = {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
};
