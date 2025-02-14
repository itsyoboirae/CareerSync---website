import React from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';

function Layout() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Navigation */}
      <nav className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center">
              <Link to="/" className="flex items-center">
                <svg
                  viewBox="0 0 32 32"
                  className="h-8 w-8 text-indigo-600"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16 4C12.1339 4 9 7.13401 9 11C9 13.3037 10.0834 15.3474 11.7803 16.6253C7.19293 18.338 4 22.7276 4 28M16 4C19.8661 4 23 7.13401 23 11C23 13.3037 21.9166 15.3474 20.2197 16.6253C24.8071 18.338 28 22.7276 28 28M16 4V28"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span className="ml-2 text-xl font-bold text-gray-900">CareerSync.ai</span>
              </Link>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/features" className="text-gray-600 hover:text-gray-900">Features</Link>
              <Link to="/pricing" className="text-gray-600 hover:text-gray-900">Pricing</Link>
              <button 
                onClick={() => navigate('/signup')}
                className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition"
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <Outlet />

      {/* Footer */}
      <footer className="bg-gray-50">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <svg
                viewBox="0 0 32 32"
                className="h-8 w-8 text-indigo-600"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16 4C12.1339 4 9 7.13401 9 11C9 13.3037 10.0834 15.3474 11.7803 16.6253C7.19293 18.338 4 22.7276 4 28M16 4C19.8661 4 23 7.13401 23 11C23 13.3037 21.9166 15.3474 20.2197 16.6253C24.8071 18.338 28 22.7276 28 28M16 4V28"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="ml-2 text-xl font-bold text-gray-900">CareerSync.ai</span>
            </div>
            <p className="text-gray-500 text-sm">© 2024 CareerSync.ai. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Layout;