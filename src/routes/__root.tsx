import { CssBaseline } from '@mui/material';
import { Outlet, createRootRoute } from '@tanstack/react-router';
import * as React from 'react';

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Outlet />
    </React.Fragment>
  );
}
