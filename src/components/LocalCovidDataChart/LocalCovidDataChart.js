import React from "react";
import { AreaChart } from "@opd/g2plot-react";
import { Col, Row, Typography } from "antd";

import LastUpdate from "../LastUpdate";

const { Title } = Typography;

const LocalCovidDataChart = ({ data, updatedAt }) => {

  const config = {
    data,
    xField: 'date',
    yField: 'value',
    seriesField: 'type',
    color: ['#1fbcec', '#60d7a7', '#d76e60'],
    legend: {
      position: 'top',
    },
    xAxis: {
      type: 'time',
      mask: 'DD/MM/YY'
    },
  };

  return <Row>
    <Col span={24} className="chart-grid">
      <Title level={4}>The Daily Local COVID Data
      </Title>
      <LastUpdate updated={updatedAt}/>
      <AreaChart {...config} />
    </Col>
  </Row>;
}


export default React.memo(LocalCovidDataChart);
