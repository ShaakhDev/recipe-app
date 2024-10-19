import {colors, spacing} from '@/theme';
import {PropsWithChildren} from 'react';
import {ScrollView, ViewStyle} from 'react-native';

type ScreenViewProps = {
  style?: ViewStyle;
  contentContainerStyle?: ViewStyle;
} & PropsWithChildren;

export const ScreenView = ({
  style,
  contentContainerStyle,
  children,
}: ScreenViewProps) => {
  return (
    <ScrollView
      style={style}
      contentContainerStyle={[$container, contentContainerStyle]}>
      {children}
    </ScrollView>
  );
};

const $container: ViewStyle = {
  backgroundColor: colors.screenBackground,
  paddingVertical: spacing.lg - 4,
  paddingHorizontal: spacing.md,
  flex: 1,
};
