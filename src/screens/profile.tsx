import {Text, View, ViewStyle} from 'react-native';

export const ProfileScreen = () => {
  return (
    <View style={$container}>
      <Text>Profile screen</Text>
    </View>
  );
};

const $container: ViewStyle = {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
};
