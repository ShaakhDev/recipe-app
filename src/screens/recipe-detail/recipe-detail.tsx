import {Button, ScreenView, Text} from '@/components';
import {useGetRecipeByIdQuery} from '@/features';
import {RootStackParamList} from '@/navigators';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {DetailImage, IngredientsContent, StepsContent} from './components';
import {Image, ImageStyle, TextStyle, View, ViewStyle} from 'react-native';
import {colors, spacing} from '@/theme';
import {useState} from 'react';

type Tabs = 'ingredients' | 'steps';

export const RecipeDetailScreen = ({
  navigation,
  route,
}: NativeStackScreenProps<RootStackParamList, 'RecipeDetail'>) => {
  const params = route.params;
  const {data: recipe} = useGetRecipeByIdQuery({id: params?.id!});
  const [activeTab, setActiveTab] = useState<Tabs>('ingredients');

  const TabContents: {[key in Tabs]: React.ReactNode} = {
    ingredients: <IngredientsContent items={recipe?.ingredients!} />,
    steps: <StepsContent items={recipe?.instructions!} />,
  };

  const getTabButtonStyle = (tab: Tabs) => {
    return activeTab === tab ? $tabButton : $inactiveTabButton;
  };

  const getTabTextStyle = (tab: Tabs) => {
    return activeTab === tab ? $activeTabText : $inactiveTabText;
  };
  return (
    <ScreenView>
      <DetailImage recipe={recipe!} />
      <Text fontWeight="bold">{recipe?.title}</Text>
      <View style={$row}>
        <View style={$avatarWrapper}>
          <Image
            source={require('/assets/ava.png')}
            resizeMode="cover"
            style={$image}
          />
        </View>
        <View>
          <Text style={$author} fontWeight="bold">
            James Clear
          </Text>
          <Text size="xss" style={{color: colors.textSecondary}}>
            London
          </Text>
        </View>
        <Button style={$followButton}>
          <Text style={$followButtonText} fontWeight="bold">
            Follow
          </Text>
        </Button>
      </View>
      <View style={[$row, {gap: spacing.md}]}>
        <Button
          style={getTabButtonStyle('ingredients')}
          onPress={() => setActiveTab('ingredients')}>
          <Text
            style={getTabTextStyle('ingredients')}
            size="xs"
            fontWeight="medium">
            Ingredients
          </Text>
        </Button>
        <Button
          onPress={() => setActiveTab('steps')}
          style={getTabButtonStyle('steps')}>
          <Text style={getTabTextStyle('steps')} size="xs" fontWeight="medium">
            Steps
          </Text>
        </Button>
      </View>
      {TabContents[activeTab]}
    </ScreenView>
  );
};
const $row: ViewStyle = {
  flexDirection: 'row',
  alignItems: 'center',
  marginVertical: spacing.md,
  flex: 1,
};
const $avatarWrapper: ViewStyle = {
  width: 40,
  height: 40,
  borderRadius: 25,
  backgroundColor: 'gray',
  marginRight: 10,
  overflow: 'hidden',
};
const $image: ImageStyle = {
  width: 40,
  height: 40,
};
const $author: TextStyle = {
  fontSize: 14,
};
const $followButton: ViewStyle = {
  maxWidth: 100,
  marginLeft: 'auto',
  paddingVertical: spacing.sm,
};

const $followButtonText: TextStyle = {
  color: colors.palette.white,
  fontSize: 12,
  lineHeight: 16,
};
const $tabButton: ViewStyle = {
  flex: 1,
};

const $inactiveTabButton: ViewStyle = {
  flex: 1,
  backgroundColor: colors.palette.white,
};

const $activeTabText: TextStyle = {
  color: colors.palette.white,
};

const $inactiveTabText: TextStyle = {
  color: colors.primary,
};
