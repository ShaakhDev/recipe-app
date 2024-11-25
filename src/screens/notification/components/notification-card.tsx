import {Text} from '@/components';
import {NotificationIcon} from '@/icons';
import {colors, spacing} from '@/theme';
import {View, ViewStyle} from 'react-native';

type NotificationCardProps = {
  item: {
    id: number;
    title: string;
    description: string;
    created_at: string;
    isRead: boolean;
  };
};

export const NotificationCard = ({item}: NotificationCardProps) => {
  return (
    <View style={$card}>
      <View style={{flex: 1}}>
        <Text size="xs" fontWeight="bold">
          {item?.title}
        </Text>
        <Text size="xs" style={{color: colors.palette.gray200}}>
          {item?.description}
        </Text>
      </View>
      <View>
        <NotificationIcon isRead={item?.isRead} />
      </View>
    </View>
  );
};
const $card: ViewStyle = {
  marginBottom: spacing.md,
  backgroundColor: colors.palette.gray400,
  opacity: 0.6,
  padding: spacing.md,
  borderRadius: spacing.sm,
  flexDirection: 'row',
};
