import React, { useEffect, useState } from "react";
import { Table } from "antd";
import { scheduleInterview } from "../services/api";
const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "1",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Position",
    dataIndex: "position",
    key: "2",
  },
  {
    title: "Status",
    dataIndex: "status",
    key: "3",
  },
  {
    title: "Date",
    dataIndex: "datetime",
    key: "4",
  },

  {
    title: "Action",
    key: "action",
    render: (_, record) => (
      // <Space size="middle">
      //   <a>Invite {record.name}</a>
      //   <a>Delete</a>
      // </Space>
      <div>{record.name}</div>
    ),
  },
];

const ScheduleInterview = () => {
  let [data, setData] = useState([]);
  useEffect(() => {
    scheduleInterview()
      .then((res) => {
        console.log("🚀 ~ .then ~ res:", res.data);
        setData(res.data);
      })
      .catch((err) => {
        console.log("error", err);
      });
  }, []);

  return (
    <>
      <Table columns={columns} dataSource={data} />
    </>
  );
};

export default ScheduleInterview;
