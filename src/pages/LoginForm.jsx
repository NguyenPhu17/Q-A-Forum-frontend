import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const LoginForm = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const users = JSON.parse(localStorage.getItem('users')) || [];

    const foundUser = users.find(
      (user) => user.email === email && user.password === password
    );

    if (foundUser) {
      localStorage.setItem('username', foundUser.fullname);
      navigate('/');
    } else {
      alert('Đăng nhập không thành công. Vui lòng kiểm tra lại email và mật khẩu.');
    }
  };


  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-md w-full bg-white p-6 rounded-2xl shadow-md">
        <div className="relative">
          <h2 className="text-[28px] text-royalblue font-semibold pl-7 relative">
            Đăng nhập
            <span className="absolute left-0 top-1.5 w-[18px] h-[18px] bg-royalblue rounded-full" />
            <span className="absolute left-0 top-1.5 w-[18px] h-[18px] bg-royalblue rounded-full animate-ping" />
          </h2>
        </div>

        <LabelInputTop label="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <LabelInputTop label="Mật khẩu" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />

        <button type="submit" className="bg-royalblue hover:bg-blue-700 text-white py-2 rounded-lg text-lg">Đăng nhập</button>

        <p className="text-sm text-center text-gray-600">
          Chưa có tài khoản? <Link to="/register" className="text-royalblue hover:underline">Đăng ký</Link>
        </p>
      </form>
    </div>
  );
};

const LabelInputTop = ({ label, type, value, onChange }) => {
  const id = label.toLowerCase().replace(/\s+/g, '-');
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={id} className="text-sm text-gray-700 font-medium">{label}</label>
      <input
        required
        type={type}
        id={id}
        value={value}
        onChange={onChange}
        className="w-full px-3 py-2 border border-gray-300 rounded-md outline-none leading-6 focus:border-royalblue focus:ring-1 focus:ring-royalblue"
      />
    </div>
  );
};

export default LoginForm;
