import React, { useState } from 'react';
import { connect } from 'react-redux'; // Import connect from react-redux
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge';
import Popover from '@mui/material/Popover';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemSecondaryAction from '@mui/material/ListItemSecondaryAction';
import DeleteIcon from '@mui/icons-material/Delete';

import { removeFromCartAction } from '../../Actions/cartActions'; // Import the removeFromCartAction action creator

function Header({ cartItems, removeFromCart }) {
  const titleStyle = {
    fontSize: '2rem',
    color: 'white',
    fontFamily: 'cursive',
  };

  // State to manage the popover open/close
  const [cartPopoverOpen, setCartPopoverOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleCartIconClick = (event) => {
    setAnchorEl(event.currentTarget);
    setCartPopoverOpen(true);
  };

  const handleCartPopoverClose = () => {
    setAnchorEl(null);
    setCartPopoverOpen(false);
  };

  const deleteCartItem = (itemId) => {
    // Dispatch an action to remove the item from the cart
    removeFromCart(itemId);
  };

  return (
    <AppBar position="static">
      <Toolbar style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div>
          <Typography variant="h6" component="div" style={titleStyle}>
            Laith Store
          </Typography>
        </div>
        <div>
          <IconButton color="inherit" onClick={handleCartIconClick}>
            <Badge badgeContent={cartItems.length} color="error">
              <ShoppingCartIcon />
            </Badge>
          </IconButton>
          <Popover
            open={cartPopoverOpen}
            anchorEl={anchorEl}
            onClose={handleCartPopoverClose}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
          >
            <List>
              {cartItems.map((item) => (
                <ListItem key={item.id}>
                  <ListItemText primary={item.name} secondary={`Quantity: ${item.quantity}`} />
                  <ListItemSecondaryAction>
                    <IconButton edge="end" color="error" onClick={() => deleteCartItem(item.id)}>
                      <DeleteIcon />
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>
              ))}
            </List>
          </Popover>
        </div>
      </Toolbar>
    </AppBar>
  );
}

// Map the cart state from the Redux store to props
const mapStateToProps = (state) => ({
  cartItems: state.cart.cartItems,
});

// Map the removeFromCart action to props
const mapDispatchToProps = (dispatch) => ({
  removeFromCart: (itemId) => dispatch(removeFromCartAction(itemId)),
});

// Connect the component to the Redux store
export default connect(mapStateToProps, mapDispatchToProps)(Header);

