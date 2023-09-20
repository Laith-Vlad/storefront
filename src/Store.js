// store.js
import { combineReducers, createStore,applyMiddleware } from "redux";
import categoryReducer from './reducers/CatagoryReducer';
import productReducer from './reducers/ProductReducer';
import cartReducer from './reducers/cartReducer'
import thunk from "redux-thunk";
const rootReducer = combineReducers({
  categories: categoryReducer,
  products: productReducer,
  cart: cartReducer,

});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
