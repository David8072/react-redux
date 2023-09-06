export const increaseQuantity = (productId) => ({
    type: "INCREASE_QUANTITY",
    payload: productId,
  });
  
  export const decreaseQuantity = (productId) => ({
    type: "DECREASE_QUANTITY",
    payload: productId,
  });
  