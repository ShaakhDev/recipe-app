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
///============================ Response types ============================

export type CreateRecipeResponse = {};
