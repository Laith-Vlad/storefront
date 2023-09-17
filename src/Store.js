// store.js
import { createStore, combineReducers } from 'redux';
import categoryReducer from './reducers/CatagoryReducer';
import productReducer from './reducers/ProductReducer';


const rootReducer = combineReducers({
  categories: categoryReducer,
  products: productReducer,

});

const store = createStore(rootReducer);

export default store;
