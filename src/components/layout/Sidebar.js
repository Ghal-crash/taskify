import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="w-64 bg-white dark:bg-gray-800 shadow-lg h-screen">
      <div className="p-4">
        <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-6">Menu</h2>
        <nav className="space-y-2">
          <Link 
            to="/" 
            className="flex items-center px-4 py-2 text-gray-700 dark:text-gray-200 
                       hover:bg-blue-100 dark:hover:bg-blue-900 rounded-lg transition-all duration-200"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                    d="M3 12l2-2m0 0l2 2m-2-2v6m6-6l2-2m0 0l2 2m-2-2v6m6-6l2-2m0 0l2 2m-2-2v6" />
            </svg>
            Dashboard
          </Link>
          <Link 
            to="/tasks" 
            className="flex items-center px-4 py-2 text-gray-700 dark:text-gray-200 
                       hover:bg-blue-100 dark:hover:bg-blue-900 rounded-lg transition-all duration-200"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                    d="M3 7h18M3 12h18m-7 5h7" />
            </svg>
            Tasks
          </Link>
          <Link 
            to="/profile" 
            className="flex items-center px-4 py-2 text-gray-700 dark:text-gray-200 
                       hover:bg-blue-100 dark:hover:bg-blue-900 rounded-lg transition-all duration-200"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                    d="M16 11c0 4.418-3.582 8-8 8s-8-3.582-8-8 3.582-8 8-8 8 3.582 8 8z" />
            </svg>
            Profile
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;