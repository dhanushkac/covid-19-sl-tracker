import React from "react";
import { TwitterTimelineEmbed } from "react-twitter-embed";
import { Col } from "antd";

const TwitterWidget = () => {
    return (
        <Col xs={{span: 24}} md={{span: 4}}>
            <div style={{border: "1px solid #e6e6e6"}}>
                <TwitterTimelineEmbed
                    sourceType="profile"
                    screenName="HPBSriLanka"
                    options={{height: 400}}
                />
            </div>
        </Col>
    )
};

export default TwitterWidget;
