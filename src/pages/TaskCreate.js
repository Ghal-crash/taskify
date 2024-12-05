// src/pages/TaskCreate.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTasks } from '../contexts/TaskContext';
import { useAuth } from '../contexts/AuthContext';
import { toast } from 'react-hot-toast';

const TaskCreate = () => {
  const navigate = useNavigate();
  const { addTask, users } = useTasks();
  const { user } = useAuth();
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    deadline: '',
    assignedUsers: []
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = {
      ...formData,
      createdBy: user.email, // Menggunakan user.email
      createdAt: new Date().toISOString(),
    };
    addTask(newTask);
    toast.success('Task created successfully');
    navigate('/tasks');
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Create New Task</h1>
      <div className="bg-white rounded-lg shadow p-6">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Title</label>
            <input
              type="text"
              className="mt-1 block w-full rounded-md border border-gray-300 p-2"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Description</label>
            <textarea
              className="mt-1 block w-full rounded-md border border-gray-300 p-2"
              rows="4"
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Deadline</label>
            <input
              type="date"
              className="mt-1 block w-full rounded-md border border-gray-300 p-2"
              value={formData.deadline}
              onChange={(e) => setFormData({ ...formData, deadline: e.target.value })}
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Assign Users</label>
            <select
              multiple
              className="mt-1 block w-full rounded-md border border-gray-300 p-2"
              value={formData.assignedUsers}
              onChange={(e) => setFormData({
                ...formData,
                assignedUsers: Array.from(e.target.selectedOptions, option => option.value)
              })}
            >
              {users?.map(user => (
                <option key={user.id} value={user.email}>
                  {user.name} ({user.email})
                </option>
              ))}
            </select>
            <p className="mt-1 text-sm text-gray-500">Hold Ctrl/Cmd to select multiple users</p>
          </div>

          <div className="flex justify-end space-x-4">
            <button
              type="button"
              onClick={() => navigate('/tasks')}
              className="px-4 py-2 text-gray-700 hover:text-gray-900"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
            >
              Create Task
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TaskCreate; // Tambahkan export default di sini