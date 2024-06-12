import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main/Main";
import Home from "../Layout/Pages/HomePage/Home/Home";
import ErrorPage from "../Layout/ErrorPage/ErrorPage";
import LoginForm from "../Layout/Pages/LoginPage/loginForm/LoginForm";
import RegForm from "../Layout/Pages/LoginPage/RegForm/RegForm";

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
        element: <LoginForm></LoginForm>,
      },
      {
        path: "/register",
        element: <RegForm></RegForm>,
      }
    ]
  },
]);

export default router;