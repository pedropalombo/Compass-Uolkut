import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { DisplayLogin } from "../pages/Login";

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
      },
    ],
  },
]);

export const Router = () => {
  return <RouterProvider router={routes} />;
};
