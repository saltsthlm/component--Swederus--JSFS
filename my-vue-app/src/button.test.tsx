import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
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

  test('triggers onClick function when clicked', () => {
    const handleClick = jest.fn(); // Mock function
    render(<Button onClick={handleClick}>Click Me</Button>);

    const buttonElement = screen.getByRole('button', { name: /click me/i });
    fireEvent.click(buttonElement);
    
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test('displays correct button text based on props', () => {
    const { rerender } = render(<Button>Initial</Button>);
    const buttonElement = screen.getByRole('button', { name: /initial/i });
    expect(buttonElement).toBeInTheDocument();

    // Rerender with different text
    rerender(<Button>Updated</Button>);
    expect(screen.getByRole('button', { name: /updated/i })).toBeInTheDocument();
  });
});