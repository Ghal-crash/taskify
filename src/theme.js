import { createTheme } from '@material-ui/core/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
      light: '#42a5f5',
      dark: '#1565c0'
    },
    secondary: {
      main: '#dc004e',
      light: '#ff4081',
      dark: '#9a0036'
    }
  },
  typography: {
    fontFamily: [
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif'
    ].join(','),
  },
  overrides: {
    MuiButton: {
      root: {
        textTransform: 'none',
        borderRadius: 8,
      },
    },
    MuiCard: {
      root: {
        borderRadius: 12,
      },
    },
  },
});

export default theme;