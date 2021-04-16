import React from "react";
import { TwitterTimelineEmbed } from "react-twitter-embed";
import { Col } from "antd";

const TwitterWidget = () => {
  return (
    <Col span={18} xs={{ span: 24, offset: 0 }} offset={3} style={{ marginTop: "20px" }}>
      <div style={{ border: "1px solid #e6e6e6", width: "90%", margin: "auto" }}>
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="HPBSriLanka"
          options={{ height: 400 }}
        />
      </div>
    </Col>
  )
};

export default TwitterWidget;
