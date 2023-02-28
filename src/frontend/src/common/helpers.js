export const getIngredient = (ingredient) => {
  // const objIngredient = {};
  // objIngredient.id = ingredient.id;
  // objIngredient.name = ingredient.name;
  // objIngredient.image = ingredient.image;
  // objIngredient.price = ingredient.price;
  // objIngredient.totalPrice = 0;
  // objIngredient.count = 0;
  return {...ingredient,totalPrice: 0,count: 0 };
};