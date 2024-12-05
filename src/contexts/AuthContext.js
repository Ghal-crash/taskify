import React, { createContext, useContext, useState, useEffect } from 'react';
import { toast } from 'react-hot-toast';

const AuthContext = createContext(null);

// Simulasi database users
const DEMO_USERS = [
  { 
    id: 1, 
    name: 'Admin',
    email: 'admin@taskify.com',
    password: 'admin',
    role: 'admin'
  },
  { 
    id: 2, 
    name: 'Galih',
    email: 'galih@taskify.com',
    password: 'galih',
    role: 'user'
  },
  { 
    id: 3, 
    name: 'Ilfa',
    email: 'ilfa@taskify.com',
    password: 'ilfa',
    role: 'user'
  },
  {
    id: 4,
    name: 'Ramzi',
    email: 'ramzi@taskify.com',
    password: 'ramzi',
    role: 'user'
  },
  {
    id: 5,
    name: 'Dandy',
    email: 'dandy@taskify.com',
    password: 'dandy',
    role: 'user'
  }
];

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [users, setUsers] = useState(DEMO_USERS);
  const [loading, setLoading] = useState(false);

  // Cek jika ada user yang tersimpan di localStorage
  useEffect(() => {
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  const login = async (email, password) => {
    setLoading(true);
    try {
      // Cari user berdasarkan email
      const foundUser = users.find(u => u.email === email);
      
      if (foundUser && foundUser.password === password) {
        const userInfo = {
          id: foundUser.id,
          name: foundUser.name,
          email: foundUser.email,
          role: foundUser.role
        };
        setUser(userInfo);
        localStorage.setItem('user', JSON.stringify(userInfo));
        toast.success(`Welcome back, ${foundUser.name}!`);
        return true;
      } else {
        throw new Error('Invalid email or password');
      }
    } catch (error) {
      toast.error(error.message);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const register = async (userData) => {
    setLoading(true);
    try {
      // Cek jika email sudah terdaftar
      if (users.some(u => u.email === userData.email)) {
        throw new Error('Email already registered');
      }

      // Buat user baru
      const newUser = {
        id: users.length + 1,
        name: userData.name,
        email: userData.email,
        password: userData.password,
        role: 'user'
      };

      // Update daftar users
      setUsers([...users, newUser]);

      // Login otomatis setelah register
      const userInfo = {
        id: newUser.id,
        name: newUser.name,
        email: newUser.email,
        role: newUser.role
      };
      setUser(userInfo);
      localStorage.setItem('user', JSON.stringify(userInfo));
      
      toast.success('Registration successful!');
      return true;
    } catch (error) {
      toast.error(error.message);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
    toast.success('Logged out successfully');
  };

  const updateUserProfile = async (userId, updateData) => {
    setLoading(true);
    try {
      // Update user dalam daftar
      const updatedUsers = users.map(u => {
        if (u.id === userId) {
          return { ...u, ...updateData };
        }
        return u;
      });
      setUsers(updatedUsers);

      // Update current user jika yang diupdate adalah user yang sedang login
      if (user.id === userId) {
        const updatedUser = { ...user, ...updateData };
        setUser(updatedUser);
        localStorage.setItem('user', JSON.stringify(updatedUser));
      }

      toast.success('Profile updated successfully');
    } catch (error) {
      toast.error('Failed to update profile');
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const getAllUsers = () => {
    // Return semua user tanpa password
    return users.map(({ password, ...user }) => user);
  };

  return (
    <AuthContext.Provider value={{ 
      user,
      users: getAllUsers(),
      loading,
      login,
      register,
      logout,
      updateUserProfile
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};