import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function DashboardNav() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    navigate("/signinform");
  };

  return (
    <nav className="bg-indigo-700 shadow-md p-4 rounded-t-2xl">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-lg font-bold">mazBANDAGO</Link>

        {/* Hamburger Toggle Button */}
        <button
          className="md:hidden text-white"
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
        <div className="hidden md:flex space-x-2">
          <NavLinks handleLogout={handleLogout} />
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden mt-2 space-y-2">
          <NavLinks handleLogout={handleLogout} />
        </div>
      )}
    </nav>
  );
}

function NavLinks({ handleLogout }) {
  return (
    <>
      <Link to="/" className="block text-white text-sm font-bold border px-2 py-1 bg-black rounded hover:bg-blue-600 shadow-xl transition duration-150">Home</Link>
      <Link to="/dashboard" className="block text-white text-sm font-bold border px-2 py-1 bg-black rounded hover:bg-blue-600 shadow-xl transition duration-150">Football News</Link>
      <Link to="/dashboard/politics" className="block text-white text-sm font-bold border px-2 py-1 bg-black rounded hover:bg-blue-600 shadow-xl transition duration-150">Political News</Link>
      <button onClick={handleLogout} className="block w-full text-left text-white text-sm font-bold border px-2 py-1 bg-red-600 rounded hover:bg-red-800 shadow-xl transition duration-150">Logout</button>
    </>
  );
}

export default DashboardNav;
