import React from 'react';
import { NavLink } from 'react-router-dom';
import { ChatBubbleLeftRightIcon, UserGroupIcon } from '@heroicons/react/24/outline'; // hoặc /solid

const Sidebar = () => {
  return (
    <div className="w-48 h-full bg-gray-100 text-gray-800 border-r border-gray-300 shadow-sm">
      <div className="flex flex-col p-4 space-y-2">

        <NavLink
          to="/"
          className={({ isActive }) =>
            `flex items-center gap-2 px-4 py-2 rounded transition-all
             ${isActive ? 'bg-blue-500 text-white' : 'text-gray-800 hover:bg-gray-200'}`
          }
        >
          <ChatBubbleLeftRightIcon className="h-5 w-5" />
          <span>Diễn đàn</span>
        </NavLink>

        <NavLink
          to="/group"
          className={({ isActive }) =>
            `flex items-center gap-2 px-4 py-2 rounded transition-all
             ${isActive ? 'bg-blue-500 text-white' : 'text-gray-800 hover:bg-gray-200'}`
          }
        >
          <UserGroupIcon className="h-5 w-5" />
          <span>Nhóm</span>
        </NavLink>

      </div>
    </div>
  );
};

export default Sidebar;
