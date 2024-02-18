import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { routeGenerator } from "../utils/routesGenerator";
import { adminPaths } from "./admin.routes";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import { superAdminPaths } from "./superAdmin.routes";
import { branchManagerPaths } from "./branchManager.routes";
import { sellerPaths } from "./seller.routes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/superAdmin",
    element: <App />,
    children: routeGenerator(superAdminPaths),
  },
  {
    path: "/branchManager",
    element: <App />,
    children: routeGenerator(branchManagerPaths),
  },
  {
    path: "/seller",
    element: <App />,
    children: routeGenerator(sellerPaths),
  },
  {
    path: "/admin",
    element: <App />,
    children: routeGenerator(adminPaths),
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);

export default router;
