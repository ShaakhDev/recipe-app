import {Text} from '@/components';
import {colors} from '@/theme';
import {Recipe} from '@/types';
import {View, ViewStyle} from 'react-native';

type StepsContentProps = {
  items: Recipe['instructions'];
};

export const StepsContent = ({items}: StepsContentProps) => {
  return (
    <>
      {items?.map((item, index) => (
        <View key={index} style={$card}>
          <Text size="xs" fontWeight="bold">
            Step {index + 1}
          </Text>
          <Text size="xs">{item}</Text>
        </View>
      ))}
    </>
  );
};

const $card: ViewStyle = {
  backgroundColor: colors.inputBorder,
  opacity: 0.7,
  borderRadius: 10,

  padding: 10,
  marginVertical: 10,
};
