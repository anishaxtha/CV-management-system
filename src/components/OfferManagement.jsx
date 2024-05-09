import React, { useState } from "react";
import { Tabs } from "antd";
import OfferLetter from "./OfferLetter";
import Draftletter from "./Draftletter";

const { TabPane } = Tabs;

const OfferManagement = () => {
  const [activeTab, setActiveTab] = useState("1");

  const handleTabChange = (key) => {
    setActiveTab(key);
  };

  return (
    <>
      <Tabs activeKey={activeTab} onChange={handleTabChange}>
        <TabPane tab="Offer Letter" key="1">
          <OfferLetter />
        </TabPane>
        <TabPane tab="Upload Draft Letter" key="2">
          <Draftletter />
        </TabPane>
      </Tabs>
    </>
  );
};
export default OfferManagement;
