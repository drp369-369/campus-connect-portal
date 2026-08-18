import React from 'react';
import { Link } from 'react-router-dom';

export default function Navb() {
  return (
    <header className="sticky top-0 z-40 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-md bg-rvgreen flex items-center justify-center text-white font-semibold">RV</div>
            <div>
              <Link to="/" className="text-gray-800 hover:text-rvgreen-dark font-semibold">
                <div className="text-sm">RV UNIVERSITY<span className="align-super text-xs">®</span></div>
                <div className="text-xs text-gray-500">School of Computer Science &amp; Engineering</div>
              </Link>
            </div>
          </div>

          <nav className="flex items-center space-x-3">
            <Link to="/login" className="px-4 py-2 rounded-md text-sm font-medium text-rvgreen hover:bg-gray-50">Login</Link>
            <Link to="/register" className="px-4 py-2 rounded-full text-sm font-semibold text-white bg-rvgreen">Register</Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
