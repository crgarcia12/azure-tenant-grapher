import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#DC143C',
      light: '#FF6B6B',
      dark: '#B22222',
    },
    secondary: {
      main: '#8B0000',
      light: '#FF4444',
      dark: '#5C0000',
    },
    background: {
      default: '#ffffff',
      paper: '#f8f8f8',
    },
    text: {
      primary: '#333333',
      secondary: '#666666',
    },
    error: {
      main: '#DC143C',
    },
    warning: {
      main: '#ff9800',
    },
    info: {
      main: '#DC143C',
    },
    success: {
      main: '#4caf50',
    },
  },
  typography: {
    fontFamily: '"Segoe UI", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: '2.5rem',
      fontWeight: 600,
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 600,
    },
    h3: {
      fontSize: '1.75rem',
      fontWeight: 600,
    },
    h4: {
      fontSize: '1.5rem',
      fontWeight: 600,
    },
    h5: {
      fontSize: '1.25rem',
      fontWeight: 600,
    },
    h6: {
      fontSize: '1rem',
      fontWeight: 600,
    },
  },
  shape: {
    borderRadius: 4,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontWeight: 500,
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          minHeight: 48,
        },
      },
    },
    MuiTextField: {
      defaultProps: {
        variant: 'outlined',
        size: 'small',
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
        },
      },
    },
    MuiAppBar: {
      defaultProps: {
        color: 'default',
      },
      styleOverrides: {
        root: {
          backgroundColor: '#DC143C !important',
          backgroundImage: 'none !important',
          color: '#ffffff !important',
        },
        colorDefault: {
          backgroundColor: '#DC143C !important',
          backgroundImage: 'none !important',
          color: '#ffffff !important',
        },
        colorPrimary: {
          backgroundColor: '#DC143C !important',
          backgroundImage: 'none !important',
        },
      },
    },
    MuiToolbar: {
      styleOverrides: {
        root: {
          backgroundColor: 'transparent !important',
        },
      },
    },
  },
});