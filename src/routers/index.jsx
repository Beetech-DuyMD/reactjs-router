import { Outlet, createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login";
import App from "../App.jsx";
import Movies from "../pages/Movies.jsx";

const AuthLayout = () => {
  return <Outlet />;
};

export default createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/movies",
        element: <Movies />,
      },
    ],
  },
  {
    element: <AuthLayout />,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);
