import { useEffect, useState } from "react";
import { Space, Table } from "antd";
import { cvList, deleteCV } from "../services/api";
import { Link } from "react-router-dom";
import { Drawer } from "antd";

const CvList = () => {
  let [list, setList] = useState([]);
  const [reload, setReload] = useState(true);
  const [view, setView] = useState({
    name: "",
    tech: "",
    level: "",
    salaryexp: "",
    exp: "",
    number: "",
    email: "",
    ref: "",
    image: "",
  });

  useEffect(() => {
    cvList()
      .then((cvl) => {
        console.log("🚀 ~ cvl 222:", cvl);
        console.log(list);
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
          <button
            className="bg-yellow-500 px-3 py-1 text-white rounded-lg"
            onClick={() => {
              showDrawer(record);
            }}
          >
            View
          </button>
          <button className="bg-blue-500 px-3 py-1 text-white rounded-lgc">
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

  const [open, setOpen] = useState(false);
  const showDrawer = (data) => {
    setOpen(true);
    setView({
      name: data.name,
      tech: data.tech,
      level: data.level,
      salaryexp: data.salaryexp,
      exp: data.exp,
      number: data.number,
      email: data.email,
      ref: data.ref,
      image: data.image,
    });
  };
  const onClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Table columns={columns} dataSource={list} />
      <Drawer title="User Details" onClose={onClose} open={open}>
        <p>Name: {view.name}</p>
        <p>Technology: {view.tech}</p>
        <p>Level: {view.level}</p>
        <p>Salary Exp: {view.salaryexp}</p>
        <p>Experience: {view.exp}</p>
        <p>Phone Number: {view.number}</p>
        <p>Email: {view.email}</p>
        <p>Reference: {view.ref}</p>
        <p>CV: {view.image}</p>
      </Drawer>
    </>
  );
};
export default CvList;
