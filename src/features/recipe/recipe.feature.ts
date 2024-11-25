import {baseApi} from '../api';

import {EndpointNames, RTKTagNames} from '@/constants';
import {
  CreateRecipeRequest,
  CreateRecipeResponse,
  GetAllRecipesRequest,
  GetAllRecipesResponse,
  GetRecipeByIdRequest,
  GetRecipeByIdResponse,
} from './recipe.feature.types';

const RecipeEndpoints = baseApi.injectEndpoints({
  endpoints: build => ({
    getAllRecipes: build.query<GetAllRecipesResponse, GetAllRecipesRequest>({
      query: params => ({
        url: EndpointNames.GET_ALL_RECIPES,
        params,
      }),
      providesTags: [RTKTagNames.RECIPES],
    }),
    getRecipeById: build.query<GetRecipeByIdResponse, GetRecipeByIdRequest>({
      query: params => ({
        url: `${EndpointNames.GET_RECIPE_BY_ID}/${params.id}`,
        params,
        providesTags: [RTKTagNames.RECIPE],
      }),
    }),
    createRecipe: build.mutation<CreateRecipeResponse, CreateRecipeRequest>({
      query: body => ({
        url: EndpointNames.CREATE_RECIPE,
        method: 'POST',
        body,
      }),
      invalidatesTags: [RTKTagNames.RECIPES],
    }),
  }),
  overrideExisting: true,
});

export const {
  // QUERIES
  useGetAllRecipesQuery,
  useGetRecipeByIdQuery,
  // MUTATIONS
  useCreateRecipeMutation,
} = RecipeEndpoints;
