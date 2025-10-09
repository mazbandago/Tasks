import React from 'react'
import { Link } from 'react-router-dom';


function Navbar() {
  return (
        <nav className="bg-indigo-700 shadow-md p-4">
          <div className="max-w-6xl mx-auto flex justify-between items-cener">
            <Link to="/"className="text-white text-2xl font-bold hover:text-indigo-200 transition duration-150 ">Home</Link>
          </div>
        </nav>
  )
}

export default Navbar;