import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Typography, Card, CardContent, CardMedia, Grid, Container, Button, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';

// Import your Redux action to add products to the cart
import { addToCartAction } from '../../Actions/cartActions'; // Replace with your actual import

const Products = ({ selectedCategory }) => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state);
  const [detailsOpen, setDetailsOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const addToCart = (product) => {
    // Dispatch an action to add the product to the cart
    dispatch(addToCartAction(product));
  };

  const viewDetails = (product) => {
    setSelectedProduct(product);
    setDetailsOpen(true);
  };

  const handleCloseDetails = () => {
    setDetailsOpen(false);
  };

  // Filter products based on the selected category
  const filteredProducts = products.products.products.filter((product) => product.category === products.categories.activeCategory);

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Products in {selectedCategory}
      </Typography>
      <Grid container spacing={3}>
        {filteredProducts.map((product) => (
          <Grid item xs={12} sm={6} md={4} key={product.id}>
            <Card>
              <CardMedia
                component="img"
                alt={product.name}
                height="200"
                image={product.imageUrl}
              />
              <CardContent>
                <Typography variant="h6">{product.name}</Typography>
                <Typography variant="body2">{product.description}</Typography>
                <Button variant="contained" color="primary" onClick={() => addToCart(product)}>Add to cart</Button>
                <Button variant="outlined" color="primary" onClick={() => viewDetails(product)}>Details</Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Details Dialog */}
      <Dialog open={detailsOpen} onClose={handleCloseDetails}>
        {selectedProduct && (
          <>
            <DialogTitle>{selectedProduct.name}</DialogTitle>
            <DialogContent>
              <Typography variant="body2">{selectedProduct.description}</Typography>
              <Typography variant="body2">Price: {selectedProduct.price}</Typography>
              {/* Add more product details here */}
            </DialogContent>
            <DialogActions>
              <Button onClick={handleCloseDetails} color="primary">
                Close
              </Button>
            </DialogActions>
          </>
        )}
      </Dialog>
    </Container>
  );
};

export default Products;
