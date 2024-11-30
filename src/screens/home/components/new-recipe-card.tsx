import {Text} from '@/components';
import {RootStackParamList} from '@/navigators';
import {colors, spacing} from '@/theme';
import {Recipe} from '@/types';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {Pressable} from 'react-native';
import {Image, ImageStyle, TextStyle, View, ViewStyle} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

type NewRecipeCardProps = {
  recipe: Recipe;
};

export const NewRecipeCard = ({
  recipe: {title, image, time, _id},
}: NewRecipeCardProps) => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const imageSource = image ? {uri: image} : require('/assets/salad.png');
  const onPressCard = () => {
    navigation.navigate('RecipeDetail', {id: _id});
  };
  return (
    <Pressable style={$card} onPress={onPressCard}>
      <View style={$circleImage}>
        <Image source={imageSource} resizeMode="contain" style={$image} />
      </View>
      <Text>{title}</Text>
      <View style={$rating}>
        <Icon name="star" size={10} color={colors.starColor} />
        <Icon name="star" size={10} color={colors.starColor} />
        <Icon name="star" size={10} color={colors.starColor} />
        <Icon name="star" size={10} color={colors.starColor} />
        <Icon name="star" size={10} color={colors.starColor} />
      </View>
      <View style={[$row, {justifyContent: 'space-between'}]}>
        <View style={[$row]}>
          <Image style={$avatar} source={require('/assets/salad.png')} />
          <Text size="sm" style={$name}>
            Joohn Doe
          </Text>
        </View>
        <View style={[$row]}>
          <Text size="xs" style={$name}>
            {time}
          </Text>
        </View>
      </View>
    </Pressable>
  );
};

const $card: ViewStyle = {
  width: 250,
  position: 'relative',
  height: 95,
  marginTop: 40,
  marginRight: spacing.md,
  borderRadius: spacing.sm,
  backgroundColor: colors.palette.white,

  padding: spacing.md,
  //   elevation: 4,
  shadowColor: colors.palette.black,

  shadowOffset: {
    width: 0,
    height: 3,
  },
  shadowOpacity: 0.29,
  shadowRadius: 4.65,

  elevation: 2,
};
const $circleImage: ViewStyle = {
  overflow: 'hidden',
  width: 80,
  height: 80,
  borderRadius: 40,
  position: 'absolute',
  top: -40,
  right: spacing.md,
};
const $image: ImageStyle = {
  width: 80,
  height: 80,
};

const $rating: ViewStyle = {
  flexDirection: 'row',
  marginTop: spacing.xs,
  //   justifyContent: 'center',
  alignItems: 'center',
};

const $row: ViewStyle = {
  flexDirection: 'row',
  // justifyContent: 'space-between',
  alignItems: 'center',
};
const $avatar: ImageStyle = {width: 20, height: 20};
const $name: TextStyle = {
  marginLeft: spacing.xs,
  color: colors.textSecondary,
};
