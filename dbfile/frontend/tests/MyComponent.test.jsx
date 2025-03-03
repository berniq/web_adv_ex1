import React from "react";
import { render, screen } from '@testing-library/react';
import MyComponent from '../src/components/MyComponent';
import { test } from 'vitest';

test('renders Hello, World!', () => {
  render(<MyComponent />);
  const element = screen.getByText(/Hello, World!/i);
  expect(element).toBeInTheDocument();
});
