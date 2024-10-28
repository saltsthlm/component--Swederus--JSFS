import React from "react";
import Button from "./components/button/button";
import { render, screen } from '@testing-library/react';


describe('Button Component', () => {
  test('renders button with children', () => {
    render(<Button>Click Me</Button>);
    const buttonElement = screen.getByRole('button', { name: /click me/i });
    expect(buttonElement).toBeInTheDocument();
  });

  test('renders disabled button', () => {
    render(<Button disabled>Click Me</Button>);
    const buttonElement = screen.getByRole('button', { name: /click me/i });
    expect(buttonElement).toBeDisabled();
  });
});
