import {ScreenView, Text} from '@/components';
import {RootStackParamList} from '@/navigators';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

export const SearchScreen = ({
  navigation,
}: NativeStackScreenProps<RootStackParamList>) => {
  return (
    <ScreenView>
      <Text>Search Screen</Text>
    </ScreenView>
  );
};
