import { Button, Row, Space, Table, Tag, Typography } from "antd";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import type { ColumnsType } from "antd/es/table";
import {
  GetListUserRequireActive,
  HandleSetActiveUser,
} from "../../service/user";

export const ListUserRequireActive: React.FC = () => {
  const { Text } = Typography;
  const [listUserActive, setListUserActive] = useState([]);
  const [isActive, setIsActive] = useState(false);

  interface DataType {
    key: string;
    username: string;
    role: string;
    email: string;
  }

  const onSetActive = async (username: string) => {
    try {
      console.log("usernaem: ", username);
      const result = await HandleSetActiveUser(
        username,
        localStorage["accessToken"]
      );
      await GetListUser();
      alert("SetActive Success");
      return result;
    } catch (error: any) {
      alert(error.message);
      throw new Error(error.message);
    }
  };

  const columns: ColumnsType<DataType> = [
    {
      title: "Username",
      dataIndex: "username",
      key: "name",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Role",
      dataIndex: "role",
      key: "role",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Status",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <Button
            onClick={() => {
              onSetActive(record.username);
            }}
            disabled={isActive}
          >
            setActive
          </Button>
        </Space>
      ),
    },
  ];

  const GetListUser = async () => {
    try {
      const result = await GetListUserRequireActive(
        localStorage["accessToken"]
      );
      console.log("result.data.listData: ", result?.data?.listData);
      return setListUserActive(result.data.listData);
    } catch (error: any) {
      alert(error.message);
      throw new Error(error.message);
    }
  };

  useEffect(() => {
    GetListUser();
    return () => {};
  }, []);

  return (
    <>
      <Row style={{ width: "100%", justifyContent: "center" }}>
        <Table columns={columns} dataSource={listUserActive} />
      </Row>
    </>
  );
};
