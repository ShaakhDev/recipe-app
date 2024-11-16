import {baseApi} from '../api';

import {RTKTagNames} from '@/constants';
import {
  CreateRecipeRequest,
  CreateRecipeResponse,
} from './recipe.feature.types';

const RecipeEndpoints = baseApi.injectEndpoints({
  endpoints: build => ({
    createRecipe: build.mutation<CreateRecipeResponse, CreateRecipeRequest>({
      query: body => ({
        url: '/recipe/create',
        method: 'POST',
        body,
      }),
      invalidatesTags: [RTKTagNames.RECIPE],
    }),
  }),
  overrideExisting: true,
});

export const {useCreateRecipeMutation} = RecipeEndpoints;
