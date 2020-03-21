import React from "react";
import { Typography, Radio } from "antd";
import { LineChart } from "@opd/g2plot-react";

const { Title } = Typography;

const PatientChart = ({ width, onChange, chartConf }) => {
  const config = {
    height: 400,
    width: width,

    title: {
      visible: false
    },
    description: {
      visible: false
    },
    padding: "auto",
    forceFit: true,
    xField: "date",
    yField: "confirmed",
    label: {
      visible: true,
      type: "point",
      offset: 20
    },
    point: {
      visible: true,
      size: 3
    },
    xAxis: {
      tickCount: 10
    },
    yAxis: {
      tickCount: 10
    },
    data: [...chartConf.chartData],
    responsive: true,
    smooth: true
  };

  return (
    <div style={{ marginTop: "40px" }}>
      <Title level={2}>The Distribution of the COVID-19 confirmed cases</Title>
      <div className="action">
        <Radio.Group
          style={{ textAlign: "center" }}
          onChange={onChange}
          defaultValue={false}
          buttonStyle="solid"
          size="large"
        >
          <Radio.Button value={false}>Sri Lanka</Radio.Button>
          <Radio.Button value={true}> &nbsp; Asia &nbsp;</Radio.Button>
        </Radio.Group>
      </div>
      <LineChart {...config} {...chartConf} />
    </div>
  );
};

export default PatientChart;
