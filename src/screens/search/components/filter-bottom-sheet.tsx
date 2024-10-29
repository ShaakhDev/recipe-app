import {
  BottomSheetBackdrop,
  BottomSheetBackdropProps,
  BottomSheetModal,
} from '@gorhom/bottom-sheet';
import {useCallback} from 'react';
import {View} from 'react-native';

type FilterBottomSheetProps = {
  bottomSheetRef: React.RefObject<BottomSheetModal>;
};

export const FilterBottomSheet = ({bottomSheetRef}: FilterBottomSheetProps) => {
  const renderBackdrop = useCallback(
    (props: BottomSheetBackdropProps) => (
      <BottomSheetBackdrop
        {...props}
        disappearsOnIndex={-1}
        appearsOnIndex={0}
      />
    ),
    [],
  );

  return (
    <BottomSheetModal
      ref={bottomSheetRef}
      snapPoints={['50%']}
      backdropComponent={renderBackdrop}>
      <View style={{flex: 1}}></View>
    </BottomSheetModal>
  );
};
