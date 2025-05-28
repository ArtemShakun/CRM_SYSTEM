import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import '@testing-library/jest-dom';

import { UIButton } from './UIButton';

describe('UIButton', () => {
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
