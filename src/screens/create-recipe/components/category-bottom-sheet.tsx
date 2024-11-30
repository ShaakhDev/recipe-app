import {BaseBottomSheet, Text} from '@/components';
import {categories} from '@/constants';
import {colors, spacing} from '@/theme';
import {BottomSheetModal, BottomSheetScrollView} from '@gorhom/bottom-sheet';
import {RefObject} from 'react';
import {Pressable, ViewStyle} from 'react-native';

type CategoryBottomSheetProps = {
  bottomSheetRef: RefObject<BottomSheetModal>;
  onSelect: (category: string) => void;
  selectedCategory?: string;
};

export const CategoryBottomSheet = ({
  bottomSheetRef,
  onSelect,
  selectedCategory,
}: CategoryBottomSheetProps) => {
  const handleSelect = (category: string) => () => {
    onSelect(category);
    bottomSheetRef.current?.close();
  };
  return (
    <BaseBottomSheet bottomSheetRef={bottomSheetRef} snap="40%">
      <BottomSheetScrollView style={$container}>
        {categories?.map(category => (
          <Pressable
            key={category}
            style={[$categoryItem, category === selectedCategory && $active]}
            onPress={handleSelect(category)}>
            <Text size="sm">{category}</Text>
          </Pressable>
        ))}
      </BottomSheetScrollView>
    </BaseBottomSheet>
  );
};

const $container: ViewStyle = {
  padding: spacing.md,
};

const $categoryItem: ViewStyle = {
  paddingVertical: spacing.xs,
  paddingHorizontal: spacing.sm,
  borderRadius: 8,
};

const $active: ViewStyle = {
  backgroundColor: colors.inputBorder,
};
