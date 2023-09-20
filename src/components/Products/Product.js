import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Typography,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Container,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import axios from "axios";
import { addToCartAction } from "../../Actions/cartActions";
import { increment } from "../../Actions/CatagoryAction";

const Products = ({ selectedCategory }) => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state);
  const [detailsOpen, setDetailsOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Fetch data when the component mounts
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, [products]);

  const fetchData = () => {
    axios
      .get(`https://api-js401.herokuapp.com/api/v1/products`)
      .then((data) => {
        console.log("data", data.data.results);
        dispatch(increment(data.data.results));
        setLoading(false); // Data is received, set loading to false
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false); // Handle errors and set loading to false
      });
  };
  const addToCart = (product) => {
    dispatch(addToCartAction(product));
  };

  const viewDetails = (product) => {
    setSelectedProduct(product);
    setDetailsOpen(true);
  };

  const handleCloseDetails = () => {
    setDetailsOpen(false);
  };

  const filteredProducts = products.products.products.filter(
    (product) => product.category === products.categories.activeCategory
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
                <Typography variant="h6">{product.inStock}</Typography>
                <Typography variant="body2">{product.description}</Typography>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => {
                    addToCart(product);
                    setLoading(true);
                  }}
                >
                  Add to cart
                </Button>
                <Button
                  variant="outlined"
                  color="primary"
                  onClick={() => viewDetails(product)}
                >
                  Details
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Dialog open={detailsOpen} onClose={handleCloseDetails}>
        {selectedProduct && (
          <>
            <DialogTitle>{selectedProduct.name}</DialogTitle>
            <DialogContent>
              <Typography variant="body2">
                {selectedProduct.description}
              </Typography>
              <Typography variant="body2">
                Price: {selectedProduct.price}
              </Typography>
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
