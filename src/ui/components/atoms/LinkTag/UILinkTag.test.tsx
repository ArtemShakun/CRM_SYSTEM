import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import '@testing-library/jest-dom';

import { UILinkTag } from './UILinkTag';

describe('UILinkTag', () => {
  it('UILinkTag render', () => {
    render(<UILinkTag title="Link" link="/" />);
    const link = screen.getByRole('link');
    expect(link).toHaveTextContent('Link');
    expect(link).toHaveAttribute('href', '/');
  });

  it('renders icon to the left of the text when position is "start"', () => {
    render(<UILinkTag title="Link" link="/" position="start" />);
    const link = screen.getByRole('link');
    const icon = link.querySelector('svg');
    const text = screen.getByText('Link');

    expect(icon).toBeInTheDocument();
    expect(link.firstChild?.nodeName).toBe('svg');
    expect(link.lastChild?.nodeName).not.toBe('svg');
    expect(link).toContainElement(text);
  });

  it('renders icon to the right of the text when position is "end"', () => {
    render(<UILinkTag title="Link" link="/" position="end" />);
    const link = screen.getByRole('link');
    const icon = link.querySelector('svg');
    const text = screen.getByText('Link');

    expect(icon).toBeInTheDocument();
    expect(link.firstChild?.nodeName).not.toBe('svg');
    expect(link.lastChild?.nodeName).toBe('svg');
    expect(link).toContainElement(text);
  });
});
