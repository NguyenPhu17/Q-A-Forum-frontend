import React from 'react';
import Header from '../components/Header';

const HomePage = () => {
  const username = localStorage.getItem('username');

  const handleLogout = () => {
    localStorage.removeItem('username');
    window.location.reload(); // hoặc dùng state để cập nhật giao diện
  };

  return (
    <div>
      <Header username={username} onLogout={handleLogout} />
      <main className="p-6">
        <h1 className="text-3xl font-semibold">Trang chính của bạn</h1>
        <p className="mt-4 text-lg">
          {username
            ? 'Đây là nội dung của ứng dụng sau khi đăng nhập thành công.'
            : 'Bạn chưa đăng nhập. Hãy đăng nhập để truy cập đầy đủ.'}
        </p>
      </main>
    </div>
  );
};

export default HomePage;
