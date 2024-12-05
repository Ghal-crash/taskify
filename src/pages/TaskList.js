import React from 'react';
import { Link } from 'react-router-dom';
import { useTasks } from '../contexts/TaskContext';
import { useAuth } from '../contexts/AuthContext';

const TaskList = () => {
  const { tasks } = useTasks();
  const { user } = useAuth();

  // Filter tasks: show tasks created by user or assigned to user
  const relevantTasks = tasks.filter(task => 
    task.createdBy === user.email || task.assignedUsers.includes(user.email)
  );

  return (
    <div className="p-6 bg-gray-50 dark:bg-gray-900 min-h-screen">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800 dark:text-white">Tasks</h1>
        <Link
          to="/tasks/create"
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-200"
        >
          Create Task
        </Link>
      </div>

      <div className="grid gap-4">
        {relevantTasks.map((task) => (
          <div key={task.id} className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg transition-transform transform hover:scale-105">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">{task.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mt-1">{task.description}</p>
              </div>
              <span className={`px-2 py-1 rounded-full text-sm ${
                task.status === 'completed' ? 'bg-green-100 text-green-800' :
                task.status === 'in-progress' ? 'bg-yellow-100 text-yellow-800' :
                'bg-gray-100 text-gray-800'
              }`}>
                {task.status}
              </span>
            </div>
            
            <div className="mt-4">
              <h4 className="text-sm font-medium text-gray-500 dark:text-gray-300">Assigned to:</h4>
              <div className="mt-1 flex flex-wrap gap-2">
                {task.assignedUsers.map((userEmail) => (
                  <span 
                    key={userEmail}
                    className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                  >
                    {userEmail}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-4 flex justify-between items-center text-sm text-gray-500 dark:text-gray-400">
              <span>Created by: {task.createdBy}</span>
              <span>Due: {new Date(task.deadline).toLocaleDateString()}</span>
            </div>
          </div>
        ))}

        {relevantTasks.length === 0 && (
          <div className="text-center py-10 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
            <p className="text-gray-500 dark:text-gray-400">No tasks found.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default TaskList;