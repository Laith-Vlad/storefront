// cartReducer.js

import { ADD_TO_CART, REMOVE_FROM_CART } from '../Actions/cartActions';

const initialState = {
  cartItems: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const newItem = action.payload;
      // Check if the item is already in the cart
      const existingItem = state.cartItems.find((item) => item.id === newItem.id);

      if (existingItem) {
        // If the item is already in the cart, increase the quantity
        return {
          ...state,
          cartItems: state.cartItems.map((item) =>
            item.id === newItem.id ? { ...item, quantity: item.quantity + 1 } : item
          ),
        };
      } else {
        // If the item is not in the cart, add it with a quantity of 1
        return {
          ...state,
          cartItems: [...state.cartItems, { ...newItem, quantity: 1 }],
        };
      }

    case REMOVE_FROM_CART:
      const productId = action.payload;
      // Remove the item from the cart
      const updatedCartItems = state.cartItems.filter((item) => item.id !== productId);
      return {
        ...state,
        cartItems: updatedCartItems,
      };

    default:
      return state;
  }
};

export default cartReducer;
