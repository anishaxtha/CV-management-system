import { useEffect, useState } from "react";
import { Space, Table } from "antd";
import { cvList, deleteCV } from "../services/api";
import { Link } from "react-router-dom";

const CvList = () => {
  let [list, setList] = useState([]);
  const [reload, setReload] = useState(true);

  useEffect(() => {
    cvList()
      .then((cvl) => {
        console.log("🚀 ~ cvl 222:", cvl);
        console.log(list);
        console.log("zzz", typeof cvl);
        setList(cvl.data[1].vdata);
      })
      .catch((err) => {
        console.log("error list", err);
      });
  }, [reload]);

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
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Experience",
      dataIndex: "exp",
      key: "3",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Salary",
      dataIndex: "salaryexp",
      key: "4",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Tech",
      dataIndex: "tech",
      key: "5",
    },
    {
      title: "Level",
      dataIndex: "level",
      key: "6",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "7",
    },

    {
      title: "Action",
      key: "8",
      render: (_, record) => (
        <Space size="middle">
          <button className="bg-blue-500 px-3 py-1 text-white rounded-lg">
            <Link to="/profile" state={record}>
              Edit
            </Link>
          </button>
          <button
            className="bg-red-500 px-3 py-1 text-white rounded-lg"
            onClick={() => {
              deleteCV(record.id);
              setReload(!reload);
            }}
          >
            Delete
          </button>
        </Space>
      ),
    },
  ];

  return (
    <>
      <Table columns={columns} dataSource={list} />
    </>
  );
};
export default CvList;
