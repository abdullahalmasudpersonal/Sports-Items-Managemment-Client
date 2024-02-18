import SuperAdminDashboard from "../pages/superAdmin/superAdminDashboard";
import CreateBranchManager from "../pages/superAdmin/userManagement/CreateBranchManager";
import CreateSeller from "../pages/superAdmin/userManagement/CreateSeller";

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
        path: "users-management/create-branch-manager",
        element: <CreateBranchManager />,
      },
      {
        name: "Create Seller ",
        path: "users-management/create-seller",
        element: <CreateSeller />,
      },
    ],
  },
];
