import React from 'react'
import { Link, useNavigate } from 'react-router-dom';


function DashboardNav() {
  const Navigate = useNavigate();
  const handleLogout = () =>{
  localStorage.removeItem("isLoggedIn");
  Navigate("/signinform")
  }

  return (
    <nav className="bg-indigo-700 shadow-md p-4 rounded-t-2xl">
       <div className="max-w-6xl mx-auto flex justify-between items-cener">
            <Link to="/"className="text-white text-2xl font-bold border px-2 py-2 bg-black rounded hover:bg-blue-600 shadow-xl transition duration-150">Home</Link>
            <Link to="/dashboard"className="text-white text-2xl font-bold border px-2 py-2 bg-black rounded hover:bg-blue-600 shadow-xl transition duration-150">Football News</Link>
            <Link to="/dashboard/politics"className="text-white text-2xl font-bold border px-2 py-2 bg-black rounded hover:bg-blue-600 shadow-xl transition duration-150">Political News</Link>
            <button onClick={handleLogout} className="text-white text-2xl font-bold border px-2 py-2 bg-red-600 rounded hover:bg-red-800 shadow-xl transition duration-150">Logout</button>
        </div> 
    </nav>
  )
}

export default DashboardNav;