import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RegisterForm from '../pages/RegisterForm';
import LoginForm from '../pages/LoginForm';
import HomePage from '../pages/Main'; // Trang layout chính
import Group from '../pages/Group';
import Home from '../pages/Home'; // Trang chủ

const AppRouter = () => (
  <Router>
    <Routes>
      <Route path="/login" element={<LoginForm />} />
      <Route path="/register" element={<RegisterForm />} />
      
      <Route path="/" element={<HomePage />}>
        <Route index element={<Home />} />       
        <Route path="group" element={<Group />} />
      </Route>
    </Routes>
  </Router>
);

export default AppRouter;
