import {ScreenView, Text} from '@/components';
import {RootStackParamList} from '@/navigators';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {SearchBar, SearchItemCard} from './components';
import {FlatList, TextStyle, ViewStyle} from 'react-native';
import {spacing} from '@/theme';

const data = [
  {
    id: '1',
    title: 'Spaghetti Carbonara',
    rating: 4.5,
    image:
      'https://www.inspiredtaste.net/wp-content/uploads/2019/03/Spaghetti-with-Meat-Sauce-Recipe-1-1200.jpg',
    author: 'Shakhzod',
  },
  {
    id: '2',
    title: 'Spaghetti Carbonara',
    rating: 4.5,
    image:
      'https://www.inspiredtaste.net/wp-content/uploads/2019/03/Spaghetti-with-Meat-Sauce-Recipe-1-1200.jpg',
    author: 'Shakhzod',
  },
  {
    id: '3',
    title: 'Spaghetti Carbonara',
    rating: 4.5,
    image:
      'https://www.inspiredtaste.net/wp-content/uploads/2019/03/Spaghetti-with-Meat-Sauce-Recipe-1-1200.jpg',
    author: 'Shakhzod',
  },
  {
    id: '4',
    title: 'Spaghetti Carbonara',
    rating: 4.5,
    image:
      'https://www.inspiredtaste.net/wp-content/uploads/2019/03/Spaghetti-with-Meat-Sauce-Recipe-1-1200.jpg',
    author: 'Shakhzod',
  },
];
export const SearchScreen = ({
  navigation,
}: NativeStackScreenProps<RootStackParamList>) => {
  return (
    <ScreenView contentContainerStyle={$container}>
      <SearchBar />
      <Text fontWeight="bold" style={$title}>
        Recent Search
      </Text>
      <FlatList
        data={data}
        numColumns={2}
        keyExtractor={item => item.toString()}
        renderItem={({item}) => <SearchItemCard item={item} />}
      />
    </ScreenView>
  );
};
const $title: TextStyle = {
  paddingHorizontal: spacing.xs,
  marginVertical: spacing.sm,
};
const $container: ViewStyle = {
  paddingHorizontal: spacing.xs,
};
