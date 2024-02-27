import { Button, Modal, Table, TableColumnsType } from "antd";
import { useGetAllBranchManagerIntoDBQuery } from "../../../redux/features/superAdmin/userManagement/branchManagerApi";
import { TQueryParam } from "../../../types";
import { useState } from "react";
import { TBranchManager } from "../../../types/branchManager";
import { useGetAllSalesProductQuery } from "../../../redux/features/salesProduct/salesProductApi";
export type TTBranchManager = Pick<TBranchManager, "userId" | "username">;

type TUser = {
  username?: string;
  user?: string;
};

const GetAllBranchManager = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [branchManager, setBranchManager] = useState({});
  const { username, user }: TUser = branchManager;
  //console.log(user);
  const [params] = useState<TQueryParam[] | undefined>(undefined);
  const { data: branchManagerData } = useGetAllBranchManagerIntoDBQuery(params);
  const { data: salesData } = useGetAllSalesProductQuery(params);
  //const { user } = branchManager;

  const tableData = branchManagerData?.data?.map(
    ({ _id, user, userId, username, email, contactNo, presentAddress }) => ({
      key: _id,
      user,
      userId,
      username,
      email,
      contactNo,
      presentAddress,
    })
  );

  const columns: TableColumnsType<TTBranchManager> = [
    {
      title: "UserId",
      dataIndex: "userId",
      key: "userId",
    },
    {
      title: "Username",
      dataIndex: "username",
      key: "username",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "ContactNo",
      dataIndex: `contactNo`,
      key: "tcontactNo",
    },
    {
      title: "PresentAddress",
      dataIndex: `presentAddress`,
      key: "presentAddress",
    },
    {
      title: "Action",
      key: "x",
      render: (item) => {
        return (
          <div>
            <Button type="primary" onClick={() => showModal(item)}>
              Salse history
            </Button>
          </div>
        );
      },
    },
  ];

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const showModal = (item: any) => {
    setBranchManager(item);
    setIsModalOpen(true);
    // Replace this with the logic to fetch or set your _id
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  /// Modal table functionally
  const tableDataSource = salesData?.data
    ?.filter((branchManager) => branchManager.seller === user)
    .map(
      ({
        _id,
        invoice,
        name,
        buyer,
        seller,
        quantity,
        brand,
        size,
        code,
        price,
        date,
      }) => ({
        key: _id,
        invoice,
        name,
        seller,
        brand,
        buyer,
        size,
        code,
        quantity,
        price,
        date,
      })
    );

  const tableColumns = [
    {
      title: "Invoice",
      dataIndex: "invoice",
      key: "invoice",
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
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
      title: "Size",
      dataIndex: "size",
      key: "size",
    },
    {
      title: "Code",
      dataIndex: "code",
      key: "code",
    },
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
    },
  ];

  return (
    <>
      <h1>Get all branch manager</h1>
      <Modal
        title={`${username} sales history`}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[]}
        width="auto"
      >
        <Table
          columns={tableColumns}
          dataSource={tableDataSource}
          scroll={{ x: 1500, y: 300 }}
        />
      </Modal>
      <Table dataSource={tableData} columns={columns} />
    </>
  );
};

export default GetAllBranchManager;
