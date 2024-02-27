import { Button, Modal, Table, TableColumnsType } from "antd";
import { useState } from "react";
import { TQueryParam } from "../../../types";
import { TSalesProduct } from "../../../types/salesProduct";
import { useGetAllMySalesProductQuery } from "../../../redux/features/salesProduct/salesProductApi";
import Invoice from "../../../components/ui/invoice/Invoice";

const GetMySales = () => {
  const [params] = useState<TQueryParam[] | undefined>(undefined);
  const { data: salesData } = useGetAllMySalesProductQuery(params);

  const tableData = salesData?.data?.map(
    ({ _id, name, buyer, seller, quantity, price,invoice, date, createdAt,size }) => ({
      key: _id,
      name,
      seller,
      buyer,invoice,
      quantity,
      price,size,
      createdAt,
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
      title: "Invoice",
      dataIndex: "invoice",
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
            <Button type="primary" onClick={() => showModal(item)} >
              Download
            </Button>
          </div>
        );
      },
    },
  ];

  const [product, setProduct] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const showModal = (item: any) => {
    setProduct(item);
    setIsModalOpen(true);
    // Replace this with the logic to fetch or set your _id
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };


  return (
    <div>
      <h1>Get My Sales</h1>
      <Modal
        title={``}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[]}
        width='1000px'
      >
        
        <Invoice product={product} />
      </Modal>
      <Table dataSource={tableData} columns={columns} />
    </div>
  );
};

export default GetMySales;
