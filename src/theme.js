import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: { main: '#28C3BC', contrastText: '#ffffff' }, // teal
    secondary: { main: '#8B3FFF', contrastText: '#ffffff' }, // purple
    background: { default: '#4B7CFF', paper: '#C9BFF8' },
  },
  typography: {
    fontFamily: "'Montserrat', sans-serif",
    h3: { fontFamily: "'Pacifico', cursive" },
    h4: { fontFamily: "'Pacifico', cursive" },
  },
  gradients: {
    login: 'linear-gradient(90deg,#33E1A2 0%,#28C3BC 100%)',
    bg: 'linear-gradient(135deg,#4B7CFF 0%,#8B3FFF 100%)',
    admin: 'linear-gradient(135deg,#6B8DFF 0%,#9D7BFF 100%)',
  },
  components: {
    MuiButton: {
      styleOverrides: {
        containedPrimary: {
          backgroundImage: 'linear-gradient(90deg,#33E1A2 0%,#28C3BC 100%)',
          color: '#fff',
          borderRadius: 28,
          padding: '10px 24px',
          boxShadow: '0 10px 30px rgba(40,195,188,0.16)'
        }
      }
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 20
        }
      }
    }
  }
});

export default theme;
