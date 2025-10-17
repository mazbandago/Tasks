import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';

function protectedRoute() {
    const isLoggedIn = localStorage.getItem("isLoggedIn")==="true";
    return isLoggedIn? <Outlet /> : <Navigate to="/signinform"/>

}

export default protectedRoute;