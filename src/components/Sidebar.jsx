import React from "react";
import { Layout, Menu } from "antd";
import { MdOutlineFolderShared, MdSpaceDashboard } from "react-icons/md";
import { ImProfile } from "react-icons/im";
import { AiOutlineSchedule } from "react-icons/ai";
import { FiUpload } from "react-icons/fi";
import { FaRegCalendarCheck } from "react-icons/fa";
import { Link } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
const { Sider } = Layout;

const Sidebar = () => {
  return (
    <div className="">
      <Layout hasSider>
        <Sider
          style={{
            overflow: "auto",
            height: "100vh",
            position: "fixed",
            left: 0,
            top: 50,
            bottom: 0,
          }}
        >
          <div className="demo-logo-vertical" />
          <Menu theme="dark" mode="inline">
            <Menu.Item key={1} icon={<MdSpaceDashboard />}>
              <Link to={"/dashboard"}>Dashboard</Link>
            </Menu.Item>
            <Menu.Item key={2} icon={<CgProfile />}>
              <Link to={"/profile"}>Upload Profile</Link>
            </Menu.Item>
            <Menu.Item key={3} icon={<ImProfile />}>
              <Link to={"/cvlist"}>CV List</Link>
            </Menu.Item>
            <Menu.Item key={4} icon={<MdOutlineFolderShared />}>
              <Link to={"/offer"}>Offer Management</Link>
            </Menu.Item>
            <Menu.Item key={5} icon={<AiOutlineSchedule />}>
              <Link to={"/schedule"}>Schedule Interview</Link>
            </Menu.Item>
            <Menu.Item key={6} icon={<FiUpload />}>
              <Link to={"/upload"}>Upload Assessment</Link>
            </Menu.Item>
            <Menu.Item key={7} icon={<FaRegCalendarCheck />}>
              <Link to={"/evalute"}>Evalute Assessment</Link>
            </Menu.Item>
          </Menu>
        </Sider>
        {/* <Layout
        style={{
          marginLeft: 200,
        }}
      >
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        />
        <Content
          style={{
            margin: "24px 16px 0",
            overflow: "initial",
          }}
        ></Content>
        <Footer
          style={{
            textAlign: "center",
          }}
        >
          {/* Ant Design ©{new Date().getFullYear()} Created by Ant UED */}
        {/* </Footer>
      </Layout> */}
      </Layout>
    </div>
  );
};
export default Sidebar;
