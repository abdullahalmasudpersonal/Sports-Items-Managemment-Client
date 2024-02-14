import AdminDashboard from "../pages/admin/AdminDashboard";
import GetAllSales from "../pages/admin/salesManagement/GetAllSales";
import SalesManagement from "../pages/admin/salesManagement/SalesManagement";
import CreateProduct from "../pages/admin/sportsItemsManagements/CreateProduct";
import DeleteProduct from "../pages/admin/sportsItemsManagements/DeleteProduct";
import GetAllProducts from "../pages/admin/sportsItemsManagements/GetAllProducts";

export const adminPaths = [
  {
    name: "Dashboard",
    path: "dashboard",
    element: <AdminDashboard />,
  },
  {
    name: "Sports Items Management",
    children: [
      {
        name: "Create Product",
        path: "product/create-product",
        element: <CreateProduct />,
      },
      {
        name: "All Products",
        path: "products",
        element: <GetAllProducts />,
      },
      {
        name: "Delete Products",
        path: "delete-product",
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
    ],
  },
  {
    name: "Academic Management",
    children: [
      {
        name: "Academic Semester",
        path: "academic-semester",
        element: <AdminDashboard />,
      },
    ],
  },
  {
    name: "User Management",
    children: [
      {
        name: "Create Admin",
        path: "create-admin",
        element: <AdminDashboard />,
      },
      {
        name: "Create Faculty",
        path: "create-faculty",
        element: <AdminDashboard />,
      },
      {
        name: "Create Student",
        path: "create-student",
        element: <AdminDashboard />,
      },
      {
        name: "Create Member",
        path: "create-member",
        element: <AdminDashboard />,
      },
    ],
  },
];
