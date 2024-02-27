import { Button, Modal, Table, TableColumnsType } from "antd";
import { TSeller } from "../../../types/seller";
import { TQueryParam } from "../../../types";
import { useState } from "react";
import { useGetAllSellerIntoDBQuery } from "../../../redux/features/superAdmin/userManagement/sellerApi";

export type TTSeller = Pick<TSeller, "userId" | "username">;
type TUser = {
  username?: string;
};

const GetAllSeller = () => {
  const [seller, setSeller] = useState({});
  const [params] = useState<TQueryParam[] | undefined>(undefined);
  const { data: sellerData } = useGetAllSellerIntoDBQuery(params);
  const { username }: TUser = seller;

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
      ></Modal>
      <Table dataSource={tableData} columns={columns} />
    </>
  );
};

export default GetAllSeller;
