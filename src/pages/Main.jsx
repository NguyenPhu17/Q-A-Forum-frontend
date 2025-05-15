import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Home from './Home';
import Group from './Group';

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
        
        {/* Nội dung chính thay đổi dựa vào Route */}
        <div className="flex-1 p-6">
          <Routes>
            <Route path="/" element={<Home username={username} />} />
            <Route path="/group" element={<Group />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
