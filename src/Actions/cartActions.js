// cartActions.js

// Action Types
export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';

// Action Creators
export const addToCartAction = (product) => ({
  type: ADD_TO_CART,
  payload: product,
});

export const removeFromCartAction = (productId) => ({
  type: REMOVE_FROM_CART,
  payload: productId,
});
