import { Layout } from "antd";
import Sideber from "./Sideber";
import { Outlet } from "react-router-dom";
import Headers from "./Header";

const { Content } = Layout;

const MainLayout = () => {
  return (
    <Layout /* style={{ height: "100" }} */>
      <Sideber />
      <Layout>
        <Headers />
        <Content style={{ margin: "24px 16px 0" }}>
          <div
            style={{
              padding: 24,
              minHeight: 360,
            }}
          >
            <Outlet />
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
