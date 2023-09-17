
const initialState = {
    products: [
      {
        id: 1,
        name: 'banana',
        description: 'Description of Product 1',
        imageUrl: 'https://example.com/product1.jpg',
        category: 'Food',
      },
      {
        id: 2,
        name: 'sword',
        description: 'best sword',
        imageUrl: 'https://example.com/product2.jpg',
        category: 'Weaopons', 
      },
      
    ]
  };
  
  const productReducer = (state = initialState, action) => {
    
    return state;
  };
  
  export default productReducer;
  