import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main/Main";
import Home from "../Layout/Pages/HomePage/Home/Home";
import ErrorPage from "../Layout/ErrorPage/ErrorPage";
import Login from "../Layout/Pages/LoginPage/Login/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      }
    ]
  },
]);

export default router;