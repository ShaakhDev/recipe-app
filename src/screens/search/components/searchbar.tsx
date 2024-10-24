import {colors, spacing} from '@/theme';
import React from 'react';
import {View, TextInput, Pressable, ViewStyle, TextStyle} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import IonIcon from 'react-native-vector-icons/Ionicons';
import {FilterBottomSheet} from './filter-bottom-sheet';
import {BottomSheetModal} from '@gorhom/bottom-sheet';

export const SearchBar = () => {
  const bottomSheetRef = React.useRef<BottomSheetModal>(null);
  const handleFilterPress = () => {
    bottomSheetRef?.current?.present();
  };
  return (
    <>
      <FilterBottomSheet bottomSheetRef={bottomSheetRef} />
      <View style={$searchRow}>
        <View style={$searchBar}>
          <Icon name="search1" size={26} color={colors.inputBorder} />

          <TextInput
            placeholder="Search recipe"
            placeholderTextColor={colors.textSecondary}
            style={$input}
          />
        </View>
        <Pressable style={$filter} onPress={handleFilterPress}>
          <IonIcon
            name="options-outline"
            size={26}
            color={colors.inputBorder}
          />
        </Pressable>
      </View>
    </>
  );
};

const $searchRow: ViewStyle = {
  flexDirection: 'row',
  alignItems: 'center',
  // marginTop: spacing.lg,
  paddingHorizontal: spacing.xs,
};
const $searchBar: ViewStyle = {
  flex: 1,
  gap: spacing.xs,
  height: 42,
  flexDirection: 'row',
  alignItems: 'center',
  borderRadius: 10,
  borderWidth: 1,
  borderColor: colors.inputBorder,
  paddingHorizontal: spacing.xs,
};

const $filter: ViewStyle = {
  height: 40,
  width: 40,
  borderRadius: 10,
  backgroundColor: colors.primary,
  justifyContent: 'center',
  alignItems: 'center',
  marginLeft: spacing.xs,
};

const $input: TextStyle = {fontSize: 11, color: colors.text};
