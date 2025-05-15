import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from 'antd';

const Header = ({ username, onLogout }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('username');
    if (onLogout) onLogout();
    navigate('/');
  };

  const handleMouseEnter = (e, color) => {
    e.currentTarget.style.backgroundColor = color;
  };

  const handleMouseLeave = (e, color) => {
    e.currentTarget.style.backgroundColor = color;
  };

  return (
    <header className="flex justify-between items-center px-6 py-4 bg-white shadow-md">
      <Link to="/" className="text-xl font-bold text-royalblue">MyApp</Link>
      <nav>
        {!username ? (
          <div className="flex gap-4">
            <Link to="/login">
              <Button
                type="primary"
                style={{
                  backgroundColor: 'royalblue',
                  borderColor: '#1e40af',
                }}
                onMouseEnter={(e) => handleMouseEnter(e, '#1e40af')} 
                onMouseLeave={(e) => handleMouseLeave(e, 'royalblue')}
              >
                Đăng nhập
              </Button>
            </Link>
            <Link to="/register">
              <Button
                type="default"
                style={{
                  borderColor: 'royalblue',
                  backgroundColor: 'white',
                  color: 'royalblue',
                }}
                onMouseEnter={(e) => handleMouseEnter(e, '#e5e7eb')} 
                onMouseLeave={(e) => handleMouseLeave(e, 'white')}
              >
                Đăng ký
              </Button>
            </Link>
          </div>
        ) : (
          <div className="flex items-center gap-4">
            <span className="text-gray-700">
              Xin chào, <strong>{username}</strong>
            </span>
            <button
              onClick={handleLogout}
              className="bg-red-500 hover:bg-red-600 text-white px-4 py-1 rounded"
            >
              Đăng xuất
            </button>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
