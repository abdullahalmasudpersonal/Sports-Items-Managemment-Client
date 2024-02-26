import { Button, Modal, Table, TableColumnsType } from "antd";
import { TSeller } from "../../../types/seller";
import { TQueryParam } from "../../../types";
import { useState } from "react";
import { useGetAllSellerIntoDBQuery } from "../../../redux/features/superAdmin/userManagement/sellerApi";
import { useGetAllSalesProductQuery } from "../../../redux/features/salesProduct/salesProductApi";

export type TTSeller = Pick<TSeller, "userId" | "username">;
type TUser = {
  username?: string;
  user?: string;
};

const GetAllSeller = () => {
  const [seller, setSeller] = useState({});
  const [params] = useState<TQueryParam[] | undefined>(undefined);
  const { data: sellerData } = useGetAllSellerIntoDBQuery(params);
  const { data: salesData } = useGetAllSalesProductQuery(params);
  const { username, user }: TUser = seller;

  const tableData = sellerData?.data?.map(
    ({ _id, userId, user, username, email, contactNo, presentAddress }) => ({
      key: _id,
      userId,
      user,
      username,
      email,
      contactNo,
      presentAddress,
    })
  );

  const columns: TableColumnsType<TTSeller> = [
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
              Salse History
            </Button>
          </div>
        );
      },
    },
  ];

  /// Modal table functionally
  const [isModalOpen, setIsModalOpen] = useState(false);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const showModal = (item: any) => {
    setSeller(item);
    setIsModalOpen(true);
    // Replace this with the logic to fetch or set your _id
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  /// .filter((branchManager) => branchManager.seller === user)
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
      <h1>Get all seller</h1>
      <Modal
        title={`"${username}" sales history`}
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

export default GetAllSeller;
