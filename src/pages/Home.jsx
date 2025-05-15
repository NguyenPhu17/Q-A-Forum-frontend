import React from 'react';

const Home = ({ username }) => (
  <div>
    <h1 className="text-3xl font-semibold">Trang chính của bạn</h1>
    <p className="mt-4 text-lg">
      {username
        ? 'Đây là nội dung của ứng dụng sau khi đăng nhập thành công.'
        : 'Bạn chưa đăng nhập. Hãy đăng nhập để truy cập đầy đủ.'}
    </p>
  </div>
);

export default Home;
