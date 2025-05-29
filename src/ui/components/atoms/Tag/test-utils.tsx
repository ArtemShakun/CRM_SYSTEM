import { ThemeProvider } from '@mui/material/styles';
import { render, type RenderOptions } from '@testing-library/react';

import { muiTheme } from '@/styles/theme';

import type { ReactNode } from 'react';

export function renderWithTheme(ui: ReactNode, options?: RenderOptions) {
  return render(<ThemeProvider theme={muiTheme}>{ui}</ThemeProvider>, options);
}
