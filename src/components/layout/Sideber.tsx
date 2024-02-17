import { Menu } from "antd";
import Sider from "antd/es/layout/Sider";
import { sideberItemsGenerator } from "../../utils/sideberItemsGenerators";
import { adminPaths } from "../../routers/admin.routes";
import { Badge } from "antd";
import { superAdminPaths } from "../../routers/superAdmin.routes";
import { useAppSelector } from "../../redux/hooks";
import { selectCurrentUser } from "../../redux/features/auth/authSlice";

const userRole = {
  SUPERADMIN: "superAdmin",
  ADMIN: "admin",
  FACULTY: "faculty",
  STUDENT: "student",
};

const Sideber = () => {
  const role = userRole.SUPERADMIN;
  const user = useAppSelector(selectCurrentUser);

  let sideberItems;

  switch (user!.role) {
    case userRole.SUPERADMIN:
      sideberItems = sideberItemsGenerator(
        superAdminPaths,
        userRole.SUPERADMIN
      );
      break;
    case userRole.ADMIN:
      sideberItems = sideberItemsGenerator(adminPaths, userRole.ADMIN);
      break;

    default:
      break;
  }

  return (
    <Sider breakpoint="lg" collapsedWidth="0">
      <div
        style={{
          color: "white",
          height: "4rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Badge count={role}>
          <h1
            style={{
              color: "white",
            }}
          >
            Sports Items{" "}
          </h1>
        </Badge>
      </div>

      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={["4"]}
        items={sideberItems}
      />
    </Sider>
  );
};

export default Sideber;
