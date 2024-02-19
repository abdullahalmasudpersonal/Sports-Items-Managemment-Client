import { Button, Form, Input, Modal, Table, TableColumnsType } from "antd";
import { useGetAllProductQuery } from "../../../redux/features/sportsItemsManagement/sportsItemsManagementApi";
import { useState } from "react";
import { TQueryParam } from "../../../types";
import { TTProduct } from "./GetAllProducts";

const UpdateProduct = () => {
  const [params] = useState<TQueryParam[] | undefined>(undefined);
  const { data: productData } = useGetAllProductQuery(params);

  const tableData = productData?.data?.map(
    ({
      _id,
      name,
      category,
      code,
      price,
      quantity,
      size,
      brand,
      productImg,
    }) => ({
      key: _id,
      name,
      category,
      quantity,
      size,
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
      title: "Size",
      dataIndex: "size",
      key: "size",
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
            <Button type="primary" onClick={() => showModal(item)}>
              Update
            </Button>
          </div>
        );
      },
    },
  ];

  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = (item: any) => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any
  const onFinish = async (data: any) => {
    try {
      console.log(data);
      /*  const salesProductInfo = {
        _id: productId,
        isDeleted: true,
      };
      console.log(salesProductInfo);
      const res = await deleteSingleProduct(salesProductInfo).unwrap();
      console.log(res);
      if (res.success) {
        toast.success("Delete prodcuct successfully!!!", { duration: 2000 });
      }
      setIsModalOpen(false); */
    } catch (err) {
      console.log(err);
    }
  };

  type FieldType = {
    size?: string;
    brand?: string;
  };

  return (
    <>
      <Modal
        width={400}
        title={`Do you Want to update these  product?`}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[]}
      >
        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          /* style={{ maxWidth: 600 }} */
          onFinish={onFinish}
          autoComplete="off"
        >
          <Form.Item<FieldType>
            label="Size"
            name="size"
            rules={[{ required: true, message: "Please input your size!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item<FieldType>
            label="Brand"
            name="brand"
            rules={[{ required: true, message: "Please input your brand!" }]}
          >
            <Input />
          </Form.Item>

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

export default UpdateProduct;
