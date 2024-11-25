import {ScreenView, Text} from '@/components';
import {colors, spacing} from '@/theme';
import {FlatList, Image, ImageStyle, View, ViewStyle} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {BottomTabParamsList, RootStackParamList} from '@/navigators';
import {Stats} from './components';
import {savedRecipes} from '@/constants';
import {MyRecipeCard} from './components/my-recipe-card';

export const ProfileScreen = ({
  navigation,
}: NativeStackScreenProps<BottomTabParamsList & RootStackParamList>) => {
  return (
    <ScreenView>
      <View style={$profileHeader}>
        <View style={$avatarWrapper}>
          <Image
            source={require('/assets/ava.png')}
            resizeMode="cover"
            style={$avatar}
          />
        </View>
        <Stats />
      </View>
      <Text fontWeight="bold">Shakhzod Bobolov</Text>
      <Text size="xs" style={{color: colors.textSecondary}}>
        Chef
      </Text>
      <Text
        size="xs"
        style={{color: colors.textSecondary, marginBottom: spacing.lg}}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque, porro.
      </Text>
      <Text size="sm" fontWeight="bold">
        My recipes
      </Text>
      <FlatList
        data={savedRecipes}
        keyExtractor={item => item.id}
        renderItem={({item}) => <MyRecipeCard item={item} />}
      />
    </ScreenView>
  );
};

const $profileHeader: ViewStyle = {
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  paddingRight: spacing.lg,
  marginBottom: spacing.lg,
};
const $avatarWrapper: ViewStyle = {
  width: 100,
  height: 100,
  borderRadius: 50,
  backgroundColor: 'gray',
  marginRight: spacing.md,
};
const $avatar: ImageStyle = {
  width: '100%',
  height: '100%',
  borderRadius: 50,
};
