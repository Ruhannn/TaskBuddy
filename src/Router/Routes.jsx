import { createBrowserRouter } from "react-router-dom";

import ErrorPage from "../components/ErrorPage";
import Main from "../Layout/Main";
import Login from "../components/Login/Login";
import SignUp from "../components/SignUp/SignUp";
import PrivateRoute from "./PrivetRoute";
import Home from "../Home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <PrivateRoute>
        <Main />
      </PrivateRoute>
    ),
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/sign-up",
        element: <SignUp />,
      },
      //   {
      //     path: "/dashBoard",
      //     element: <SignUp></SignUp>,
      //   },
    ],
  },
]);
export default router;
