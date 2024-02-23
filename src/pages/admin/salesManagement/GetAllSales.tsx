import { useState } from "react";
import { TQueryParam } from "../../../types";
import { Table, TableColumnsType } from "antd";
import { TSalesProduct } from "../../../types/salesProduct";
import { useGetAllSalesProductQuery } from "../../../redux/features/salesProduct/salesProductApi";

const GetAllSales = () => {
  const [params] = useState<TQueryParam[] | undefined>(undefined);
  const { data: salesData } = useGetAllSalesProductQuery(params);

  const tableData = salesData?.data?.map(
    ({ _id, name, buyer, quantity, date }) => ({
      key: _id,
      name,
      buyer,
      quantity,
      date,
    })
  );

  type TTSalesProduct = Pick<
    TSalesProduct,
    "buyer" | "date" | "name" | "quantity"
  >;

  const columns: TableColumnsType<TTSalesProduct> = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
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
