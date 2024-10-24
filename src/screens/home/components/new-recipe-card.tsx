import {Text} from '@/components';
import {colors, spacing} from '@/theme';
import {Image, ImageStyle, TextStyle, View, ViewStyle} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

export const NewRecipeCard = () => {
  return (
    <View style={$card}>
      <View style={$circleImage}>
        <Image
          source={require('/assets/salad.png')}
          resizeMode="contain"
          style={$image}
        />
      </View>
      <Text>Title</Text>
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
            25 mins
          </Text>
        </View>
      </View>
    </View>
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
