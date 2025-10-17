import React from 'react'
import { Link, useNavigate } from 'react-router-dom';


function Navbar() {
  return (
        <nav className="bg-indigo-700 shadow-md p-4 rounded-t-2xl">
          <div className="max-w-6xl mx-auto flex justify-between items-cener">
            <Link to="/" className="text-white text-sm font-bold border px-0.5 py-0.5 bg-black rounded hover:bg-blue-600 shadow-xl transition duration-150 ">Home</Link>
            <Link to="/generalnews" className="text-white text-sm font-bold border px-0.5 py-0.5 bg-black rounded hover:bg-blue-600 shadow-xl transition duration-150 ">General News</Link>
            <Link to="/signinform" className='text-white text-sm font-bold border px-0.5 py-0.5 bg-black rounded hover:bg-blue-600 shadow-xl transition duration-150'>Login</Link>
            <Link to="/dashboard" className="text-white text-sm font-bold border px-0.5 py-0.5 bg-black rounded hover:bg-blue-600 shadow-xl transition duration-150 ">Dashboard</Link>
          </div>
        </nav>
  )
}

export default Navbar;