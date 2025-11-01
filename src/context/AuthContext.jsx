import React, { createContext, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

// 1. Create the Context
const AuthContext = createContext(null);

/**
 * 2. Create the AuthProvider Component
 * This component will wrap our app and provide the auth state and functions.
 */
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // 'user' is null when logged out
  const navigate = useNavigate();

  // --- MOCK AUTH FUNCTIONS ---
  // We simulate API calls and authentication logic here.

  /**
   * Simulates a login API call.
   * In a real app, this would be an async fetch request.
   */
  const login = async (email, password) => {
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 500));

    // Mock validation
    if (email === 'test@example.com' && password === 'password123') {
      const mockUser = { id: 1, email, name: 'Test User' };
      setUser(mockUser);
      navigate('/'); // Redirect to the main task board
      return;
    }
    
    // Throw an error for a failed login
    throw new Error('Invalid email or password');
  };

  /**
   * Simulates a signup API call.
   */
  const signup = async (fullName, email, password) => {
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 500));

    // Mock successful signup (and auto-login)
    const mockUser = { id: 2, email, name: fullName };
    setUser(mockUser);
    navigate('/'); // Redirect to the main task board
  };


  /**
   * Logs the user out.
   */
  const logout = () => {
    setUser(null); // Clear the user state
    navigate('/login'); // Redirect to the login page
  };

  // The 'value' object is what we pass down to all consumers
  const value = {
    user,
    isAuthenticated: !!user, // Handy boolean for checking auth
    login,
    logout,
    signup,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

/**
 * 3. Create the useAuth Custom Hook
 * This is a helper hook that makes it easy to access the auth
 * context from any component.
 */
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};