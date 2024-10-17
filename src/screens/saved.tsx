import {Text, View, ViewStyle} from 'react-native';

export const SavedScreen = () => {
  return (
    <View style={$container}>
      <Text>Saved screen</Text>
    </View>
  );
};

const $container: ViewStyle = {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
};
