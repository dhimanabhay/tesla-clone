import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Home from "./pages/home/Home";
import App from "./App";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Model3 from "./pages/model3/Model3";
import ModelS from "./pages/modelS/ModelS";
import ModelX from "./pages/modelX/ModelX";
import CyberTruck from "./pages/cybertruck/Cybetruck";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <App>
        <Home />
      </App>
    ),
  },
  {
    path: "model_3",
    element: (
      <App>
        <Model3 />
      </App>
    ),
  },
  {
    path: "model_s",
    element: (
      <App>
        <ModelS />
      </App>
    ),
  },
  {
    path: "model_x",
    element: (
      <App>
        <ModelX />
      </App>
    ),
  },
  {
    path: "cybertruck",
    element: (
      <App>
        <CyberTruck />
      </App>
    ),
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
