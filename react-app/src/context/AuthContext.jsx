import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // On mount, check if there's a saved session
    const storedUser = localStorage.getItem('emy_user_session');
    if (storedUser) {
      try {
        setCurrentUser(JSON.parse(storedUser));
      } catch (err) {
        console.error("Failed to parse user session", err);
      }
    }
    setLoading(false);
  }, []);

  const login = async (email, password, role) => {
    // In a real app, you would call firebase.auth().signInWithEmailAndPassword
    // For now, we simulate a successful login
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (!email || !password) {
          reject(new Error("Email and password are required."));
          return;
        }
        
        // Mocking user profile data
        const mockUser = {
          email,
          firstName: "Demo",
          lastName: "User",
          role: role || "customer",
          // Demo avatar fallback
          avatarUrl: null
        };
        
        setCurrentUser(mockUser);
        localStorage.setItem('emy_user_session', JSON.stringify(mockUser));
        resolve(mockUser);
      }, 800);
    });
  };

  const register = async (userData) => {
    // Simulate registration
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (!userData.email || !userData.password) {
          reject(new Error("Missing required fields."));
          return;
        }

        const newUser = {
          email: userData.email,
          firstName: userData.firstName,
          lastName: userData.lastName,
          role: userData.role || "customer",
          avatarUrl: userData.avatarUrl || null,
        };

        setCurrentUser(newUser);
        localStorage.setItem('emy_user_session', JSON.stringify(newUser));
        resolve(newUser);
      }, 1000);
    });
  };

  const logout = async () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        setCurrentUser(null);
        localStorage.removeItem('emy_user_session');
        resolve();
      }, 500);
    });
  };

  const value = {
    currentUser,
    login,
    register,
    logout
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
