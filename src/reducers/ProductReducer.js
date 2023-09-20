
const initialState = {
    products: [
    
      
    ]
  };
  
  const productReducer = (state = initialState, action) => {
    const { type, payload } = action;
    console.log("assdadasdasdas",state.products)
    switch (type){
      case 'FIRST':
        
                return { ...state, products: payload };
                default:
                  return state;
    }
    


  };
  
  export default productReducer;
  