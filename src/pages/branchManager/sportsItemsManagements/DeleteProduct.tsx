import { Button, Form, Modal, Table, TableColumnsType } from "antd";
import { useState } from "react";
import { TQueryParam } from "../../../types";
import {
  useDeleteProductFormDBMutation,
  useGetAllProductQuery,
} from "../../../redux/features/sportsItemsManagement/sportsItemsManagementApi";
import { TTProduct } from "./GetAllProducts";
import { toast } from "sonner";

const DeleteProduct = () => {
  const [deleteSingleProduct] = useDeleteProductFormDBMutation();
  const [params] = useState<TQueryParam[] | undefined>(undefined);
  const { data: productData } = useGetAllProductQuery(params);
  const [productName, setProductName] = useState("");
  const [productId, setProductId] = useState("");

  const tableData = productData?.data?.map(
    ({ _id, name, category, code, price, quantity, brand, productImg }) => ({
      key: _id,
      name,
      category,
      quantity,
      code,
      price,
      brand,
      productImg,
    })
  );

  const columns: TableColumnsType<TTProduct> = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Category",
      dataIndex: "category",
      key: "category",
    },
    {
      title: "Quantity",
      dataIndex: "quantity",
      key: "quantity",
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "Brand",
      dataIndex: "brand",
      key: "brand",
    },
    {
      title: "Remove",
      key: "x",
      render: (item) => {
        return (
          <div>
            <Button type="primary" onClick={() => showModal(item)} danger>
              Delete
            </Button>
          </div>
        );
      },
    },
  ];
  const [isModalOpen, setIsModalOpen] = useState(false);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const showModal = (item: any) => {
    setIsModalOpen(true);
    setProductName(item.name);
    setProductId(item.key);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onFinish = async () => {
    try {
      const salesProductInfo = {
        _id: productId,
        isDeleted: true,
      };
      const res = await deleteSingleProduct(salesProductInfo).unwrap();
      if (res.success) {
        toast.success("Delete prodcuct successfully!!!", { duration: 2000 });
      }
      setIsModalOpen(false);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Modal
        width={400}
        title="Do you Want to delete these items?"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[]}
      >
        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          style={{ maxWidth: 600 }}
          onFinish={onFinish}
          autoComplete="off"
        >
          <h5>Product Name: {productName}</h5>
          <Form.Item
            style={{ marginBottom: "0px" }}
            wrapperCol={{ offset: 8, span: 16 }}
          >
            <Button type="primary" htmlType="submit">
              Comfirm
            </Button>
          </Form.Item>
        </Form>
      </Modal>
      <Table dataSource={tableData} columns={columns} />
    </>
  );
};

export default DeleteProduct;
