import {ScreenView} from '@/components';
import {FlatList, Text, View, ViewStyle} from 'react-native';
import {SavedItemCard} from './components';

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

export const SavedScreen = () => {
  return (
    <ScreenView>
      <FlatList
        data={data}
        keyExtractor={item => item.toString()}
        renderItem={({item}) => <SavedItemCard item={item} />}
      />
    </ScreenView>
  );
};