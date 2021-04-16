import React from "react";
import { Tooltip, Typography } from "antd";

import "./card.css";

const { Title } = Typography;

const StatCard = ({ title, value, icon, newStatus }) => {

  return (
    <div className="card">
      <div>
        <img width={80} src={icon} alt=""/>
      </div>
      <Title className="card-title" level={4}>{title}</Title>
      <div className="card-text">{value}</div>

      <div className="status-data">
        {newStatus && value !== "0" &&
        <Tooltip placement="bottom" title={newStatus.toLowerCase() + " within past 24 hours"}>
          <p className="new-status-text">{newStatus}</p>
        </Tooltip>}
      </div>
    </div>
  );
};

export default StatCard;
