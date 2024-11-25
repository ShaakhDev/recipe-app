import {colors, spacing} from '@/theme';
import {Pressable, View} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import {BaseBottomSheet} from '../base-bottom-sheet';
import {BottomSheetModal} from '@gorhom/bottom-sheet';
import {useRef} from 'react';
import {Button} from '../button';
import {Storage} from '@/utils';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {RootStackParamList} from '@/navigators';

export const ProfileMoreActions = () => {
  const bottomSheetRef = useRef<BottomSheetModal>(null);
  const onPressMore = () => {
    bottomSheetRef.current?.present();
  };
  return (
    <>
      <MoreActionsBottomSheet bottomSheetRef={bottomSheetRef} />
      <Pressable style={{marginRight: spacing.lg}} onPress={onPressMore}>
        <Feather name="more-horizontal" size={24} color={colors.text} />
      </Pressable>
    </>
  );
};

type ProfileMoreActionsProps = {
  bottomSheetRef: React.RefObject<BottomSheetModal>;
};

const MoreActionsBottomSheet = ({bottomSheetRef}: ProfileMoreActionsProps) => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const handleLogout = () => {
    Storage.clearStorage();
    navigation.navigate('Auth');
  };
  return (
    <BaseBottomSheet bottomSheetRef={bottomSheetRef} snap="30%">
      <View style={{padding: spacing.md, gap: spacing.md}}>
        <Button>Edit profile</Button>
        <Button onPress={handleLogout}>Logout</Button>
      </View>
    </BaseBottomSheet>
  );
};
