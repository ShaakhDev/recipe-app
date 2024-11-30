import {PropsWithChildren} from 'react';
import {Pressable} from 'react-native';
import {
  Asset,
  ImageLibraryOptions,
  launchImageLibrary,
} from 'react-native-image-picker';

type FilePickerProps = {
  onChange: (value: Asset) => void;
} & PropsWithChildren;

const options: ImageLibraryOptions = {
  mediaType: 'photo',
};

export const FilePicker = ({children, onChange}: FilePickerProps) => {
  const handleFilePicker = async () => {
    const imageResponse = await launchImageLibrary(options);
    if (!imageResponse.assets) {
      return;
    }
    const image = imageResponse?.assets[0];
    onChange(image);
  };
  return <Pressable onPress={handleFilePicker}>{children}</Pressable>;
};
