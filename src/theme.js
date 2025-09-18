import { createTheme } from '@mui/material/styles';

export const getDesignTokens = (mode) => ({
  palette: {
    mode,
    ...(mode === 'light'
      ? {
          // Light mode palette
          primary: {
            main: '#78909c',
          },
          background: {
            default: '#f5f5f5',
            paper: '#ffffff',
          },
        }
      : {
          // Dark mode palette
          primary: {
            main: '#90a4ae',
          },
          background: {
            default: '#303030',
            paper: '#424242',
          },
        }),
  },
  typography: {
    h4: {
      fontWeight: 600,
    },
  },
});

export const createAppTheme = (mode) => createTheme(getDesignTokens(mode));