import React, { createContext, useState, useContext, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Check if user is stored in localStorage on initial load
  useEffect(() => {
    const storedUser = localStorage.getItem('medicalAppUser');
    if (storedUser) {
      setCurrentUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  // Mock login function
  const login = (userType, userData) => {
    const user = {
      ...userData,
      userType
    };
    setCurrentUser(user);
    localStorage.setItem('medicalAppUser', JSON.stringify(user));
    return user;
  };

  // Logout function
  const logout = () => {
    setCurrentUser(null);
    localStorage.removeItem('medicalAppUser');
  };

  const value = {
    currentUser,
    login,
    logout,
    isAuthenticated: !!currentUser
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};