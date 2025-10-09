import React from 'react'
import DashboardNav from '../components/DashboardNav';
import { Outlet } from 'react-router-dom';

function DashboardLayout() {
  return (
    <div>
        <DashboardNav />
        <Outlet />
        
        This is the dashboard page

    </div>
  )
}

export default DashboardLayout;