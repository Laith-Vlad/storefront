import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

function Header() {
  const titleStyle = {
    fontSize: '2rem', // Adjust the font size as needed
    color: 'white',   // Change the text color
    fontFamily: 'cursive', // Change the font family
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
          <ShoppingCartIcon />
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default Header;

