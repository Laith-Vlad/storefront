// categoryReducer.js
const initialState = {
    activeCategory: null,
    categories: ['Food', 'Electronics', 'Games','Weaopons'],
  };
  
  const categoryReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ACTIVATE_CATEGORY':
        return { ...state, activeCategory: action.payload };
      default:
        return state;
    }
  };
  
  export default categoryReducer;
  