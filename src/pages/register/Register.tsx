import { Button, Form, Input, Select } from "antd";
import "./Register.css";
import { Link, useNavigate } from "react-router-dom";
import { FieldValues } from "react-hook-form";
import { useAppDispatch } from "../../redux/hooks";
import { useRegistrationMutation } from "../../redux/features/auth/authApi";
import { verifyToken } from "../../utils/verifyToken";
import { TUser, setUser } from "../../redux/features/auth/authSlice";
import { toast } from "sonner";
import { useState } from "react";

const { Option } = Select;

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 8 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 16 },
  },
};

const Register = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [registration] = useRegistrationMutation();
  const [error, setError] = useState();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onFinish = async (data: FieldValues) => {
    console.log("Received values of form: ", data);
    try {
      const userInfo = {
        username: data.username,
        name: {
          firstName: data.firstName,
          middleName: data.middleName,
          lastName: data.lastName,
        },
        email: data.email,
        password: data.password,
        role: data.role,
        gender: data.gender,
        contactNo: data.contactNo,
        profileImg: data.profileImg,
      };
      const res = await registration(userInfo).unwrap();
      console.log(res.success);
      /* if (res.success === true) {
      } */

      const user = verifyToken(res.data.accessToken) as TUser;
      const toastId = toast.success("Registration successfully!!", {
        duration: 2000,
      });
      dispatch(setUser({ user: user, token: res.data.accessToken }));
      toast.success("Registration successfully & Loged in ", {
        id: toastId,
        duration: 2000,
      });
      navigate(`/${user.role}/dashboard`);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      setError(error.data.message);
      //setError(error);
    }
  };

  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select style={{ width: 70 }}>
        <Option value="86">+880</Option>
        <Option value="87">+87</Option>
      </Select>
    </Form.Item>
  );

  return (
    <div className="register">
      <div className="register-dev">
        <div>
          <h1 style={{ textAlign: "center", marginBottom: "30px" }}>
            Register
          </h1>
          <Form
            {...formItemLayout}
            name="register"
            onFinish={onFinish}
            /*   initialValues={{
              username: "tanvir",
              firstName: "Tanvir",
              middleName: "",
              lastName: "Saki",
              email: "tanvir@gmail.com",
              password: "tanvir",
              confirmPassword: "tanvir",
              role: "admin",
              gender: "male",
              contactNo: "012542232",
              profileImg: "adklfdsal",
            }} */
            style={{ maxWidth: 600 }}
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
              name="password"
              label="Password"
              rules={[
                {
                  required: true,
                  message: "Please input your password!",
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

            <Form.Item
              name="role"
              label="Role"
              rules={[{ required: true, message: "Please select role!" }]}
            >
              <Select placeholder="select your role">
                <Option value="admin">Admin</Option>
                <Option value="salesMan">Sales Man</Option>
              </Select>
            </Form.Item>

            <Form.Item
              name="gender"
              label="Gender"
              rules={[{ required: true, message: "Please select gender!" }]}
            >
              <Select placeholder="select your gender">
                <Option value="male">Male</Option>
                <Option value="female">Female</Option>
                <Option value="other">Other</Option>
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
              <Input addonBefore={prefixSelector} style={{ width: "100%" }} />
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

            <Button type="primary" htmlType="submit" style={{ width: "100%" }}>
              Register
            </Button>
            {error && (
              <div style={{ color: "red" }}>
                <h5 style={{ textAlign: "center", marginTop: "10px" }}>
                  {error}
                </h5>
              </div>
            )}
            <div style={{ textAlign: "center", marginTop: "10px" }}>
              Or <Link to="/login">Login now!</Link>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Register;
