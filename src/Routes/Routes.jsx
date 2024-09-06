import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main/Main";
import HomePageLayout from "../Pages/HomePageComponents/HomePageLayout/HomePageLayout";
import SingIn from "../Pages/Authentication/SingIn/SingIn";
import SingUp from "../Pages/Authentication/SingUp/SingUp";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <HomePageLayout></HomePageLayout>,
      },
      {
        path: "/singin",
        element: <SingIn></SingIn>,
      },
      {
        path: "/singup",
        element: <SingUp></SingUp>,
      },
    ],
  },
]);

export default router;
