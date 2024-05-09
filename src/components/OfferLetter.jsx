import { Table } from "antd";
import React from "react";

const OfferLetter = () => {
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "1",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "2",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "3",
    },
    {
      title: "Action",
      dataIndex: "action",
      key: "4",
    },
  ];
  return <Table columns={columns} />;
};

export default OfferLetter;
