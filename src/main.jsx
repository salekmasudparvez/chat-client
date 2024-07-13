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
import AuthProvider from './authProvider/AuthProvider';
import { Toaster } from 'react-hot-toast';
import PrivateRoute from './PrivateRoutes/PrivateRoute';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      { path: "/", element: <PrivateRoute><Chat /></PrivateRoute> },
      { path: "/singup", element: <Singup /> },
      { path: "/singin", element: <Singin /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />

    </AuthProvider>
    <Toaster />
  </React.StrictMode>
);