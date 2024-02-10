// routes.js

import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Layout from './layouts/Layout';
import Register from './pages/Register';
import SignIn from './pages/SignIn';

const routes = [
  {
    path: '/',
    element: (
      <Layout>
        <p>Home Page</p>
      </Layout>
    ),
  },
  {
    path: '/register',
    element: (
      <Layout>
        <Register />
      </Layout>
    ),
  },
  {
    path: '/login',
    element: (
      <Layout>
        <SignIn />
      </Layout>
    ),
  },
];

export const router = createBrowserRouter(routes);
