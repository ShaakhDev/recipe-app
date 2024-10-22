import {Text} from '@/components';
import {BookmarkIcon} from '@/icons';
import {colors, spacing} from '@/theme';
import {
  ImageBackground,
  ImageStyle,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native';

export const CategoryCard = () => {
  return (
    <View style={$card}>
      <View style={$circleImage}>
        <ImageBackground
          style={{width: 100, height: 100}}
          source={require('/assets/salad.png')}
          resizeMode="contain"
        />
        {/* <View style={$ratingBadge}></View> */}
      </View>
      <Text size="sm" fontWeight="bold" style={$title}>
        Classic Greek Salad
      </Text>

      <View style={$footer}>
        <View>
          <Text
            size="xs"
            fontWeight="regular"
            style={{color: colors.textSecondary}}>
            time
          </Text>
          <Text size="sm" fontWeight="medium">
            25 mins
          </Text>
        </View>
        <View style={$bookmark}>
          <BookmarkIcon width={16} height={16} />
        </View>
      </View>
    </View>
  );
};

const $card: ViewStyle = {
  position: 'relative',
  marginTop: 50,
  width: 150,
  maxWidth: 150,
  height: 175,
  padding: spacing.md,
  alignItems: 'center',
  marginRight: spacing.md,
  borderRadius: spacing.sm,
  backgroundColor: colors.categoryCardBackground,
};

const $title: TextStyle = {
  textAlign: 'center',
  marginTop: spacing.xxl,

  marginHorizontal: 'auto',
};
const $footer: ViewStyle = {
  marginTop: 'auto',
  width: '100%',
  flexDirection: 'row',
  justifyContent: 'space-between',
};
const $bookmark: ViewStyle = {
  width: 24,
  height: 24,
  borderRadius: 12,
  backgroundColor: colors.palette.white,
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: 'auto',
};
const $circleImage: ImageStyle = {
  width: 100,
  height: 100,
  borderTopLeftRadius: 50,
  borderBottomLeftRadius: 50,
  borderBottomRightRadius: 50,
  borderTopRightRadius: 50,
  overflow: 'hidden',
  position: 'absolute',
  top: -50,
};
// const $ratingBadge: ViewStyle = {
//   width: 45,
//   height: 25,

//   borderRadius: 30,
//   backgroundColor: colors.palette.secondary20,
//   position: 'absolute',
//   top: 30,
//   right: -25,
//   justifyContent: 'center',
//   alignItems: 'center',
// };
