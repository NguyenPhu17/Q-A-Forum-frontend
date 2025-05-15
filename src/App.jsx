import React from 'react';
import AppRouter from './routes/AppRouter';
import { ConfigProvider } from 'antd';

const App = () => {
  return (
    <ConfigProvider>
      <AppRouter />
    </ConfigProvider>
  );
};

export default App;
