import React from 'react';
import { Outlet } from 'react-router-dom';
import Layout from './page/layout/Layout.jsx';
import './index.css';

const App = () => {
  return (
    <Layout>
      <Outlet />
    </Layout>
  );
};

export default App;
