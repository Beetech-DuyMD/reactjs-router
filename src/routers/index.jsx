import { Outlet, createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login";
import App from "../App";
import Movies from "../pages/Movies";
import Cotnent from "../components/main/content/Cotnent";

// const AuthLayout = () => {
//   return <Outlet />;
// };

export default createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        element: <Login />,
        path: "/login",
      },
      {
        element: <Cotnent />,
        path: "/",
        children: [
        ],
      },
      {
        path: "/movies",
        element: <Movies />,
      },
    ],
  },
]);
