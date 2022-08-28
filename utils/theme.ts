import { createTheme } from '@mui/material';
import { SECONDARY_COLOR } from './constants';

export const theme = createTheme({
  palette: {
    secondary: {
      main: SECONDARY_COLOR,
    },
  },
  typography: {
    fontFamily: ['Cerebri-Sans', 'Arial', 'sans-serif'].join(','),
  },
});
