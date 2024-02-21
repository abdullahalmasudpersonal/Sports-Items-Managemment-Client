import { Table, TableColumnsType } from "antd";
import { useState } from "react";
import { TQueryParam } from "../../../types";
import { useGetAllSalesProductQuery } from "../../../redux/features/salesProduct/salesProduct";
import { TSalesProduct } from "../../../types/salesProduct";
import { useAppSelector } from "../../../redux/hooks";
import { selectCurrentUser } from "../../../redux/features/auth/authSlice";

const GetMySales = () => {
  const [params] = useState<TQueryParam[] | undefined>(undefined);
  const { data: salesData } = useGetAllSalesProductQuery(params);
  const { data: salesDatas } = useGetAllSalesProductQuery(params);
  const user = useAppSelector(selectCurrentUser);

  const data = salesDatas?.data?.map((res) => res._id);

  console.log(data);

  const datas = salesDatas?.data;
  const aa = datas?.map((res) => res.seller);
  const ress = aa?.map((rs) => rs?._id);

  console.log(ress);

  if (user?._id === ress) {
    console.log("dd");
  }
  console.log(user?._id, ress);

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
  ];

  return (
    <div>
      <h1>Get My Sales</h1>
      <Table dataSource={tableData} columns={columns} />
    </div>
  );
};

export default GetMySales;
