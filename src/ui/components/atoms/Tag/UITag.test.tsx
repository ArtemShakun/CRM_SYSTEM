import { hexToRgb } from '@mui/material';
import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import '@testing-library/jest-dom';

import { muiTheme } from '@/styles/theme';

import { renderWithTheme } from './test-utils';
import { UITag } from './UITag';

describe('UITag render', () => {
  it('render with icon at the start position', () => {
    render(
      <UITag position="start" withIcon>
        Text
      </UITag>,
    );
    const icon = screen.getByTestId('CloseIcon');
    expect(icon).toBeInTheDocument();
    expect(icon.parentElement?.previousSibling).toBe(null);
  });

  it('render with icon at the end position', () => {
    render(
      <UITag position="end" withIcon>
        Text
      </UITag>,
    );
    const icon = screen.getByTestId('CloseIcon');
    expect(icon).toBeInTheDocument();
    expect(icon.parentElement?.nextSibling).toBe(null);
  });

  it('does not render icon when withIcon is false', () => {
    render(<UITag>Tag</UITag>);
    expect(screen.queryByTestId('CloseIcon')).not.toBeInTheDocument();
  });

  it('renders as span element', () => {
    render(<UITag>Tag</UITag>);
    expect(screen.getByText('Tag').tagName.toLowerCase()).toBe('span');
  });
});

describe('UITag styles', () => {
  it('applies correct colors for variant primary', () => {
    renderWithTheme(<UITag variant="primary">Primary</UITag>);
    const tag = screen.getByText('Primary');
    const styles = getComputedStyle(tag);
    expect(styles.backgroundColor).toBe(hexToRgb(muiTheme.palette.primary.main));
    expect(styles.color).toBe('rgb(255, 255, 255)');
  });
  it('applies correct colors for variant secondary', () => {
    renderWithTheme(<UITag variant="secondary">Secondary</UITag>);
    const tag = screen.getByText('Secondary');
    const styles = getComputedStyle(tag);
    expect(styles.backgroundColor).toBe(hexToRgb(muiTheme.palette.background.paper));
    expect(styles.color).toBe(hexToRgb(muiTheme.palette.grey[300]));
  });
  it('applies correct colors for variant Success', () => {
    renderWithTheme(<UITag variant="success">Success</UITag>);
    const tag = screen.getByText('Success');
    const styles = getComputedStyle(tag);
    expect(styles.backgroundColor).toBe(muiTheme.palette.success.light);
    expect(styles.color).toBe(hexToRgb(muiTheme.palette.success.main));
  });
  it('applies correct colors for variant info', () => {
    renderWithTheme(<UITag variant="info">Info</UITag>);
    const tag = screen.getByText('Info');
    const styles = getComputedStyle(tag);
    expect(styles.backgroundColor).toBe(muiTheme.palette.info.light);
    expect(styles.color).toBe(hexToRgb(muiTheme.palette.info.main));
  });
  it('applies correct colors for variant Warning', () => {
    renderWithTheme(<UITag variant="warning">Warning</UITag>);
    const tag = screen.getByText('Warning');
    const styles = getComputedStyle(tag);
    expect(styles.backgroundColor).toBe(muiTheme.palette.warning.light);
    expect(styles.color).toBe(hexToRgb(muiTheme.palette.warning.main));
  });
  it('applies correct colors for variant error', () => {
    renderWithTheme(<UITag variant="error">Error</UITag>);
    const tag = screen.getByText('Error');
    const styles = getComputedStyle(tag);
    expect(styles.backgroundColor).toBe(muiTheme.palette.error.light);
    expect(styles.color).toBe(hexToRgb(muiTheme.palette.error.main));
  });
});
