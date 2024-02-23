import SellerDashboard from "../pages/seller/SellerDashboard";
import GetMySales from "../pages/superAdmin/salesManagement/GetMySales";
import GetAllProducts from "../pages/superAdmin/sportsItemsManagements/GetAllProducts";

export const sellerPaths = [
  {
    name: "Dashboard",
    path: "dashboard",
    element: <SellerDashboard />,
  },
  {
    name: "Sports Items",
    children: [
      {
        name: "All Products",
        path: "sports-items-management/products",
        element: <GetAllProducts />,
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
