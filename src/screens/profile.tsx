import {Button} from '@/components';
import {spacing} from '@/theme';
import {View, ViewStyle} from 'react-native';
import {Storage} from '@/utils';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {BottomTabParamsList, RootStackParamList} from '@/navigators';
import {AuthStackParamList} from 'src/navigators/auth-navigator';

export const ProfileScreen = ({
  navigation,
}: NativeStackScreenProps<BottomTabParamsList & RootStackParamList>) => {
  const handleLogout = () => {
    Storage.clearStorage();
    navigation.replace('Auth');
  };
  return (
    <View style={$container}>
      <Button onPress={handleLogout}>Logout</Button>
    </View>
  );
};

const $container: ViewStyle = {
  flex: 1,
  justifyContent: 'center',
  paddingHorizontal: spacing.md,
  alignItems: 'center',
};
