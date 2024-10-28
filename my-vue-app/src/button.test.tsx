import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Button from './components/button/button';

describe('Button Component', () => {
  test('renders button with children', () => {
    render(<Button>Click Me</Button>);
    const buttonElement = screen.getByRole('button', { name: /click me/i });
    expect(buttonElement).toBeInTheDocument();
  });

  test('renders disabled button', () => {
    render(<Button disabled>Disabled</Button>);
    const buttonElement = screen.getByRole('button', { name: /disabled/i });
    expect(buttonElement).toBeDisabled();
  });

  test('displays correct button text based on props', () => {
    const { rerender } = render(<Button>Initial</Button>);
    const buttonElement = screen.getByRole('button', { name: /initial/i });
    expect(buttonElement).toBeInTheDocument();

    rerender(<Button>Updated</Button>);
    expect(screen.getByRole('button', { name: /updated/i })).toBeInTheDocument();
  });
});