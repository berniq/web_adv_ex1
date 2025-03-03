import React from "react";
import { render, screen, } from "@testing-library/react";
import CreateUser from '../src/components/CreateUser';
import { vi, it, expect } from 'vitest';

// Mock axios to prevent actual HTTP requests during tests
vi.mock('axios');

it('renders Create user → text', () => {
    render(<CreateUser />);
    const element = screen.getByText(/Create User/i);
    expect(element).toBeInTheDocument();
});

it('renders Create user → h2 element', () => {
    render(<CreateUser />);
    const element = screen.getByRole('heading', { level: 2, name: /Create User/i });
    expect(element).toBeInTheDocument();
});

it('renders Create button', () => {
    render(<CreateUser />);
    const button = screen.getByRole('button', { name: /Create/i });
    expect(button).toBeInTheDocument();
    expect(button).toHaveAttribute('type', 'submit');
});
