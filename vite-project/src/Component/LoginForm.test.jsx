//import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import LoginForm from './LoginForm';

describe('LoginForm', () => {
  test('renders login form correctly', () => {
    render(<LoginForm />);

    // Assert that the login form is rendered
    expect(screen.getByLabelText('Username')).toBeInTheDocument();
    expect(screen.getByLabelText('Password')).toBeInTheDocument();
    expect(screen.getByText('Login')).toBeInTheDocument();
    expect(screen.getByText('Forgot Password?')).toBeInTheDocument();
    expect(screen.getByText('Signup')).toBeInTheDocument();
  });

  test('switches between login and signup', () => {
    render(<LoginForm />);

    // Initially, the form should be in login mode
    expect(screen.getByText('Login')).toBeInTheDocument();
    expect(screen.getByText('Signup')).toBeInTheDocument();

    // Click on the 'Signup' button to switch to signup mode
    fireEvent.click(screen.getByText('Signup'));

    // Assert that the form is now in signup mode
    expect(screen.getByText('Create Account')).toBeInTheDocument();
    expect(screen.getByText('Signin')).toBeInTheDocument();

    // Click on the 'Signin' button to switch back to login mode
    fireEvent.click(screen.getByText('Signin'));

    // Assert that the form is back in login mode
    expect(screen.getByText('Login')).toBeInTheDocument();
    expect(screen.getByText('Signup')).toBeInTheDocument();
  });

  // You can write more test cases to cover other functionality of the LoginForm component
});



