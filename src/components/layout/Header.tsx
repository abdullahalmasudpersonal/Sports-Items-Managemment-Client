import { UserDeleteOutlined } from "@ant-design/icons";
import { Layout } from "antd";
import { useAppDispatch } from "../../redux/hooks";
import { logout } from "../../redux/features/auth/authSlice";
const { Header } = Layout;

const Headers = () => {
  const dispatch = useAppDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <Header>
      <div style={{ display: "flex", justifyContent: "end" }}>
        <div>
          <UserDeleteOutlined
            onClick={handleLogout}
            style={{ color: "white", fontSize: "20px" }}
          />
        </div>
      </div>
    </Header>
  );
};

export default Headers;
