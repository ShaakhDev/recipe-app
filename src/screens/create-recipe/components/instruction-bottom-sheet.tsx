import {BaseBottomSheet, Button, Text, TextField} from '@/components';
import {spacing} from '@/theme';
import {BottomSheetModal} from '@gorhom/bottom-sheet';
import {useEffect, useState} from 'react';
import {TextStyle, View, ViewStyle} from 'react-native';

type InstructionBottomSheetProps = {
  bottomSheetRef: React.RefObject<BottomSheetModal>;
  onAdd: (value: string) => void;
  onUpdate?: (value: string) => void;
  defaultValue?: string;
};

export const InstructionBottomSheet = ({
  bottomSheetRef,
  onAdd,
  defaultValue,
  onUpdate,
}: InstructionBottomSheetProps) => {
  const [instruction, setInstruction] = useState('');
  const isEditMode = !!defaultValue;
  const handleAdd = () => {
    onAdd(instruction);
    setInstruction('');
    bottomSheetRef.current?.dismiss();
  };

  const handleUpdate = () => {
    onUpdate?.(instruction);
    bottomSheetRef.current?.dismiss();
  };

  useEffect(() => {
    setInstruction(defaultValue ?? '');
  }, [defaultValue]);
  return (
    <BaseBottomSheet bottomSheetRef={bottomSheetRef} snap="45%">
      <View style={$container}>
        <Text fontWeight="medium" style={$title}>
          Add instruction
        </Text>
        <TextField
          value={instruction}
          onChangeText={setInstruction}
          label="Instruction"
          placeholder="Enter instruction step"
          multiline
          numberOfLines={4}
        />
        <Button style={$button} onPress={isEditMode ? handleUpdate : handleAdd}>
          {defaultValue ? 'Update' : 'Add'}
        </Button>
      </View>
    </BaseBottomSheet>
  );
};

const $container: ViewStyle = {
  padding: spacing.md,
};
const $title: TextStyle = {
  textAlign: 'center',
};
const $button: ViewStyle = {
  marginTop: spacing.lg,
};
