import { Table, TableColumnsType } from "antd";
import { useGetAllBranchManagerIntoDBQuery } from "../../../redux/features/superAdmin/userManagement/branchManagerApi";
import { TQueryParam } from "../../../types";
import { useState } from "react";
import { TBranchManager } from "../../../types/branchManager";

export type TTBranchManager = Pick<TBranchManager, "userId" | "username">;

const GetAllBranchManager = () => {
  const [params] = useState<TQueryParam[] | undefined>(undefined);
  const { data: branchManagerData } = useGetAllBranchManagerIntoDBQuery(params);

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
      <h1>Get all branch manager</h1>
      <Table dataSource={tableData} columns={columns} />
    </div>
  );
};

export default GetAllBranchManager;
