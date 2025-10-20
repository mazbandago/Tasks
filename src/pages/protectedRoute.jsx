import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';
import PoliticsPage from './PoliticsPage';

function protectedRoute() {
    const isLoggedIn = localStorage.getItem("isLoggedIn")==="true";
    return isLoggedIn? <PoliticsPage/> : <Navigate to="/signinform"/>

}

export default protectedRoute;