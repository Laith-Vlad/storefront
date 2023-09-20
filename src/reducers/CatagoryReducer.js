// categoryReducer.js
const initialState = {
    activeCategory: "food",
    categories: ['food', 'electronics', 'games','weapons'],
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
  