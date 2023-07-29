import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { DisplayLogin } from "../pages/Login";
import { Profile } from "../pages/Profile";
import { CreateAccount } from "../components/CreateAccount/CreateAccount";
import { CreateAccountDetail } from "../components/CreateAccountDetail/CreateAccountDetail";
import { UserEdit } from "../pages/UserEdit";

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
        element: <Profile />,
      },
      {
        path: "profile/edit",
        element: <UserEdit />,
      },
    ],
  },
]);

export const Router = () => {
  return <RouterProvider router={routes} />;
};
