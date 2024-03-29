import React from "react";
import ReactDOM from "react-dom/client";

import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";

import { LoginPage, RegisterPage } from "./auth/pages";
import { AppTheme } from "./theme/AppTheme";

import "./styles.css";
import { JournalPage } from "./journal/pages/JournalPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <JournalPage />,
  },
  {
    path: "auth/*",
    children: [
      {
        path: "login",
        element: <LoginPage />,
      },
      {
        path: "register",
        element: <RegisterPage />,
      },
      {
        path: "*",
        element: <Navigate to="login" />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppTheme>
      <RouterProvider router={router} />
    </AppTheme>
  </React.StrictMode>
);
