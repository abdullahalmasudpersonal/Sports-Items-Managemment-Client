import BranchManagerDashboard from "../pages/branchManager/BranchManagerDashboard";
import CreateProduct from "../pages/branchManager/sportsItemsManagements/CreateProduct";
import DeleteProduct from "../pages/branchManager/sportsItemsManagements/DeleteProduct";
import UpdateProduct from "../pages/branchManager/sportsItemsManagements/UpdateProduct";
import GetMySales from "../pages/superAdmin/salesManagement/GetMySales";
import GetAllProducts from "../pages/superAdmin/sportsItemsManagements/GetAllProducts";

export const branchManagerPaths = [
  {
    name: "Dashboard",
    path: "dashboard",
    element: <BranchManagerDashboard />,
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
    name: "Sales Management",
    children: [
      {
        name: "My Sales",
        path: "my-sales",
        element: <GetMySales />,
      },
    ],
  },
];
