import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from 'antd'; // Import Button from Ant Design

const Header = ({ username, onLogout }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('username');
    if (onLogout) onLogout(); // Gọi hàm cập nhật state ở App
    navigate('/'); // Quay về trang chủ
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
                className="hover:bg-blue-600"
                style={{ backgroundColor: '#1e40af', borderColor: '#1e40af' }} // Tailwind + Ant Design button style
              >
                Đăng nhập
              </Button>
            </Link>
            <Link to="/register">
              <Button
                type="default"
                className="hover:bg-gray-300"
                style={{ borderColor: '#1e40af' }} // Tailwind + Ant Design button style
              >
                Đăng ký
              </Button>
            </Link>
          </div>
        ) : (
          <div className="flex items-center gap-4">
            <span className="text-gray-700">Xin chào, <strong>{username}</strong></span>
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
