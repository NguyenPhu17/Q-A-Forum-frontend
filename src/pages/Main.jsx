import React from 'react';
import { Outlet } from 'react-router-dom'; 
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';

const HomePage = () => {
  const username = localStorage.getItem('username');

  const handleLogout = () => {
    localStorage.removeItem('username');
    window.location.reload();
  };

  return (
    <div className="flex flex-col h-screen">
      <Header username={username} onLogout={handleLogout} />

      <div className="flex flex-1">
        <Sidebar />

        <div className="flex-1 p-6">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
