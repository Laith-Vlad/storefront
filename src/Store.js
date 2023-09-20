// store.js
import { createStore, combineReducers } from 'redux';
import categoryReducer from './reducers/CatagoryReducer';
import productReducer from './reducers/ProductReducer';
import cartReducer from './reducers/cartReducer'

const rootReducer = combineReducers({
  categories: categoryReducer,
  products: productReducer,
  cart: cartReducer,

});

const store = createStore(rootReducer);

export default store;
