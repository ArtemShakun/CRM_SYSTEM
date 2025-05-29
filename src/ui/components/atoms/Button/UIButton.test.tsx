import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { hexToRgb, ThemeProvider } from '@mui/material';
import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import '@testing-library/jest-dom';

import { muiTheme } from '@/styles/theme';

import { UIButton } from './UIButton';

describe('UIButton render', () => {
  it('renders children correctly', () => {
    render(<UIButton>Text</UIButton>);
    expect(screen.getByText('Text')).toBeInTheDocument();
  });
  it('render with icon at the start', () => {
    render(
      <UIButton iconPosition="start" icon={<MoreHorizIcon data-testid="icon" />}>
        Text
      </UIButton>,
    );
    const icon = screen.getByTestId('icon');
    expect(icon).toBeInTheDocument();
    expect(icon.parentElement?.previousSibling).toBe(null);
  });

  it('renders with icon at the end', () => {
    render(
      <UIButton icon={<MoreHorizIcon data-testid="icon" />} iconPosition="end">
        Text
      </UIButton>,
    );
    const icon = screen.getByTestId('icon');
    expect(icon).toBeInTheDocument();
    expect(icon.parentElement?.nextSibling).toBe(null);
  });

  it('renders icon-only button correctly without text', () => {
    render(<UIButton icon={<MoreHorizIcon data-testid="icon" />} aria-label="more" />);
    expect(screen.getByRole('button')).toBeInTheDocument();
    expect(screen.getByTestId('icon')).toBeInTheDocument();
  });

  it('renders as disabled when disabled prop is set', () => {
    render(<UIButton disabled>Disabled</UIButton>);
    expect(screen.getByRole('button')).toBeDisabled();
  });
});

describe('UIButton styles', () => {
  it('applies correct colors for variant primary', () => {
    render(
      <ThemeProvider theme={muiTheme}>
        <UIButton variant="primary">Primary</UIButton>
      </ThemeProvider>,
    );
    const tag = screen.getByRole('button', { name: 'Primary' });
    const styles = getComputedStyle(tag);
    expect(styles.backgroundColor).toBe(hexToRgb(muiTheme.palette.primary.main));
    expect(styles.color).toBe('rgb(255, 255, 255)');
    expect(styles.border).toBe('');
  });

  it('applies correct colors for variant primary disabled', () => {
    render(
      <ThemeProvider theme={muiTheme}>
        <UIButton variant="primary" disabled>
          Primary
        </UIButton>
      </ThemeProvider>,
    );
    const tag = screen.getByRole('button', { name: 'Primary' });
    const styles = getComputedStyle(tag);
    expect(styles.backgroundColor).toBe(hexToRgb(muiTheme.palette.background.paper));
    expect(styles.color).toBe(hexToRgb(muiTheme.palette.grey[300]));
  });

  it('applies correct colors for variant outline', () => {
    render(
      <ThemeProvider theme={muiTheme}>
        <UIButton variant="outline">Outline</UIButton>
      </ThemeProvider>,
    );
    const tag = screen.getByRole('button', { name: 'Outline' });
    const styles = getComputedStyle(tag);
    expect(styles.backgroundColor).toBe('rgba(0, 0, 0, 0)');
    expect(styles.color).toBe(hexToRgb(muiTheme.palette.primary.main));
    expect(styles.border).toBe(`1px solid ${hexToRgb(muiTheme.palette.grey[100])}`);
  });

  it('applies correct colors for variant outline disabled', () => {
    render(
      <ThemeProvider theme={muiTheme}>
        <UIButton variant="outline" disabled>
          Outline
        </UIButton>
      </ThemeProvider>,
    );
    const tag = screen.getByRole('button', { name: 'Outline' });
    const styles = getComputedStyle(tag);
    expect(styles.backgroundColor).toBe('rgba(0, 0, 0, 0)');
    expect(styles.color).toBe(hexToRgb(muiTheme.palette.grey[300]));
    expect(styles.border).toBe(`1px solid ${hexToRgb(muiTheme.palette.grey[100])}`);
  });
});
