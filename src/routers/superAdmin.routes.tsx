import GetAllSales from "../pages/superAdmin/salesManagement/GetAllSales";
import GetMySales from "../pages/superAdmin/salesManagement/GetMySales";
import SalesManagement from "../pages/superAdmin/salesManagement/SalesManagement";
import CreateProduct from "../pages/superAdmin/sportsItemsManagements/CreateProduct";
import DeleteProduct from "../pages/superAdmin/sportsItemsManagements/DeleteProduct";
import GetAllProducts from "../pages/superAdmin/sportsItemsManagements/GetAllProducts";
import UpdateProduct from "../pages/superAdmin/sportsItemsManagements/UpdateProduct";
import SuperAdminDashboard from "../pages/superAdmin/superAdminDashboard";
import CreateBranchManager from "../pages/superAdmin/userManagement/CreateBranchManager";
import CreateSeller from "../pages/superAdmin/userManagement/CreateSeller";
import GetAllBranchManager from "../pages/superAdmin/userManagement/GetAllBranchManager";
import GetAllSeller from "../pages/superAdmin/userManagement/GetAllSeller";

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
        name: "Update Products",
        path: "sports-items-management/update-product",
        element: <UpdateProduct />,
      },
      {
        name: "Delete Products",
        path: "sports-items-management/delete-product",
        element: <DeleteProduct />,
      },
    ],
  },
  {
    name: "Salse Management",
    children: [
      {
        name: "Salse Product",
        path: "sales-product",
        element: <SalesManagement />,
      },
      {
        name: "All Seals",
        path: "sales",
        element: <GetAllSales />,
      },
      {
        name: "My Seals",
        path: "my-sales",
        element: <GetMySales />,
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
      {
        name: " All Branch Manager ",
        path: "users-management/all-branch-manager",
        element: <GetAllBranchManager />,
      },
      {
        name: "All Seller ",
        path: "users-management/all-seller",
        element: <GetAllSeller />,
      },
    ],
  },
];
