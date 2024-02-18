import BranchManagerDashboard from "../pages/branchManager/BranchManagerDashboard";
import CreateProduct from "../pages/branchManager/sportsItemsManagements/CreateProduct";
import DeleteProduct from "../pages/branchManager/sportsItemsManagements/DeleteProduct";
import GetAllProducts from "../pages/branchManager/sportsItemsManagements/GetAllProducts";

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
        name: "Delete Products",
        path: "sports-items-management/delete-product",
        element: <DeleteProduct />,
      },
    ],
  },
];
