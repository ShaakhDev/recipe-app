import {Text, View, ViewStyle} from 'react-native';

export const WelcomeScreen = () => {
  return (
    <View style={$container}>
      <Text>Welcome screen</Text>
    </View>
  );
};

const $container: ViewStyle = {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
};
