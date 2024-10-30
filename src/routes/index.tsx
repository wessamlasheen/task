import { createBrowserRouter } from "react-router-dom";
import { ROUTES } from "../constants/routes";
import MainLayout from "../layouts/Main/Index";
import Home from "../pages/Home/Index";
import Profile from "../pages/Profile/Index";

export const router = createBrowserRouter([
  {
    path: ROUTES.main,
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: ROUTES.Profile,
        element: <Profile />,
      },
    ],
  },
]);
