import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Chat from './pages/Chat/Chat';
import Main from './Layoutes/Main';
import Singup from './pages/Register/Singup';
import Singin from './pages/Login/Singin';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      { path: "/chat", element: <Chat /> },
      { path: "/singup", element: <Singup /> },
      { path: "/singin", element: <Singin /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);