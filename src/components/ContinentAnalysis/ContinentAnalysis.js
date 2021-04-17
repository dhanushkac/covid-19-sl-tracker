import React from "react";
import { Col, Row, Statistic, Typography } from "antd";

import LastUpdate from "../LastUpdate";

import './ContinentAnalysis.css';

const { Title } = Typography;

const ContinentAnalysis = ({ data, updatedAt }) => {

  const elements = Object.entries(data).map(v => {
    const [name, value] = v;

    return <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 8 }} lg={{ span: 8 }} xl={{ span: 8 }}
                key={v.toString()}>
      <div className="continent">
        <Title className="continentTitle" level={4}>{name === 'Australia/Oceania' ? 'Australia' : name}</Title>
        <Statistic title="Total Cases" value={value} className="stat"/>
      </div>
    </Col>;
  });

  return <Col span={24} className="chart-grid">
    <Title level={4}>Cases by Continent</Title>
    <LastUpdate updated={updatedAt}/>
    <Row>
      {elements}
    </Row>
  </Col>;
}


export default React.memo(ContinentAnalysis);
