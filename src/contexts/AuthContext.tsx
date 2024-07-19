import React, { createContext, useContext, useState } from 'react';

type User = {
  username: string;
  role: string;
};

type AuthContextType = {
  authUser: User | null;
  login: (username: string, password: string) => User | null;
  logout: () => void;
  isLoggedIn: boolean; // Add this if you're managing isLoggedIn in your AuthContext
};

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [authUser, setAuthUser] = useState<User | null>(null);

  const login = (username: string, password: string): User | null => {
    let user: User | null = null;
    if (username === 'admin' && password === '1234') {
      user = { username: 'admin', role: 'admin' };
    } else if (username === 'teacher' && password === '1234') {
      user = { username: '佐藤 春', role: 'teacher' };
    } else if (username === 'accounting' && password === '1234') {
      user = { username: 'accounting', role: 'acc' };
    } else {
      throw new Error('Invalid username or password');
    }

    setAuthUser(user);
    return user;
  };

  const logout = () => {
    setAuthUser(null);
  };

  const isLoggedIn = !!authUser; // Example: Check if authUser is truthy

  return (
    <AuthContext.Provider value={{ authUser, login, logout, isLoggedIn }}>
      {children}
    </AuthContext.Provider>
  );
};
