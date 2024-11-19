import {colors, fonts} from '@/theme';
import {PropsWithChildren} from 'react';
import {Text as RNText, TextStyle} from 'react-native';

type TextProps = {
  size?: keyof typeof TextSizes;
  style?: TextStyle;
  fontWeight?: keyof typeof fonts.poppins;
  appearance?: 'dark' | 'white';
  numberOfLines?: number;
} & PropsWithChildren;

export const Text = ({
  fontWeight,
  size,
  style,
  children,
  appearance = 'dark',
  numberOfLines,
}: TextProps) => {
  const textStyles = [
    $baseTextStyle,
    appearance === 'white' && {color: colors.palette.white},
    size && {fontSize: TextSizes[size || 'md']},
    fontWeight && {fontFamily: fonts.poppins[fontWeight]},
    style,
  ];
  return (
    <RNText style={textStyles} numberOfLines={numberOfLines}>
      {children}
    </RNText>
  );
};

const TextSizes = {
  xss: 10,
  xs: 12,
  sm: 14,
  md: 16,
  lg: 18,
  xl: 20,
  xxl: 24,
};

const $baseTextStyle: TextStyle = {
  color: colors.text,
  fontSize: TextSizes.md,
  fontFamily: fonts.poppins.regular,
};
