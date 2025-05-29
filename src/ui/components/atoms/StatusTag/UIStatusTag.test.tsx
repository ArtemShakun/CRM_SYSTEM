import { hexToRgb, ThemeProvider } from '@mui/material';
import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import '@testing-library/jest-dom';
import { muiTheme } from '@/styles/theme';

import { UIStatusTag } from './UIStatusTag';

describe('UIStatusTag', () => {
  it('Render UIStatusTag', () => {
    render(
      <ThemeProvider theme={muiTheme}>
        <UIStatusTag online={true} />
      </ThemeProvider>,
    );
    const tag = screen.getByText('Online');
    const styles = getComputedStyle(tag);
    expect(tag).toBeInTheDocument();
    expect(styles.backgroundColor).toBe(hexToRgb(muiTheme.palette.background.default));
    expect(styles.color).toBe(hexToRgb(muiTheme.palette.text.primary));
  });

  it('renders UIStatusTag when online is true', () => {
    render(
      <ThemeProvider theme={muiTheme}>
        <UIStatusTag online={true} />
      </ThemeProvider>,
    );

    const tag = screen.getByText('Online');
    const dot = tag.querySelector('span');
    expect(dot).toBeInTheDocument();

    const styles = getComputedStyle(dot!);
    expect(styles.backgroundColor).toBe(hexToRgb(muiTheme.palette.success.main));
  });

  it('renders UIStatusTag when offline is true', () => {
    render(
      <ThemeProvider theme={muiTheme}>
        <UIStatusTag online={false} />
      </ThemeProvider>,
    );

    const tag = screen.getByText('Online');
    const dot = tag.querySelector('span');
    expect(dot).toBeInTheDocument();

    const styles = getComputedStyle(dot!);
    expect(styles.backgroundColor).toBe(hexToRgb(muiTheme.palette.grey[200]));
  });
});
