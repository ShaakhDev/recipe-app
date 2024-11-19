import {
  BottomSheetBackdrop,
  BottomSheetBackdropProps,
  BottomSheetModal,
  BottomSheetScrollView,
} from '@gorhom/bottom-sheet';
import {PropsWithChildren, useCallback} from 'react';

type BaseBottomSheetProps = {
  bottomSheetRef: React.RefObject<BottomSheetModal>;
  snap?: string;
} & PropsWithChildren;

export const BaseBottomSheet = ({
  bottomSheetRef,
  snap,
  children,
}: BaseBottomSheetProps) => {
  const snapPoints = snap ? [snap] : ['50%'];

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
      snapPoints={snapPoints}
      backdropComponent={renderBackdrop}>
      <BottomSheetScrollView>{children}</BottomSheetScrollView>
    </BottomSheetModal>
  );
};
