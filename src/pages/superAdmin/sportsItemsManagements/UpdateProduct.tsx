import {
  Button,
  Form,
  Input,
  Modal,
  Select,
  Table,
  TableColumnsType,
} from "antd";
import {
  useGetAllProductQuery,
  useUpdateProductIntoDBMutation,
} from "../../../redux/features/sportsItemsManagement/sportsItemsManagementApi";
import { useState } from "react";
import { TQueryParam } from "../../../types";
import { TTProduct } from "./GetAllProducts";
import { toast } from "sonner";
const { Option } = Select;
import TextArea from "antd/es/input/TextArea";

const UpdateProduct = () => {
  const [updateProduct] = useUpdateProductIntoDBMutation();
  const [params] = useState<TQueryParam[] | undefined>(undefined);
  const { data: productData } = useGetAllProductQuery(params);
  const [form] = Form.useForm();
  const [error, setError] = useState("");
  console.log(error, "errorrs");

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
      features,
      description,
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
      features,
      description,
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

  const [product, setProduct] = useState({});
  const {
    key,
    name,
    size,
    brand,
    category,
    code,
    price,
    quantity,
    features,
    description,
    productImg,
  }: FieldType = product;

  const [isModalOpen, setIsModalOpen] = useState(false);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const showModal = (item: any) => {
    setIsModalOpen(true);
    setProduct(item);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
    form.resetFields();
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any
  const onFinish = async (data: any) => {
    try {
      const updateProductInfo = {
        _id: key,
        name: data.name,
        category: data.category,
        code: data.code,
        price: data.price,
        quantity: data.quantity,
        size: data.size,
        brand: data.brand,
        features: data.features,
        description: data.description,
        productImg: data.productImg,
      };
      const res = await updateProduct(updateProductInfo).unwrap();
      if (res.success) {
        toast.success(`Updated ${name}!!!`, { duration: 2000 });
        form.resetFields();
        setError("");
        setIsModalOpen(false);
      }
    } catch (err) {
      console.log(err);
    }
  };

  type FieldType = {
    key?: string;
    name?: string;
    category?: string;
    code?: string;
    price?: string;
    quantity?: string;
    size?: string;
    brand?: string;
    features?: string;
    description?: string;
    productImg?: string;
  };

  return (
    <>
      <Modal
        /* width={400} */
        title={`Do you Want to update these "${name}" ?`}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[]}
      >
        <Form
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          form={form}
          onFinish={onFinish}
          autoComplete="off"
        >
          <Form.Item<FieldType> label="Name" name="name">
            <Input placeholder={name} />
          </Form.Item>
          <Form.Item name="category" label="Branch">
            <Select placeholder={category}>
              <Option value="Laptop">Laptop</Option>
              <Option value="PC Accessoriesale">PC Accessories</Option>
              <Option value="Monitor">Monitor</Option>
              <Option value="Motherboard">Motherboard</Option>
              <Option value="Refrigerator">Refrigerator</Option>
              <Option value="Water Filter">Water Filter</Option>
              <Option value="Cooking Appliances">Cooking Appliances</Option>
              <Option value="Other">Other</Option>
            </Select>
          </Form.Item>
          <Form.Item name="code" label="Code">
            <Input placeholder={code} />
          </Form.Item>
          <Form.Item name="price" label="Price">
            <Input placeholder={price} />
          </Form.Item>
          <Form.Item name="quantity" label="Quantity">
            <Input placeholder={quantity} />
          </Form.Item>
          <Form.Item<FieldType> label="Size" name="size">
            <Input placeholder={size} />
          </Form.Item>
          <Form.Item name="brand" label="Brand">
            <Select placeholder={brand}>
              <Option value="Asus">Asus</Option>
              <Option value="Lenovo">Lenovo</Option>
              <Option value="Apple">Apple</Option>
              <Option value="Amazon">Amazon</Option>
              <Option value="Samsung">Samsung</Option>
              <Option value="LG">LG</Option>
              <Option value="Simphony">Simphony</Option>
              <Option value="Dell">Dell</Option>
              <Option value="Accer">Accer</Option>
              <Option value="Other">Other</Option>
            </Select>
          </Form.Item>

          <Form.Item name="features" label="Features">
            <TextArea placeholder={features} />
          </Form.Item>

          <Form.Item name="description" label="Description">
            <TextArea placeholder={description} />
          </Form.Item>

          <Form.Item name="productImg" label="productImg">
            <Input placeholder={productImg} />
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
        {error && (
          <div style={{ color: "red" }}>
            <h5 style={{ textAlign: "center", marginTop: "10px" }}>{error}</h5>
          </div>
        )}
      </Modal>
      <Table dataSource={tableData} columns={columns} />
    </>
  );
};

export default UpdateProduct;
