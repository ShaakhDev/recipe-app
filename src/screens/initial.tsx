import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {useEffect} from 'react';
import {Text, View, ViewStyle} from 'react-native';
import {RootStackParamList} from 'src/navigators/app-navigator';
import {Storage} from '@/utils';
import {StorageKeys} from '@/constants';

export const InitialScreen = ({
  navigation,
}: NativeStackScreenProps<RootStackParamList>) => {
  useEffect(() => {
    const token = Storage.getItem(StorageKeys.TOKEN);

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
