import { Outlet, createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login";
import App from "../App";
import Movies from "../pages/Movies";
import Cotnent from "../components/main/content/Cotnent";
import About from "../pages/About";

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
      },
      {
        path: "/movies",
        element: <Movies />,
      },
      {
        path: "/abouts",
        element: <About />,
      },
    ],
  },
]);
