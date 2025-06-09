// import { createContext, useContext, useState, ReactNode } from 'react';

// interface AuthContextType {
//   token: string | null;
//   login: (token: string) => void;
//   logout: () => void;
// }

// const AuthContext = createContext<AuthContextType | undefined>(undefined);

// export const AuthProvider = ({ children }: { children: ReactNode }) => {
//   const [token, setToken] = useState<string | null>(localStorage.getItem('token'));

//   const login = (token: string) => {
//     localStorage.setItem('token', token);
//     setToken(token);
//   };

//   const logout = () => {
//     localStorage.removeItem('token');
//     setToken(null);
//   };

//   return (
//     <AuthContext.Provider value={{ token, login, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export const useAuth = () => {
//   const context = useContext(AuthContext);
//   if (!context) throw new Error('useAuth must be used within AuthProvider');
//   return context;
// };

import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from 'react';
import { jwtDecode } from 'jwt-decode';


interface AuthContextType {
  token: string | null;
  login: (token: string) => void;
  logout: () => void;
}

interface JwtPayload {
  exp: number; // expiry in seconds since epoch
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [token, setToken] = useState<string | null>(() => {
    const savedToken = localStorage.getItem('token');
    if (!savedToken) return null;

    try {
      const { exp } = jwtDecode<JwtPayload>(savedToken);
      if (Date.now() >= exp * 1000) {
        localStorage.removeItem('token');
        return null;
      }
      return savedToken;
    } catch {
      localStorage.removeItem('token');
      return null;
    }
  });

  const login = (newToken: string) => {
    localStorage.setItem('token', newToken);
    setToken(newToken);
  };

  const logout = () => {
    localStorage.removeItem('token');
    setToken(null);
  };

  //  Sync token across browser tabs
  useEffect(() => {
    const syncToken = (e: StorageEvent) => {
      if (e.key === 'token') {
        setToken(e.newValue);
      }
    };
    window.addEventListener('storage', syncToken);
    return () => window.removeEventListener('storage', syncToken);
  }, []);

  return (
    <AuthContext.Provider value={{ token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context)
    throw new Error('useAuth must be used within an AuthProvider');
  return context;
};
