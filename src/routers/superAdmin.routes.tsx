import SuperAdminDashboard from "../pages/superAdmin/superAdminDashboard";
import CreateBranchManager from "../pages/superAdmin/userManagement/CreateBranchManager";

export const superAdminPaths = [
  {
    name: "Dashboard",
    path: "dashboard",
    element: <SuperAdminDashboard />,
  },
  {
    name: "Users Management",
    children: [
      {
        name: "Create Branch Manager",
        path: "create-branch-manager",
        element: <CreateBranchManager />,
      },
    ],
  },
];
