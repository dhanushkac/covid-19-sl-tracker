import React from "react";
import { AreaChart } from "@opd/g2plot-react";
import { Col, Typography } from "antd";

import LastUpdate from "../LastUpdate";

const { Title } = Typography;

const PCRCountHistogram = ({ patientChartData, updatedAt }) => {

  const config = {
    title: {
      visible: false
    },
    data: patientChartData,
    meta: {
      count: {
        alias: "tests"
      }
    },
    responsive: true,
    xField: "date",
    yField: "count",
    stackField: "count",
    color: "#82de9c",
    areaStyle: {
      fillOpacity: 0.7,
    },
    legend: {
      visible: true
    },
    xAxis: {
      tickCount: 5,
      type: 'time',
      mask: 'DD/MM/YY'
    }
  };

  return <Col span={24} className="chart-grid">
    <Title level={4}>The Local PCR Tests count per day</Title>
    <LastUpdate updated={updatedAt}/>
    <AreaChart {...config} />
  </Col>;
}


export default React.memo(PCRCountHistogram);
