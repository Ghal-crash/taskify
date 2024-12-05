import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import logoTaskify from '../../assets/taskify.png';

const Navbar = () => {
  const { user, logout } = useAuth();

  return (
    <nav className="bg-white shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
              <img src={logoTaskify} alt='Taskify' className='w-10 h-10 mr-2'/>
                <Link to="/" className="text-xl font-bold text-gray-800">
                   Taskify
                </Link>
          </div>

          <div className="flex items-center">
            {user ? (
              <div className="flex items-center space-x-4">
                <span className="text-gray-700">Halooo, {user.name}</span>
                <button
                  onClick={logout}
                  className="btn-primary bg-red"
                >
                  Logout
                </button>
              </div>
            ) : (
              <Link 
                to="/login"
                className="text-gray-900 hover:text-gray-700"
              >
                Login
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;