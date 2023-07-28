import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { DisplayLogin } from "../pages/Login";
import { Profile } from "../pages/Profile";

const routes = createBrowserRouter([
  {
    path: "/",
    children: [
      {
        index: true,
        element: <DisplayLogin />,
      },
      {
        path: "register",
      },
      {
        path: "profile",
        element: <Profile />,
      },
    ],
  },
]);

export const Router = () => {
  return <RouterProvider router={routes} />;
};
