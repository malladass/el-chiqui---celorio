import React from 'react';
import { ViteReactSSG } from 'vite-react-ssg';
import App from './App';
import './index.css';

const routes = [
  {
    path: '/',
    element: <App />,
  },
];

export const createRoot = ViteReactSSG({ routes });
