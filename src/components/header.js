import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Slide,
  useScrollTrigger
} from '@mui/material';
import { Brightness4, Brightness7 } from '@mui/icons-material';

// Hide app bar on scroll
function HideOnScroll({ children }) {
  const trigger = useScrollTrigger();
  
  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

const Header = ({ darkMode, setDarkMode }) => {
  return (
    <HideOnScroll>
      <AppBar position="sticky" color="primary" elevation={2}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Todo List
          </Typography>
          <IconButton
            color="inherit"
            onClick={() => setDarkMode(!darkMode)}
            aria-label="toggle dark mode"
          >
            {darkMode ? <Brightness7 /> : <Brightness4 />}
          </IconButton>
        </Toolbar>
      </AppBar>
    </HideOnScroll>
  );
};

export default Header;