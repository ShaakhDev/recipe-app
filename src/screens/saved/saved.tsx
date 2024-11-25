import {ScreenView} from '@/components';
import {FlatList} from 'react-native';
import {SavedItemCard} from './components';
import {savedRecipes} from '@/constants';

export const SavedScreen = () => {
  return (
    <ScreenView>
      <FlatList
        data={savedRecipes}
        keyExtractor={item => item.toString()}
        renderItem={({item}) => <SavedItemCard item={item} />}
      />
    </ScreenView>
  );
};
