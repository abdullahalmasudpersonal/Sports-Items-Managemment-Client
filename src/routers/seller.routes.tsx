import SellerDashboard from "../pages/seller/SellerDashboard";
import GetAllProducts from "../pages/seller/sportsItemsManagements/GetAllProducts";

export const sellerPaths = [
  {
    name: "Dashboard",
    path: "dashboard",
    element: <SellerDashboard />,
  },
  {
    name: "Sports Items ",
    children: [
      {
        name: "All Products",
        path: "sports-items-management/products",
        element: <GetAllProducts />,
      },
    ],
  },
];
