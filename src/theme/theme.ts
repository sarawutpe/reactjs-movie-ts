import { createTheme, Theme } from '@mui/material';
import { green, purple } from '@mui/material/colors';

export const theme = createTheme({
  palette: {
    primary: {
      main: 'rgba(3,37,65)',
    },
    secondary: {
      main: green[500],
    },
  },
});
