import React from 'react';
import { useTasks } from '../contexts/TaskContext';

const Dashboard = () => {
  const { tasks } = useTasks();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-blue-200 dark:from-gray-400 dark:to-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Modern Header with Enhanced Styling */}
        <header className="py-8 flex flex-col sm:flex-row justify-between items-center">
          <h1 className="text-3xl font-bold text-gray-800 dark:text-white 
              bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800
              dark:from-blue-400 dark:to-blue-600">
            Dashboard
          </h1>
        </header>

        {/* Responsive Grid Layout */}
        <main className="py-8 space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Enhanced Total Tasks Card */}
            <section className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg 
                hover:shadow-xl transition-all duration-300 p-6">
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-lg">
                  <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" 
                      fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" 
                        strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-gray-800 
                      dark:text-white mb-1">
                    Total Tasks
                  </h2>
                  <p className="text-4xl font-bold text-blue-600 
                      dark:text-blue-400">
                    {tasks.length}
                  </p>
                </div>
              </div>
            </section>
          </div>

          {/* Modernized Tasks List */}
          <section className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-white 
                mb-4 flex items-center">
              <span>Task List</span>
              <span className="ml-2 px-2 py-1 text-sm bg-blue-100 
                  dark:bg-blue-900 text-blue-600 dark:text-blue-400 rounded-full">
                {tasks.length}
              </span>
            </h2>
            
            {tasks.length > 0 ? (
              <ul className="space-y-3">
                {tasks.map((task, index) => (
                  <li
                    key={index}
                    className="flex justify-between items-center p-4 
                        bg-gray-50 dark:bg-gray-700 rounded-lg
                        hover:shadow-md transition-all duration-300
                        transform hover:-translate-y-1"
                  >
                    <div className="flex items-center space-x-3">
                      <div className={`w-2 h-2 rounded-full ${
                        task.status === 'completed' 
                          ? 'bg-green-500' 
                          : 'bg-yellow-500'
                      }`} />
                      <span className="text-gray-700 dark:text-gray-200 
                          font-medium">
                        {task.name}
                      </span>
                    </div>
                    <span className="px-3 py-1 text-sm rounded-full
                        bg-blue-100 dark:bg-blue-900 
                        text-blue-600 dark:text-blue-400">
                      {task.status}
                    </span>
                  </li>
                ))}
              </ul>
            ) : (
              <div className="text-center py-8">
                <svg className="mx-auto h-12 w-12 text-gray-400" 
                    fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" 
                      strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
                <p className="mt-4 text-gray-500 dark:text-gray-400">
                  No tasks available. Enjoy your day!
                </p>
              </div>
            )}
          </section>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
