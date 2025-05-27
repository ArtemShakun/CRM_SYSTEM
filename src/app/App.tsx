import { RouterProvider } from '@tanstack/react-router';
import { Suspense } from 'react';

import { router } from './router/router';

export function App() {
  return (
    <>
      <Suspense fallback="Loading...">
        <RouterProvider router={router} />
      </Suspense>
    </>
  );
}
