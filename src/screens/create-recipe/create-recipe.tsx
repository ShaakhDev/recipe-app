import {Button, ScreenView, Text, TextField} from '@/components';
import {useCreateRecipeMutation} from '@/features';
import {useHandleRequest} from '@/hooks';
import {colors, spacing} from '@/theme';
import {Ingredient, Recipe} from '@/types';
import {
  Controller,
  FieldValues,
  SubmitHandler,
  useFieldArray,
  useForm,
} from 'react-hook-form';
import {Pressable, ScrollView} from 'react-native';
import {View, ViewStyle} from 'react-native';
import {IngredientBottomSheet, InstructionBottomSheet} from './components';
import {useRef, useState} from 'react';
import {BottomSheetModal} from '@gorhom/bottom-sheet';
import Icon from 'react-native-vector-icons/AntDesign';
import {showToast} from '@/utils';

export const CreateRecipeScreen = () => {
  const handleRequest = useHandleRequest();
  const [createRecipe, {isLoading}] = useCreateRecipeMutation();
  const instructionSheetRef = useRef<BottomSheetModal>(null);
  const ingredientSheetRef = useRef<BottomSheetModal>(null);
  const [selectedIntsructionIndex, setSelectedInstructionIndex] = useState(-1);
  const [selectedIngredientIndex, setSelectedIngredientIndex] = useState(-1);

  const {
    control,
    handleSubmit,
    watch,
    reset,
    formState: {errors},
  } = useForm();

  const ingredientsArray = useFieldArray({
    control,
    name: 'ingredients',
  });

  const instructionsArray = useFieldArray({
    control,
    name: 'instructions',
  });

  const onSubmit: SubmitHandler<FieldValues> = async data => {
    await handleRequest({
      request: async () => {
        const body = {
          ...data,
          image: 'https://via.placeholder.com/600/771796',
          category: ['Uzbek cuisine'],
        } as Recipe;

        const res = await createRecipe(body);
        return res;
      },
      onSuccess: () => {
        reset({ingredients: [], instructions: []});
        showToast('Recipe created successfully');
      },
      onError: err => {
        showToast('Failed to create recipe');
        console.log(err);
      },
    });
  };

  const addInstructionPress = () => {
    setSelectedInstructionIndex(-1);
    instructionSheetRef.current?.present();
  };
  const addInstruction = (value: string) => {
    instructionsArray.append(value);
  };
  const updateInstruction = (value: string) => {
    instructionsArray.update(selectedIntsructionIndex, value);
    setSelectedInstructionIndex(-1);
  };

  const removeInstruction = (index: number) => () => {
    instructionsArray.remove(index);
  };

  const onPressInstruction = (index: number) => () => {
    setSelectedInstructionIndex(index);
    instructionSheetRef.current?.present();
  };
  const onPressIngredient = (index: number) => () => {
    setSelectedIngredientIndex(index);
    ingredientSheetRef.current?.present();
  };

  const addIngredientPress = () => {
    ingredientSheetRef.current?.present();
  };

  const addIngredient = (ingredient: Ingredient) => {
    ingredientsArray.append(ingredient);
  };

  const updateIngredient = (ingredient: Ingredient) => {
    console.log(ingredient);
    ingredientsArray.update(selectedIngredientIndex, ingredient);
    setSelectedIngredientIndex(-1);
  };
  const removeIngredient = (index: number) => () => {
    ingredientsArray.remove(index);
  };

  return (
    <>
      <InstructionBottomSheet
        bottomSheetRef={instructionSheetRef}
        onAdd={addInstruction}
        onUpdate={updateInstruction}
        defaultValue={watch(`instructions.${selectedIntsructionIndex}`)}
      />
      <IngredientBottomSheet
        bottomSheetRef={ingredientSheetRef}
        onAdd={addIngredient}
        onUpdate={updateIngredient}
        defaultValue={watch(`ingredients.${selectedIngredientIndex}`)}
      />
      <ScreenView style={{flex: 1}}>
        <View style={$inputContainer}>
          <Controller
            name="title"
            control={control}
            rules={{required: 'Title is required'}}
            render={({field: {value, onChange}}) => (
              <TextField
                label="Title"
                value={value}
                onChangeText={onChange}
                error={errors?.title?.message as string}
                placeholder="Enter recipe name"
              />
            )}
          />
          <Controller
            name="description"
            control={control}
            rules={{required: 'Description is required'}}
            render={({field: {value, onChange}}) => (
              <TextField
                label="Description"
                value={value}
                multiline={true}
                numberOfLines={6}
                onChangeText={onChange}
                error={errors?.description?.message as string}
                placeholder="Enter recipe description"
              />
            )}
          />
          <Controller
            name="time"
            control={control}
            rules={{required: 'Time is required'}}
            render={({field: {value, onChange}}) => (
              <TextField
                label="Time"
                value={value}
                onChangeText={onChange}
                error={errors?.time?.message as string}
                placeholder="Enter recipe time"
              />
            )}
          />
          <Text size="xs">Instructions</Text>
          {instructionsArray.fields?.map(({id}, index) => (
            <Pressable
              key={id}
              onPress={onPressInstruction(index)}
              style={$instruction}>
              <Text
                size="xs"
                style={{color: colors.textSecondary, flex: 1}}
                numberOfLines={2}>
                {watch(`instructions.${index}`)}
              </Text>
              <Pressable onPress={removeInstruction(index)} hitSlop={15}>
                <Icon name="close" size={18} color={colors.textSecondary} />
              </Pressable>
            </Pressable>
          ))}
        </View>
        <Pressable style={$addIns} onPress={addInstructionPress}>
          <Text size="xs" style={{color: colors.primary}}>
            Add intstruction +
          </Text>
        </Pressable>
        <Text size="xs">Ingredients</Text>
        {ingredientsArray.fields?.map(({id}, index) => (
          <Pressable
            style={$ingredient}
            key={id}
            onPress={onPressIngredient(index)}>
            <View style={{flex: 1}}>
              <Text size="xs" numberOfLines={1}>
                {watch(`ingredients.${index}.name`)}
              </Text>
              <Text
                size="xs"
                style={{color: colors.textSecondary, flex: 1}}
                numberOfLines={1}>
                {watch(`ingredients.${index}.quantity`)}
              </Text>
            </View>
            <Pressable onPress={removeIngredient(index)} hitSlop={15}>
              <Icon name="close" size={18} color={colors.textSecondary} />
            </Pressable>
          </Pressable>
        ))}
        <Pressable style={$addIns} onPress={addIngredientPress}>
          <Text size="xs" style={{color: colors.primary}}>
            Add ingredient +
          </Text>
        </Pressable>
        <Button
          isLoading={isLoading}
          style={{marginTop: spacing.md}}
          onPress={handleSubmit(onSubmit)}
          // onPress={() => reset()}
        >
          Create
        </Button>
      </ScreenView>
    </>
  );
};

const $inputContainer: ViewStyle = {
  gap: spacing.md,
  flex: 1,
};
const $addIns: ViewStyle = {
  borderWidth: 1,
  borderRadius: 8,
  marginVertical: spacing.md,
  justifyContent: 'center',
  alignItems: 'center',
  borderColor: colors.primary,
  paddingVertical: 3,
  paddingHorizontal: spacing.md,
  backgroundColor: colors.palette.primary40,
};
const $instruction: ViewStyle = {
  borderWidth: 1,
  borderColor: colors.textSecondary,
  flexDirection: 'row',
  alignItems: 'center',
  gap: spacing.xs,
  borderRadius: 8,
  paddingHorizontal: spacing.md,
  paddingVertical: spacing.xs,
};

const $ingredient: ViewStyle = {
  borderWidth: 1,
  borderColor: colors.textSecondary,
  flexDirection: 'row',
  alignItems: 'center',
  gap: spacing.xs,
  borderRadius: 8,
  marginVertical: spacing.sm,
  paddingHorizontal: spacing.md,
  paddingVertical: spacing.xs,
};
