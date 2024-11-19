export type Ingredient = {
  name: string;
  quantity: string;
};

export type Recipe = {
  id: string;
  title: string;
  description: string;
  time: string;
  instructions: string[];
  ingredients: Ingredient[];
  category: string[];
  image: string;
};
