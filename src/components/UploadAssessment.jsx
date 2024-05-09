import React, { useState } from "react";
import { Tabs } from "antd";

const UploadAssessment = () => {
  const { TabPane } = Tabs;

  const [activeTab, setActiveTab] = useState("1");

  const handleTabChange = (key) => {
    setActiveTab(key);
  };

  return (
    <>
      <Tabs activeKey={activeTab} onChange={handleTabChange}>
        <TabPane tab="Assignments" key="1">
          <div className="flex justify-between">
            <h1 className="text-2xl font-semibold">New Assigments</h1>
            <div>
              <button className="bg-transparent border border-blue-500 px-3 py-1 text-blue-500 rounded mx-1">
                Discard
              </button>
              <button className="bg-transparent border border-blue-500 px-3 py-1 text-blue-500 rounded mx-1">
                Save
              </button>
              <button className="bg-transparent border border-blue-500 px-3 py-1 text-blue-500 rounded mx-1">
                Assign
              </button>
            </div>
          </div>
        </TabPane>
        <TabPane tab="Files Uploaded" key="2">
          {/* <Draftletter /> */}
        </TabPane>
      </Tabs>
    </>
  );
};

export default UploadAssessment;
