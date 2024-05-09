import React, { useState } from "react";
import { Tabs, Card } from "antd";

const EvaluteAssessment = () => {
  const { TabPane } = Tabs;

  const [activeTab, setActiveTab] = useState("1");

  const handleTabChange = (key) => {
    setActiveTab(key);
  };

  return (
    <>
      <Tabs activeKey={activeTab} onChange={handleTabChange}>
        <TabPane tab="Drafts" key="1">
          {/* <OfferLetter /> */}
          <h1>is this drafts page</h1>
        </TabPane>
        <TabPane tab="Assigned" key="2">
          <h1 className="text-xl font-semibold mb-3"> Assigned task listed</h1>
          <div>
            <Card
              type="inner"
              title="Inner Card title"
              extra={<a href="#">More</a>}
            >
              Inner Card content
            </Card>
            <Card
              style={{
                marginTop: 16,
              }}
              type="inner"
              title="Inner Card title"
              extra={<a href="#">More</a>}
            >
              Inner Card content
            </Card>
          </div>
        </TabPane>
        <TabPane tab="Returned" key="3">
          {/* <Draftletter /> */}
          <h1>this is returned task</h1>
        </TabPane>
      </Tabs>
    </>
  );
};

export default EvaluteAssessment;
