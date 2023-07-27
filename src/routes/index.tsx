import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { DisplayLogin } from "../components/DisplayLogin";
import { CreateAccount } from "../components/CreateAccount/CreateAccount";
import { CreateAccountDetail } from "../components/CreateAccountDetail/CreateAccountDetail";

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
        element: <CreateAccount />,
      },
      {
        path: "register/details",
        element: <CreateAccountDetail />,
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
