import { useState } from "react";

import { TQueryParam } from "../../../types";
import { Select, Table, TableColumnsType } from "antd";
import { TSalesProduct } from "../../../types/salesProduct";
import { useGetAllSalesProductQuery } from "../../../redux/features/salesProduct/salesProductApi";

const GetAllSales = () => {
  const [params] = useState<TQueryParam[] | undefined>(undefined);
  const { data: salesData } = useGetAllSalesProductQuery(params);
  const [role, setRole] = useState("");
  const handleChange = (value: { value: string }) => {
    const as = value.value;
    setRole(as);
  };
  console.log(role);

  ///.filter((userRole) => userRole.seller === role)
  if (role) {
    console.log("role");
  } else {
    console.log("roles");
  }
  const tableData = salesData?.data
    ?.filter((userRole) => userRole.sellerRole === role)
    .map(({ _id, name, buyer, seller, sellerRole, quantity, price, date }) => ({
      key: _id,
      name,
      sellerRole,
      seller,
      buyer,
      quantity,
      price,
      date,
    }));

  type TTSalesProduct = Pick<
    TSalesProduct,
    "buyer" | "date" | "name" | "seller" | "quantity" | "price"
  >;

  const columns: TableColumnsType<TTSalesProduct> = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Seller",
      dataIndex: "seller",
      key: "seller",
    },
    {
      title: "Buyer",
      dataIndex: "buyer",
      key: "buyer",
    },
    {
      title: "Quantity",
      dataIndex: "quantity",
      key: "quantity",
    },
    {
      title: "Price",
      dataIndex: `price`,
      key: "price",
    },
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
    },
  ];

  return (
    <div>
      <h1>Get All Sales</h1>
      <Select
        labelInValue
        defaultValue={{ value: "branchManager", label: "Branch Manager" }}
        style={{ width: 120 }}
        onChange={handleChange}
        options={[
          {
            value: "superAdmin",
            label: "Super Admin",
          },
          {
            value: "branchManager",
            label: "Branch Manager",
          },
          {
            value: "seller",
            label: "Seller",
          },
        ]}
      />
      <Table dataSource={tableData} columns={columns} />
    </div>
  );
};

export default GetAllSales;
