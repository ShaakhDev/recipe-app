import {Recipe} from '@/types';

/// ============================ Request types ============================
type Ingredient = {
  name: string;
  quantity: string;
};

export type CreateRecipeRequest = {
  title: string;
  description: string;
  time: string;
  ingredients: Ingredient[];
  instructions: string[];
  image: string;
  category: string[];
};

export type GetAllRecipesRequest = {
  category?: string;
};

export type GetRecipeByIdRequest = {
  id: string;
};
///============================ Response types ============================

export type CreateRecipeResponse = {};

export type GetAllRecipesResponse = Recipe[];

export type GetRecipeByIdResponse = Recipe;
