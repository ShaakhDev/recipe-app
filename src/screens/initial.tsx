import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {useEffect} from 'react';
import {Text, View, ViewStyle} from 'react-native';
import {RootStackParamList} from 'src/navigators/app-navigator';

export const InitialScreen = ({
  navigation,
}: NativeStackScreenProps<RootStackParamList>) => {
  useEffect(() => {
    const token = true;

    if (token) {
      navigation.replace('Tab');
    } else {
      navigation.replace('Auth');
    }
  }, []);

  return (
    <View style={$container}>
      <Text>Initial screen</Text>
    </View>
  );
};

const $container: ViewStyle = {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
};
