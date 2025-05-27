import { TanStackRouterVite } from '@tanstack/router-plugin/vite';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    svgr(),
    tsconfigPaths({
      projects: ['./tsconfig.json'],
    }),
    TanStackRouterVite({
      generatedRouteTree: './src/app/router/routeTree.gen.ts',
    }),
  ],
});
