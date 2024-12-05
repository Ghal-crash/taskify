import React, { createContext, useContext, useState, useEffect } from 'react';
import { useAuth } from './AuthContext';

const TaskContext = createContext(null);

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  const [users, setUsers] = useState([]);
  const { user } = useAuth();

  // Simulasi data users
  useEffect(() => {
    setUsers([
      { id: 1, name: 'Galih', email: 'galih@taskify.com' },
      { id: 2, name: 'Ilfa', email: 'ilfa@taskify.com' },
      { id: 3, name: 'Ramzi', email: 'ramzi@taskify.com' },
      { id: 4, name: 'Dandy', email: 'dandy@taskify.com' }
    ]);
  }, []);

  const addTask = (taskData) => {
    const newTask = {
      id: Date.now(),
      ...taskData,
      createdBy: user.email,
      createdAt: new Date().toISOString(),
      assignedUsers: taskData.assignedUsers || [],
      status: 'pending'
    };
    setTasks([...tasks, newTask]);
  };

  const updateTask = (id, updatedTask) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, ...updatedTask } : task
    ));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <TaskContext.Provider value={{ 
      tasks, 
      users,
      addTask, 
      updateTask, 
      deleteTask 
    }}>
      {children}
    </TaskContext.Provider>
  );
};

export const useTasks = () => useContext(TaskContext);