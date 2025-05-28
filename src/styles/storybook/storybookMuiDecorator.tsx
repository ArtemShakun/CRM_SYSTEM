import { CssBaseline, ThemeProvider } from '@mui/material';

import { muiTheme } from '../theme';

import type { Decorator } from '@storybook/react';

export const withMuiTheme: Decorator = Story => (
  <ThemeProvider theme={muiTheme}>
    <CssBaseline />
    <Story />
  </ThemeProvider>
);
