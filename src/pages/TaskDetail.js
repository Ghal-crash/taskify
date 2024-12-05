import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useTasks } from '../contexts/TaskContext';
import { toast } from 'react-hot-toast';

const TaskDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { tasks, updateTask } = useTasks();
  
  const task = tasks.find(t => t.id === parseInt(id));

  if (!task) {
    return (
      <div className="p-6 text-center">
        <h1 className="text-2xl font-bold mb-4">Task Not Found</h1>
        <button
          onClick={() => navigate('/tasks')}
          className="text-blue-500 hover:text-blue-600"
        >
          Back to Tasks
        </button>
      </div>
    );
  }

  const handleStatusChange = (newStatus) => {
    updateTask(task.id, { ...task, status: newStatus });
    toast.success('Task status updated');
  };

  return (
    <div className="p-6">
      <div className="bg-white rounded-lg shadow p-6">
        <h1 className="text-2xl font-bold mb-4">{task.title}</h1>
        
        <div className="space-y-4">
          <div>
            <h3 className="text-sm font-medium text-gray-500">Description</h3>
            <p className="mt-1">{task.description}</p>
          </div>

          <div>
            <h3 className="text-sm font-medium text-gray-500">Status</h3>
            <div className="mt-2 flex space-x-2">
              {['pending', 'in-progress', 'completed'].map((status) => (
                <button
                  key={status}
                  onClick={() => handleStatusChange(status)}
                  className={`px-3 py-1 rounded-full text-sm ${
                    task.status === status
                      ? 'bg-blue-500 text-white'
                      : 'bg-gray-100 text-gray-800'
                  }`}
                >
                  {status.charAt(0).toUpperCase() + status.slice(1)}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-medium text-gray-500">Deadline</h3>
            <p className="mt-1">
              {new Date(task.deadline).toLocaleDateString()}
            </p>
          </div>
        </div>

        <div className="mt-6 flex justify-end space-x-4">
          <button
            onClick={() => navigate('/tasks')}
            className="px-4 py-2 text-gray-600 hover:text-gray-800"
          >
            Back to Tasks
          </button>
          <button
            onClick={() => {
              // Add edit functionality here
              toast.success('Edit functionality coming soon');
            }}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
          >
            Edit Task
          </button>
        </div>
      </div>
    </div>
  );
};

export default TaskDetail;