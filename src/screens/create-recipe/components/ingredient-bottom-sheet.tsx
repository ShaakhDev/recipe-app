import {BaseBottomSheet, Button, Text, TextField} from '@/components';
import {spacing} from '@/theme';
import {Ingredient} from '@/types';
import {showToast} from '@/utils';
import {BottomSheetModal} from '@gorhom/bottom-sheet';
import {useEffect} from 'react';
import {Controller, useForm} from 'react-hook-form';
import {TextStyle, View, ViewStyle} from 'react-native';

type IngredientBottomSheetProps = {
  bottomSheetRef: React.RefObject<BottomSheetModal>;
  onAdd: (ingredient: Ingredient) => void;
  onUpdate?: (ingredient: Ingredient) => void;
  defaultValue?: Ingredient;
};

export const IngredientBottomSheet = ({
  bottomSheetRef,
  onAdd,
  defaultValue,
  onUpdate,
}: IngredientBottomSheetProps) => {
  const {
    control,
    getValues,
    setValue,
    reset,
    formState: {isValid},
  } = useForm<Ingredient>();

  const isEditMode = !!defaultValue;

  const handleAdd = () => {
    if (!isValid) {
      showToast('Please fill all the fields');
      return;
    }
    onAdd(getValues());
    reset({name: '', quantity: ''});
    bottomSheetRef.current?.dismiss();
  };

  const handleUpdate = () => {
    onUpdate?.(getValues());
    reset({name: '', quantity: ''});
    bottomSheetRef.current?.dismiss();
  };

  useEffect(() => {
    if (defaultValue) {
      setValue('name', defaultValue.name);
      setValue('quantity', defaultValue.quantity);
    }
  }, [defaultValue]);

  return (
    <BaseBottomSheet bottomSheetRef={bottomSheetRef} snap="45%">
      <View style={$container}>
        <Text fontWeight="medium" style={$title}>
          Add ingredient
        </Text>
        <View style={{gap: spacing.md}}>
          <Controller
            name="name"
            rules={{required: 'Ingredient name is required'}}
            control={control}
            render={({field: {value, onChange}}) => (
              <TextField
                value={value}
                onChangeText={onChange}
                label="Ingredient name"
                placeholder="Enter ingredient name"
              />
            )}
          />
          <Controller
            name="quantity"
            control={control}
            rules={{required: 'Quantity is required'}}
            render={({field: {value, onChange}}) => (
              <TextField
                value={value}
                onChangeText={onChange}
                label="Quantity"
                placeholder="Enter quantity"
              />
            )}
          />
        </View>
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
