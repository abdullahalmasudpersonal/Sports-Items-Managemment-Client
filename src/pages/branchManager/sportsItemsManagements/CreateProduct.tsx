import { Button, Form, Input, Select } from "antd";
import { Option } from "antd/es/mentions";
import { FieldValues } from "react-hook-form";
import "./CreatePorduct.css";
import { useCreateProductIntoDBMutation } from "../../../redux/features/sportsItemsManagement/sportsItemsManagementApi";
import { toast } from "sonner";
import TextArea from "antd/es/input/TextArea";
import { useState } from "react";

const CreateProduct = () => {
  const [createProducts] = useCreateProductIntoDBMutation();
  const [form] = Form.useForm();
  const [error, setError] = useState("");

  const onFinish = async (data: FieldValues) => {
    try {
      const productInfo = {
        name: data.productname,
        category: data.category,
        code: data.productCode,
        price: data.price,
        quantity: data.quantity,
        brand: data.brand,
        features: data.features,
        description: data.description,
        productImg: data.productImg,
      };
      // console.log(productInfo);
      const res = await createProducts(productInfo).unwrap();
      if (res.success) {
        toast.success("Create new prodcuct!!!", { duration: 2000 });
        form.resetFields();
        setError("");
      }
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      setError(error.data.message);
    }
  };

  return (
    <div className="create-product">
      <div className="product-dev">
        <div>
          <h1 style={{ textAlign: "center", marginBottom: "30px" }}>
            Create Product
          </h1>
          <Form
            form={form}
            onFinish={onFinish}
            style={{ maxWidth: 600 }}
            scrollToFirstError
          >
            <Form.Item
              name="productname"
              label="Product Name"
              rules={[
                {
                  type: "string",
                  message: "The input is not valid Product name!",
                },
                {
                  required: true,
                  message: "Please input your Product name!",
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              name="category"
              label="Category"
              rules={[
                { required: true, message: "Please select description!" },
              ]}
            >
              <Select placeholder="select your category">
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

            <Form.Item
              name="productCode"
              label="Product code"
              rules={[
                {
                  type: "string",
                  message: "The input is not valid Product code!",
                },
                {
                  required: false,
                  message: "Please input your Product code!",
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              name="price"
              label="Price"
              rules={[
                {
                  type: "string",
                  message: "The input is not valid Price!",
                },
                {
                  required: true,
                  message: "Please input your Price!",
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              name="quantity"
              label="Quantity"
              rules={[
                {
                  type: "string",
                  message: "The input is not valid quantity!",
                },
                {
                  required: true,
                  message: "Please input your quantity!",
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              name="brand"
              label="Brand"
              rules={[
                {
                  required: true,
                  message: "Please input your Brand!",
                },
              ]}
            >
              <Select placeholder="select your brand">
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

            <Form.Item
              name="features"
              label="Features"
              rules={[{ required: true, message: "Please select Features!" }]}
            >
              <TextArea />
            </Form.Item>

            <Form.Item
              name="description"
              label="Description"
              rules={[
                { required: true, message: "Please select description!" },
              ]}
            >
              <TextArea />
            </Form.Item>

            <Form.Item
              name="productImg"
              label="productImg"
              rules={[
                {
                  required: true,
                  message: "Please input your productImg!",
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Button type="primary" htmlType="submit" style={{ width: "100%" }}>
              Create Porduct
            </Button>
          </Form>
          {error && (
            <div style={{ color: "red" }}>
              <h5 style={{ textAlign: "center", marginTop: "10px" }}>
                {error}
              </h5>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CreateProduct;
