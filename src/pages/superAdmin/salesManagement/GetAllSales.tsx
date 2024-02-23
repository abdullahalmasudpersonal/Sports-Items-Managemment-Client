import { useState } from "react";

import { TQueryParam } from "../../../types";
import { Table, TableColumnsType } from "antd";
import { TSalesProduct } from "../../../types/salesProduct";
import { useGetAllSalesProductQuery } from "../../../redux/features/salesProduct/salesProductApi";

const GetAllSales = () => {
  const [params] = useState<TQueryParam[] | undefined>(undefined);
  const { data: salesData } = useGetAllSalesProductQuery(params);

  const tableData = salesData?.data?.map(
    ({ _id, name, buyer, seller, quantity, price, date }) => ({
      key: _id,
      name,
      seller,
      buyer,
      quantity,
      price,
      date,
    })
  );

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
      <Table dataSource={tableData} columns={columns} />
    </div>
  );
};

export default GetAllSales;
