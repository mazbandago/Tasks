import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-indigo-700 shadow-md p-4 rounded-t-2xl">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-lg font-bold">mazBANDAGO</Link>

        {/* Hamburger Icon */}
        <button
          className="text-white md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
            />
          </svg>
        </button>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-4">
          <NavLinks />
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden mt-2 space-y-2">
          <NavLinks />
        </div>
      )}
    </nav>
  );
}

function NavLinks() {
  return (
    <>
      <Link to="/" className="block text-white text-sm font-bold border px-2 py-1 bg-black rounded hover:bg-blue-600 shadow-xl transition duration-150">Home</Link>
      <Link to="/generalnews" className="block text-white text-sm font-bold border px-2 py-1 bg-black rounded hover:bg-blue-600 shadow-xl transition duration-150">General News</Link>
      <Link to="/signinform" className="block text-white text-sm font-bold border px-2 py-1 bg-black rounded hover:bg-blue-600 shadow-xl transition duration-150">Login</Link>
      <Link to="/dashboard" className="block text-white text-sm font-bold border px-2 py-1 bg-black rounded hover:bg-blue-600 shadow-xl transition duration-150">Dashboard</Link>
    </>
  );
}

export default Navbar;
