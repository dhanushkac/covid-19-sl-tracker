import React from 'react';
import {InfoCircleFilled} from "@ant-design/icons";
import './Message.css';

const Message = ({admitted}) => {
    return admitted && <div className="message">
        <InfoCircleFilled/>
        <span className="message-data">
            {admitted + " of Suspected or Confirmed COVID-19 cases currently in hospitals"}
        </span>
    </div>;
};

export default Message;

