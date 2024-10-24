import {Text} from '@/components';
import {colors, spacing} from '@/theme';
import {
  ImageBackground,
  Pressable,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/AntDesign';

type SearchItemCardProps = {
  item: {
    id: string;
    title: string;
    rating: number;
    image: string;
    author: string;
  };
};

export const SearchItemCard = ({item}: SearchItemCardProps) => {
  return (
    <Pressable style={$card}>
      <ImageBackground
        style={$imageWrapper}
        source={{uri: item?.image}}
        resizeMode="cover">
        <View style={$ratingBadge}>
          <Icon name="star" size={12} color={colors.palette.rating} />
          <Text size="xss">{item.rating}</Text>
        </View>
        <LinearGradient
          colors={['rgba(0,0,0,0.6)', 'transparent']}
          start={{x: 1, y: 1}}
          end={{x: 1, y: 0}}
          style={$overlay}
        />
        <Text size="xs" fontWeight="bold" style={$title}>
          {item.title}
        </Text>
        <Text fontWeight="bold" style={$author}>
          {item.author}
        </Text>
      </ImageBackground>
    </Pressable>
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
