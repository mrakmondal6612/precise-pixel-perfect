
import React, { useEffect } from 'react';
import { Navigate } from 'react-router-dom';

const Logout = () => {
  useEffect(() => {
    // Implement actual logout logic here
    console.log('User logged out');
    // Clear auth tokens, user data, etc.
  }, []);

  // Redirect to home page after logout
  return <Navigate to="/" replace />;
};

export default Logout;
