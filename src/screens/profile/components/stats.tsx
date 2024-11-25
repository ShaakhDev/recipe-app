import {Text} from '@/components';
import {colors} from '@/theme';
import {TextStyle, View} from 'react-native';

export const Stats = () => {
  return (
    <>
      <View style={{alignItems: 'center'}}>
        <Text style={$label} size="xs">
          Recipe
        </Text>
        <Text size="xl" fontWeight="bold">
          4
        </Text>
      </View>
      <View style={{alignItems: 'center'}}>
        <Text style={$label} size="xs">
          Followers
        </Text>
        <Text size="xl" fontWeight="bold">
          1.5M
        </Text>
      </View>
      <View style={{alignItems: 'center'}}>
        <Text style={$label} size="xs">
          Following
        </Text>
        <Text size="xl" fontWeight="bold">
          255
        </Text>
      </View>
    </>
  );
};

const $label: TextStyle = {
  color: colors.textSecondary,
};
