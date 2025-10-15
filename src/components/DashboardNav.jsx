import React from 'react'
import { Link } from 'react-router-dom';


function DashboardNav() {
  return (
    <nav className="bg-indigo-700 shadow-md p-4 rounded-t-2xl">
       <div className="max-w-6xl mx-auto flex justify-between items-cener">
            <Link to="/"className="text-white text-2xl font-bold border px-2 py-2 bg-black rounded hover:bg-blue-600 shadow-xl transition duration-150">Home</Link>
            <Link to="/dashboard"className="text-white text-2xl font-bold border px-2 py-2 bg-black rounded hover:bg-blue-600 shadow-xl transition duration-150">Football News</Link>
            <Link to="/dashboard/politics"className="text-white text-2xl font-bold border px-2 py-2 bg-black rounded hover:bg-blue-600 shadow-xl transition duration-150">Political News</Link>
        </div> 
    </nav>
  )
}

export default DashboardNav;