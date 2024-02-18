import CreateProduct from "../pages/superAdmin/sportsItemsManagements/CreateProduct";
import DeleteProduct from "../pages/superAdmin/sportsItemsManagements/DeleteProduct";
import GetAllProducts from "../pages/superAdmin/sportsItemsManagements/GetAllProducts";
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
    name: "Sports Items Management",
    children: [
      {
        name: "Create Product",
        path: "sports-items-management/create-product",
        element: <CreateProduct />,
      },
      {
        name: "All Products",
        path: "sports-items-management/products",
        element: <GetAllProducts />,
      },
      {
        name: "Delete Products",
        path: "sports-items-management/delete-product",
        element: <DeleteProduct />,
      },
    ],
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
