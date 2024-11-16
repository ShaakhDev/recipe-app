import {Button, ScreenView, Text, TextField} from '@/components';
import {useCreateRecipeMutation} from '@/features';
import {useHandleRequest} from '@/hooks';
import {colors, spacing} from '@/theme';
import {
  Controller,
  FieldValues,
  SubmitHandler,
  useFieldArray,
  useForm,
} from 'react-hook-form';
import {Pressable} from 'react-native';
import {View, ViewStyle} from 'react-native';

export const CreateRecipeScreen = () => {
  const handleRequest = useHandleRequest();
  const [createRecipe] = useCreateRecipeMutation();

  const {
    control,
    handleSubmit,
    watch,
    reset,
    formState: {errors},
  } = useForm({
    defaultValues: {
      title: '',
      description: '',
      time: '',
      ingredient_name: '',
      ingredient_quantity: '',

      instructions: ['step 1', 'step 2'],
    },
  });

  const {fields} = useFieldArray({
    control,
    name: 'instructions',
  });

  const onSubmit: SubmitHandler<FieldValues> = async data => {};
  return (
    <ScreenView>
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
        {fields?.map(({id}, index) => (
          <Text key={id}>{watch(`instructions.${index}`)}</Text>
        ))}
        <Pressable style={$addIns}>
          <Text size="xs" style={{color: colors.primary}}>
            Add another intstruction +
          </Text>
        </Pressable>
        <Controller
          name="ingredient_name"
          control={control}
          rules={{required: 'Ingredient name is required'}}
          render={({field: {value, onChange}}) => (
            <TextField
              label="Ingredient name"
              value={value}
              onChangeText={onChange}
              error={errors?.ingredient_name?.message as string}
              placeholder="Enter name of ingredient"
            />
          )}
        />
        <Controller
          name="ingredient_quantity"
          control={control}
          rules={{required: 'Quantity is required'}}
          render={({field: {value, onChange}}) => (
            <TextField
              label="Quantity"
              value={value}
              onChangeText={onChange}
              error={errors?.ingredient_quantity?.message as string}
              placeholder="Enter quantity of ingredient"
            />
          )}
        />

        <Button style={{marginTop: 'auto'}} onPress={handleSubmit(onSubmit)}>
          Create
        </Button>
      </View>
    </ScreenView>
  );
};
const $inputContainer: ViewStyle = {
  gap: spacing.md,
};
const $addIns: ViewStyle = {
  borderWidth: 1,
  borderRadius: 8,
  justifyContent: 'center',
  alignItems: 'center',
  borderColor: colors.primary,
  paddingVertical: 3,
  paddingHorizontal: spacing.md,
  backgroundColor: colors.palette.primary40,
};
