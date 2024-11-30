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
export type GetNewRecipesRequest = void;

export type FileUploadRequest = FormData;
///============================ Response types ============================

export type CreateRecipeResponse = {};

export type GetAllRecipesResponse = Recipe[];

export type GetRecipeByIdResponse = Recipe;

export type GetNewRecipesResponse = Recipe[];

export type FileUploadResponse = {
  filePath: string;
};
