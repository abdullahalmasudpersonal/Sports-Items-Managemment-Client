import { Button, Table, TableColumnsType } from "antd";
import { useState } from "react";
import { TQueryParam } from "../../../types";
import { TSalesProduct } from "../../../types/salesProduct";
import { useGetAllMySalesProductQuery } from "../../../redux/features/salesProduct/salesProductApi";

const GetMySales = () => {
  const [params] = useState<TQueryParam[] | undefined>(undefined);
  const { data: salesData } = useGetAllMySalesProductQuery(params);

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
      dataIndex: "key",
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
    {
      title: "Invoice",
      key: "x",
      render: (item) => {
        return (
          <div>
            <Button type="primary" /* onClick={() => showModal(item)} */>
              Download
            </Button>
          </div>
        );
      },
    },
  ];

  return (
    <div>
      <h1>Get My Sales</h1>
      <Table dataSource={tableData} columns={columns} />
    </div>
  );
};

export default GetMySales;
