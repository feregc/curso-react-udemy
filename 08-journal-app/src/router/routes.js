import {
  createBrowserRouter,
  Navigate,
} from "react-router-dom";

import { JournalApp } from "../JournalApp";
import { LoginPage, RegisterPage } from "../auth/pages";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <JournalApp/>,
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