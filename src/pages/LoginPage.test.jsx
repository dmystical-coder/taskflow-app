import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import LoginPage from './LoginPage';

// --- Test Setup ---
// We wrap our component in BrowserRouter because it contains <Link> components
// which must be rendered inside a router.
const renderComponent = () => {
  render(
    <BrowserRouter>
      <LoginPage />
    </BrowserRouter>
  );
};

// --- Test Suite ---
describe('LoginPage Component', () => {

  // Test 1: Check for basic rendering of form elements
  it('should render the login form elements', () => {
    // 1. Arrange
    renderComponent();

    // 2. Act
    // We "find" elements by their accessible roles or labels.
    const title = screen.getByRole('heading', { name: /login/i });
    const emailInput = screen.getByLabelText(/email/i);
    const passwordInput = screen.getByLabelText(/password/i);
    const loginButton = screen.getByRole('button', { name: /login/i });
    const signupLink = screen.getByRole('link', { name: /sign up/i });

    // 3. Assert
    // We expect all these elements to be in the document.
    expect(title).toBeInTheDocument();
    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(loginButton).toBeInTheDocument();
    expect(signupLink).toBeInTheDocument();
  });

  // Test 2: Check if typing in the inputs updates their value
  it('should allow user to type into email and password fields', async () => {
    // 1. Arrange
    renderComponent();
    
    // Get the input elements
    const emailInput = screen.getByLabelText(/email/i);
    const passwordInput = screen.getByLabelText(/password/i);

    // 2. Act
    // We simulate a user typing into the fields
    await fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    await fireEvent.change(passwordInput, { target: { value: 'password123' } });

    // 3. Assert
    // We check that the 'value' property of the inputs has changed
    expect(emailInput.value).toBe('test@example.com');
    expect(passwordInput.value).toBe('password123');
  });

  // Test 3: (Optional but good) Check if the link points to the correct page
  it('should have a signup link pointing to /signup', () => {
    // 1. Arrange
    renderComponent();
    
    // 2. Act
    const signupLink = screen.getByRole('link', { name: /sign up/i });

    // 3. Assert
    // We check the 'href' attribute (or 'pathname' for links)
    expect(signupLink).toHaveAttribute('href', '/signup');
  });
});