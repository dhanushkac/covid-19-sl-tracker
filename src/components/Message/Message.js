import React from "react";
import { InfoCircleFilled } from "@ant-design/icons";

const Message = ({ message, type, icon, children }) => {

  let messageStyle = {
    message: {
      background: "#ff4d4f",
      padding: "10px 15px",
      color: "white",
      borderRadius: "10px",
      marginBottom: "20px",
      minHeight: "30px"
    },

    messageData: {
      paddingLeft: "10px"
    }
  };

  if (type === "light") {
    messageStyle = {
      message: {
        ...messageStyle.message,
        background: "#f0f0f0",
        color: "black",
        border: "1px solid #d9d9d9"
      },

      messageData: {
        ...messageStyle.messageData
      }
    };
  }

  return (
    <div style={messageStyle.message}>
      {
        message ? <div style={{ fontSize: "1.2em" }}>
          {icon && <InfoCircleFilled/>}
          <span style={messageStyle.messageData}>{message}</span>
        </div> : <div>{children}</div>
      }
    </div>
  );
};

export default Message;

