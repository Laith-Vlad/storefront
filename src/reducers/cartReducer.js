// cartReducer.js

import { ADD_TO_CART, REMOVE_FROM_CART } from '../Actions/cartActions';
import axios from "axios"
const initialState = {
  cartItems: [],
  loaded: false,
};

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            console.log(action.payload,"jad3an king of consol");
            const newItem = action.payload;
      // Check if the item is already in the cart
      console.log(state.cartItems ,"laith king of consol");
      const existingItem = state.cartItems.find((item) => item.name === newItem.name);

      if (!existingItem) {
        axios
          .put(`https://api-js401.herokuapp.com/api/v1/products/${action.payload._id}`, {
            inStock: action.payload.inStock - 1,
          })
          .then((data) => {
            console.log(data);
          })
          .catch((error) => {
            console.error('Error updating product stock:', error);
          });

        return { ...state, cartItems: [...state.cartItems, action.payload] };
      } else {
        return { ...state, cartItems: [...state.cartItems] };
      }
      

    case REMOVE_FROM_CART:
        axios
        .put(`https://api-js401.herokuapp.com/api/v1/products/${action.payload._id}`, {
          inStock: action.payload.inStock,
        })
        .then((data) => {
          console.log(data);
        })
        .catch((error) => {
          console.error('Error resetting product stock:', error);
        });

      const removed = state.cartItems.filter((item) => item.name !== action.payload.name);

      return { ...state, cartItems: removed };

    default:
      return state;
  }
};

export default cartReducer;
