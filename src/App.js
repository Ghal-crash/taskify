import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { TaskProvider } from './contexts/TaskContext';
import { Toaster } from 'react-hot-toast';

import Layout from './components/layout/layout';
import PrivateRoute from './components/auth/PrivateRoute';

import Dashboard from './pages/Dashboard';
import TaskList from './pages/TaskList';
import TaskCreate from './pages/TaskCreate';
import TaskDetail from './pages/TaskDetail';
import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile';

const App = () => {
  return (
    <AuthProvider>
      <TaskProvider>
        <Router>
          <Toaster position="top-right" />
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            
            <Route path="/" element={<PrivateRoute><Layout /></PrivateRoute>}>
              <Route index element={<Dashboard />} />
              <Route path="tasks" element={<TaskList />} />
              <Route path="tasks/create" element={<TaskCreate />} />
              <Route path="tasks/:id" element={<TaskDetail />} />
              <Route path="profile" element={<Profile />} />
            </Route>
          </Routes>
        </Router>
      </TaskProvider>
    </AuthProvider>
  );
};

export default App;