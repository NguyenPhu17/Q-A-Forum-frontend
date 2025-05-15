import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RegisterForm from '../pages/RegisterForm';
import LoginForm from '../pages/LoginForm';
import HomePage from '../pages/Home';

const AppRouter = () => (
  <Router>
    <Routes>
      <Route path="/login" element={<LoginForm />} />
      <Route path="/register" element={<RegisterForm />} />
      <Route path="/" element={<HomePage />} />
    </Routes>
  </Router>
);

export default AppRouter;
