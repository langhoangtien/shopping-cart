export const addCartAction = product => ({
  product: { ...product },
  type: "ADD_CART"
});
