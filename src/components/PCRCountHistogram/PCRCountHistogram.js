import React from "react";
import { LineChart } from "@opd/g2plot-react";
import { Col, Typography } from "antd";

import LastUpdate from "../LastUpdate";

const { Title } = Typography;

const PCRCountHistogram = ({ patientChartData, updatedAt }) => {

  const config = {
    title: {
      visible: false
    },
    data: patientChartData,
    responsive: true,
    xField: "date",
    yField: "count",
    stackField: "count",
    color: "#f8924a",
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
    },
    yAxis: {
      label: {
        formatter: (v) => `${v}`.replace(/\d{1,3}(?=(\d{3})+$)/g, (s) => `${s},`),
      }
    },
    tooltip: {
      formatter: (v) => {
        return { name: "Tests", value: `${v.count}`.replace(/\d{1,3}(?=(\d{3})+$)/g, (s) => `${s},`) }
      },
    },
  };

  return <Col span={24} className="chart-grid">
    <Title level={4}>Daily Sri Lanka PCR Tests</Title>
    <LastUpdate updated={updatedAt}/>
    <LineChart {...config} />
  </Col>;
}


export default React.memo(PCRCountHistogram);
