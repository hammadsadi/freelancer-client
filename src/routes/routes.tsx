import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import DashboardLayout from "../Layout/DashboardLayout";
import Statistics from "../pages/Dashboard/Statistics/Statistics";
import Clients from "../pages/ClientManagement/Clients";
import CreateClient from "../pages/ClientManagement/CreateClient";
import ProtectedRoutes from "../helper/ProtectedRoutes";

//  Application Routes
const routes = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/sign-up",
    element: <Register />,
  },
  {
    path: "/dashboard",
    element: (
      <ProtectedRoutes>
        <DashboardLayout />
      </ProtectedRoutes>
    ),
    children: [
      {
        index: true,
        element: <Statistics />,
      },
      {
        path: "clients",
        element: <Clients />,
      },
      {
        path: "create-client",
        element: <CreateClient />,
      },
    ],
  },
]);

export default routes;
