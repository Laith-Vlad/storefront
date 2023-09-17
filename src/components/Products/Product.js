import React from 'react';
import { useSelector } from 'react-redux';
import { Typography, Card, CardContent, CardMedia, Grid, Container } from '@mui/material';

const Products = ({ selectedCategory }) => {
  // Use useSelector to access the updated selectedCategory from the Redux store
  const products = useSelector((state) => state);

  // Filter products based on the selected category
  console.log(products.products.products)
  const filteredProducts = products.products.products.filter((product) => product.category === products.categories.activeCategory
  );

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
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Products;
