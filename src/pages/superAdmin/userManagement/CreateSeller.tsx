import { Button, Form, Input, Select } from "antd";
import TextArea from "antd/es/input/TextArea";
import { useState } from "react";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";
import { useCreateSellerMutation } from "../../../redux/features/superAdmin/userManagement/sellerApi";

const { Option } = Select;

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 8 },
  },
  wrapperCol: {
    xs: { span: 14 },
    sm: { span: 16 },
  },
};

const CreateSeller = () => {
  const [seller] = useCreateSellerMutation();
  const [error, setError] = useState("");
  const [form] = Form.useForm();

  const onFinish = async (data: FieldValues) => {
    console.log("received values of form", data);

    try {
      const sellerData = {
        password: data.password,
        seller: {
          username: data.username,
          name: {
            firstName: data.firstName,
            middleName: data.middleName,
            lastName: data.lastName,
          },
          email: data.email,
          gender: data.gender,
          bloodGroup: data.bloodGroup,
          contactNo: data.contactNo,
          presentAddress: data.presentAddress,
          permanetAddress: data.presentAddress,
          profileImg: data.profileImg,
        },
      };
      console.log(sellerData);
      const result = await seller(sellerData).unwrap();
      if (result.success) {
        toast.success("Create new seller!!!", { duration: 2000 });
        form.resetFields();
        setError("");
      }
      console.log(result);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      setError(error.data.message);
    }
  };

  return (
    <div className="createBranchManager">
      <div className="createBranchManager-dev">
        <div>
          <h1 style={{ textAlign: "center", marginBottom: "30px" }}>
            Create Seller
          </h1>
          <Form
            {...formItemLayout}
            onFinish={onFinish}
            form={form}
            scrollToFirstError
          >
            <Form.Item
              name="username"
              label="Username"
              rules={[
                {
                  type: "string",
                  message: "This is not valid Username!",
                },
                {
                  required: true,
                  message: "Please input your Username!",
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              name="firstName"
              label="Frist Name"
              rules={[
                {
                  type: "string",
                  message: "The input is not valid Frist Name!",
                },
                {
                  required: true,
                  message: "Please input your Frist Name!",
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              name="middleName"
              label="Middle Name"
              rules={[
                {
                  type: "string",
                  message: "The input is not valid Middle Name!",
                },
                {
                  required: false,
                  message: "Please input your Middle Name!",
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="lastName"
              label="Last Name"
              rules={[
                {
                  type: "string",
                  message: "The input is not valid Last Name!",
                },
                {
                  required: true,
                  message: "Please input your Last Name!",
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              name="email"
              label="E-mail"
              rules={[
                {
                  type: "email",
                  message: "The input is not valid E-mail!",
                },
                {
                  required: true,
                  message: "Please input your E-mail!",
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              name="gender"
              label="Gender"
              rules={[{ required: true, message: "Please select gender!" }]}
            >
              <Select placeholder="Select your gender">
                <Option value="male">Male</Option>
                <Option value="female">Female</Option>
                <Option value="other">Other</Option>
              </Select>
            </Form.Item>

            <Form.Item
              name="bloodGroup"
              label="Blood Group"
              rules={[
                { required: true, message: "Please select blood group!" },
              ]}
            >
              <Select placeholder="Select your blood group">
                <Option value="A+">A+</Option>
                <Option value="A-">A-</Option>
                <Option value="B+">B+</Option>
                <Option value="B-">B-</Option>
                <Option value="AB+">AB+</Option>
                <Option value="AB-">AB-</Option>
                <Option value="O+">O+</Option>
                <Option value="O-">O-</Option>
              </Select>
            </Form.Item>

            <Form.Item
              name="contactNo"
              label="Phone Number"
              rules={[
                {
                  required: true,
                  message: "Please input your phone number!",
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              name="presentAddress"
              label="Present Address"
              rules={[
                {
                  required: true,
                  message: "Please input your present address!",
                },
              ]}
            >
              <TextArea />
            </Form.Item>

            <Form.Item
              name="permanetAddress"
              label="Permanet Address"
              rules={[
                {
                  required: true,
                  message: "Please input your permanet address!",
                },
              ]}
            >
              <TextArea />
            </Form.Item>

            <Form.Item
              name="profileImg"
              label="Profile Image"
              rules={[
                {
                  type: "string",
                  message: "The input is not valid Profile Image!",
                },
                {
                  required: true,
                  message: "Please input your Profile Image!",
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              name="password"
              label="Password"
              rules={[
                { type: "string", message: "Password is not valid!" },
                {
                  required: true,
                  message: "Please input your password",
                },
              ]}
              hasFeedback
            >
              <Input.Password />
            </Form.Item>

            <Form.Item
              name="confirmPassword"
              label="Confirm Password"
              dependencies={["password"]}
              hasFeedback
              rules={[
                {
                  required: true,
                  message: "Please confirm your password!",
                },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue("password") === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(
                      new Error(
                        "The new password that you entered do not match!"
                      )
                    );
                  },
                }),
              ]}
            >
              <Input.Password />
            </Form.Item>

            <Button type="primary" htmlType="submit" style={{ width: "100%" }}>
              Submit
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

export default CreateSeller;
