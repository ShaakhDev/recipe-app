import {BottomSheetModal} from '@gorhom/bottom-sheet';
import {View} from 'react-native';

type FilterBottomSheetProps = {
  bottomSheetRef: React.RefObject<BottomSheetModal>;
};

export const FilterBottomSheet = ({bottomSheetRef}: FilterBottomSheetProps) => {
  return (
    <BottomSheetModal ref={bottomSheetRef} snapPoints={['50%']}>
      <View></View>
    </BottomSheetModal>
  );
};
