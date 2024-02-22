import { Table, TableColumnsType } from "antd";
import { TSeller } from "../../../types/seller";
import { TQueryParam } from "../../../types";
import { useState } from "react";
import { useGetAllSellerIntoDBQuery } from "../../../redux/features/superAdmin/userManagement/sellerApi";

export type TTSeller = Pick<TSeller, "userId" | "username">;

const GetAllSeller = () => {
  const [params] = useState<TQueryParam[] | undefined>(undefined);
  const { data: branchManagerData } = useGetAllSellerIntoDBQuery(params);

  const tableData = branchManagerData?.data?.map(
    ({ _id, userId, username, email, contactNo, presentAddress }) => ({
      key: _id,
      userId,
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
    /*   {
          title: "Action",
          key: "x",
          render: (item) => {
            return (
              <div>
                <Button type="primary" onClick={() => showModal(item)}>
                  Salse
                </Button>
              </div>
            );
          },
        }, */
  ];

  return (
    <div>
      <h1>Get all seller</h1>
      <Table dataSource={tableData} columns={columns} />
    </div>
  );
};

export default GetAllSeller;
