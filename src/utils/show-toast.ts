import {colors} from '@/theme';
import Toast from 'react-native-simple-toast';

export const showToast = (message: string) => {
  return Toast.show(message, Toast.SHORT, {
    backgroundColor: colors.palette.gray100,
    textColor: colors.palette.white,
    tapToDismissEnabled: true,
  });
};
