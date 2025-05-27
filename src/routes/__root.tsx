import { CssBaseline, ThemeProvider } from '@mui/material';
import { Outlet, createRootRoute } from '@tanstack/react-router';

import { muiTheme } from '@/styles/theme';

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return (
    <ThemeProvider theme={muiTheme}>
      <CssBaseline />
      <Outlet />
    </ThemeProvider>
  );
}
