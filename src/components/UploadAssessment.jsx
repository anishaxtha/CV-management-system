import { useState } from "react";
import { DatePicker, Space, Tabs, TimePicker } from "antd";
import TextArea from "antd/es/input/TextArea";

const UploadAssessment = () => {
  const { TabPane } = Tabs;

  const [activeTab, setActiveTab] = useState("1");

  const handleTabChange = (key) => {
    setActiveTab(key);
  };

  // const Assign = (id) => {
  //   AssignTask();
  //   console.log(" AssignTask:", Assign);
  // };

  const onDate = (date, dateString) => {
    console.log(date, dateString);
  };

  const onTime = (time, timeString) => {
    console.log(time, timeString);
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

          <br />
          <div>
            <div>
              <h1 className="text-0.5xl font-semibold">Title (Required)</h1>
              <TextArea
                rows={4}
                placeholder=" Enter Title"
                style={{
                  marginTop: "5px",
                  height: "19px",
                  maxHeight: "9.0072e+15px",
                }}
                className="bg-transparent  border border-black-500 w-full "
              />
            </div>
            <br />
            <div>
              <h1 className="text-0.5xl font-semibold">Instructions</h1>

              <TextArea
                rows={4}
                placeholder=" Enter Instructions"
                style={{
                  marginTop: "5px",
                  height: "19px",
                  maxHeight: "9.0072e+15px",
                }}
                className="bg-transparent  border border-black-500 w-full "
              />
            </div>
            <br />
            <div>
              <span
                className="text-0.5xl font-semibold"
                style={{ marginTop: "15px" }}
              >
                Assign to:
              </span>
              <br />

              <TextArea placeholder="Assign to " autoSize />
              <div
                style={{
                  margin: "24px 0",
                }}
              />
            </div>
            {/* <br /> */}

            <div className="flex justify-between">
              <div>
                <span
                  className="text-0.5xl font-semibold"
                  style={{ marginTop: "15px" }}
                >
                  Due Date:
                </span>
                <br />
                <Space direction="vertical" size="large">
                  <DatePicker onChange={onDate} style={{ width: "400px" }} />
                </Space>
                <br />
              </div>
              <div>
                <span
                  className="text-0.5xl font-semibold"
                  style={{ marginTop: "15px" }}
                >
                  Due Time:
                </span>
                <br />

                <Space wrap direction="vertical" size={18}>
                  <TimePicker
                    use12Hours
                    onChange={onTime}
                    style={{ width: "400px" }}
                  />
                </Space>
              </div>
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
