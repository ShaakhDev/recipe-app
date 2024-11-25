import {colors, spacing} from '@/theme';
import {PropsWithChildren} from 'react';
import {ScrollView, View, ViewStyle} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

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
    <View style={{flex: 1}}>
      <KeyboardAwareScrollView style={$keyboardAware}>
        <ScrollView
          style={style}
          contentContainerStyle={[$container, contentContainerStyle]}>
          {children}
        </ScrollView>
      </KeyboardAwareScrollView>
    </View>
  );
};

const $container: ViewStyle = {
  backgroundColor: colors.screenBackground,
  paddingVertical: spacing.lg - 4,
  paddingHorizontal: spacing.md,
  flex: 1,
};

const $keyboardAware: ViewStyle = {
  flex: 1,
  backgroundColor: colors.screenBackground,
};
