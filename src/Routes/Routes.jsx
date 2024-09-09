import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main/Main";
import HomePageLayout from "../Pages/HomePageComponents/HomePageLayout/HomePageLayout";
import SingIn from "../Pages/Authentication/SingIn/SingIn";
import SingUp from "../Pages/Authentication/SingUp/SingUp";
import CheckOut from "../Pages/CheckOut/CheckOut";

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
        path: "/checkout/:id",
        element: <CheckOut></CheckOut>,
        loader: ({params}) => fetch(`http://localhost:5000/services/${params.id}`),
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
