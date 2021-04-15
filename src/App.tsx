import React from "react";
import { Typography } from "antd";
import "antd/dist/antd.less";

const App = () => {
  return (
    <div className={"App"}>
      <Typography.Title level={1} style={{ padding: 16 }}>
        {"React Medflix"}
      </Typography.Title>
    </div>
  );
};

export default App;
