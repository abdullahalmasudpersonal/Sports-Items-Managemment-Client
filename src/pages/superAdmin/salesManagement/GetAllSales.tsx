import { useState } from "react";
import { TQueryParam } from "../../../types";
import { Select, Table } from "antd";
//import { TSalesProduct } from "../../../types/salesProduct";
import { useGetAllSalesProductQuery } from "../../../redux/features/salesProduct/salesProductApi";
import moment from "moment-timezone";

const GetAllSales = () => {
  const [params] = useState<TQueryParam[] | undefined>(undefined);
  const { data: salesData } = useGetAllSalesProductQuery(params);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [role, setRole] = useState("");
  console.log(role);
  const handleChange = (value: { value: string }) => {
    const as = value.value;
    setRole(as);
  };

  /// .filter((userRole) => userRole.sellerRole === role)
  const tableData = salesData?.data?.map(
    ({
      _id,
      name,
      buyer,
      seller,
      sellerRole,
      quantity,
      price,
      createdAt,
      invoice,
    }) => ({
      key: _id,
      name,
      sellerRole,
      invoice,
      seller,
      buyer,
      quantity,
      price,
      createdAt: moment(createdAt)
        .tz("Asia/Dhaka")
        .format("YYYY-MM-DD HH:mm:ss"),
    })
  );

  /*   type TTSalesProduct = Pick<
    TSalesProduct,
    "buyer" | "date" | "name" | "seller" | "quantity" | "price" | "invoice"
  >; */

  /*  const columns: TableColumnsType<TTSalesProduct> = [
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
      title: "Invoice",
      dataIndex: "invoice",
      key: "invoice",
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
      dataIndex: "createdAt",
      key: "date",
    },
  ]; */

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
          {
            value: "",
            label: "All",
          },
        ]}
      />
      <Table dataSource={tableData} /* columns={columns} */ />
    </div>
  );
};

export default GetAllSales;
