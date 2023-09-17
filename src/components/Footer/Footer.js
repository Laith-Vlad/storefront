import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import GitHubIcon from '@mui/icons-material/GitHub';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { styled } from '@mui/material/styles';

const StyledFooter = styled(AppBar)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.common.white,
  top: 'auto',
  bottom: 0, // Stick to the bottom
}));

const FooterToolbar = styled(Toolbar)({
  display: 'flex',
  justifyContent: 'space-between',
});

const Footer = () => {
  return (
    
    <StyledFooter position="sticky">
      <FooterToolbar>
        <Typography variant="body2" component="div" sx={{ flexGrow: 1 }}>
          &copy; 2023 laith store
        </Typography>
        <IconButton color="inherit" href="https://github.com/laith-Vlad" target="_blank">
          <GitHubIcon />
          GitHub
        </IconButton>
        <IconButton color="inherit">
          <ShoppingCartIcon />
          Cart
        </IconButton>
      </FooterToolbar>
    </StyledFooter>
  );
};

export default Footer;
