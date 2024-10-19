import {colors} from '@/theme';
import {View, ViewStyle} from 'react-native';

export const Avatar = () => {
  return <View style={$avatar}></View>;
};
const $avatar: ViewStyle = {
  width: 40,
  height: 40,
  borderRadius: 6,
  backgroundColor: colors.palette.primary100,
  // marginRight: 16
};
