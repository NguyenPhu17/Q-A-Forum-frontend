import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="w-48 h-full bg-gray-100 text-gray-800 border-r border-gray-300 shadow-sm"> 
      <div className="flex flex-col p-4">
        <Link to="/" className="text-gray-800 hover:bg-gray-200 px-4 py-2 rounded mb-2">Trang chủ</Link>
        <Link to="/group" className="text-gray-800 hover:bg-gray-200 px-4 py-2 rounded mb-2">Nhóm</Link>
      </div>
    </div>
  );
};

export default Sidebar;
