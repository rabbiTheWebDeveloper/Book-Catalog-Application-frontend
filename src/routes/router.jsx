import {
  createBrowserRouter,
} from "react-router-dom";
import App from "../App";
import Login from "../pages/Login";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/signup",
    element: <Login></Login>,
  },
]);
