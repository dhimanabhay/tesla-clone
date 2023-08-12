import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from "./pages/home/Home"
// import App from "./App"

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Model3 from './pages/model3/Model3';
import ModelS from './pages/modelS/ModelS';
import ModelX from './pages/modelX/ModelX';
import CyberTruck from './pages/cybertruck/Cybetruck';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: 'model_3',
    element: <Model3 />,
  },
  {
    path: 'model_s',
    element: <ModelS />,
  },
  {
    path: 'model_x',
    element: <ModelX />,
  },
  {
    path: 'cybertruck',
    element: <CyberTruck />,
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

