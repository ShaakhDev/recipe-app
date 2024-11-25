import {Text} from '@/components';
import {colors} from '@/theme';
import {Recipe} from '@/types';
import {View, ViewStyle} from 'react-native';

type IngredientsContentProps = {
  items: Recipe['ingredients'];
};

export const IngredientsContent = ({items}: IngredientsContentProps) => {
  return (
    <>
      {items?.map((item, index) => (
        <View style={$card} key={index}>
          <Text fontWeight="bold">{item.name}</Text>
          <Text size="xs" style={{color: colors.text}}>
            {item.quantity}
          </Text>
        </View>
      ))}
    </>
  );
};

const $card: ViewStyle = {
  backgroundColor: colors.inputBorder,
  opacity: 0.7,
  borderRadius: 10,
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: 10,
  marginVertical: 10,
  flexDirection: 'row',
};
