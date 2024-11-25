import {Text} from '@/components';
import {colors, spacing} from '@/theme';
import {
  ImageBackground,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/AntDesign';

type MyRecipeCardProps = {
  item: {
    id: string;
    title: string;
    rating: number;
    image: string;
    author: string;
  };
};

export const MyRecipeCard = ({item}: MyRecipeCardProps) => {
  return (
    <TouchableOpacity style={$card} activeOpacity={0.8}>
      <ImageBackground
        style={$imageWrapper}
        source={{uri: item?.image}}
        resizeMode="cover">
        <View style={$ratingBadge}>
          <Icon name="star" size={12} color={colors.palette.rating} />
          <Text size="xss">{item.rating}</Text>
        </View>
        <LinearGradient
          colors={['rgba(0,0,0,0.75)', 'transparent']}
          start={{x: 1, y: 1}}
          end={{x: 1, y: 0}}
          style={$overlay}
        />
        <View style={$textContent}>
          <View>
            <Text size="xs" fontWeight="bold" style={$title}>
              {item.title}
            </Text>
            <Text fontWeight="bold" style={$author}>
              {item.author}
            </Text>
          </View>
          <View style={$bookmarkWrapper}>
            <Text size="xs" fontWeight="regular" style={{color: 'white'}}>
              25 mins
            </Text>
          </View>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};

const $card: ViewStyle = {margin: spacing.xs, flex: 1};

const $imageWrapper: ViewStyle = {
  position: 'relative',
  minHeight: 150,
  borderRadius: 10,
  overflow: 'hidden',
  padding: spacing.xs,
};

const $overlay: ViewStyle = {
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
};
const $title: TextStyle = {
  marginTop: 'auto',
  color: colors.palette.white,
};
const $author: TextStyle = {
  fontSize: 8,
  color: colors.textSecondary,
};
const $ratingBadge: ViewStyle = {
  flexDirection: 'row',
  alignSelf: 'flex-end',
  width: 40,
  height: 20,
  borderRadius: 10,
  alignItems: 'center',
  justifyContent: 'center',
  gap: spacing.xss,
  backgroundColor: colors.palette.secondary20,
};
const $bookmark: ViewStyle = {
  width: 24,
  height: 24,
  borderRadius: 12,
  backgroundColor: colors.palette.white,
  justifyContent: 'center',
  alignItems: 'center',
};
const $bookmarkWrapper: ViewStyle = {
  flexDirection: 'row',
  alignItems: 'center',
  gap: spacing.sm,
};
const $textContent: ViewStyle = {
  flexDirection: 'row',
  marginTop: 'auto',
  justifyContent: 'space-between',
};
