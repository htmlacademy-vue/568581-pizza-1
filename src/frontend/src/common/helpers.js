export const getIngredient = (ingredient) => {
  const objIngredient = {};
  objIngredient.id = ingredient.id;
  objIngredient.name = ingredient.name;
  objIngredient.image = ingredient.image;
  objIngredient.price = ingredient.price;
  objIngredient.totalPrice = 0;
  objIngredient.count = 0;
  return objIngredient;
};
export const getSauce = (sauce) => {
  const objSauce = {};
  objSauce.id = sauce.id;
  objSauce.name = sauce.name;
  objSauce.price = sauce.price;
  objSauce.selected = true;
  return objSauce;
};
export const getSize = (size) => {
  const objSize = {};
  objSize.id = size.id;
  objSize.name = size.name;
  objSize.image = size.image;
  objSize.multiplier = size.multiplier;
  objSize.selected = false;
  return objSize;
};
export const getDough = (dough) => {
  const objDough = {};
  objDough.id = dough.id;
  objDough.name = dough.name;
  objDough.image = dough.image;
  objDough.description = dough.description;
  objDough.selected = false;
  return objDough;
};
