import React from "react";
import { BarChart } from "@opd/g2plot-react";
import { Button, Col, Row, Typography } from "antd";

import LastUpdate from "../LastUpdate";
import { ArrowRightOutlined } from "@ant-design/icons";

const { Title } = Typography;

const GlobalCovidDataChart = ({ data, updatedAt }) => {

  const chartData = data.reduce((arr, val) => {
    arr = [...arr, {
      type: "cases",
      country: val.country,
      value: val.cases
    }, {
      type: "deaths",
      country: val.country,
      value: val.deaths
    }, {
      type: "recovered",
      country: val.country,
      value: val.recovered
    }];

    return arr;
  }, [])

  const config = {
    data: chartData,
    isStack: true,
    xField: 'value',
    yField: 'country',
    seriesField: 'type',
    color: ({ type }) => {
      return type==='cases' ? '#1fbcec' : ( type === 'deaths' ? '#d76e60' :  '#60d7a7');
    },
    label: {
      position: 'middle',
      layout: [
        { type: 'interval-adjust-position' },
        { type: 'interval-hide-overlap' },
        { type: 'adjust-color' },
      ],
    },
  }

  return <Row>
    <Col span={24} className="chart-grid">
      <Row>
        <Col span={18}>
          <Title level={4}>The Global COVID Status</Title>
        </Col>
        <Col span={6} style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
          <Button disabled type="dashed" icon={<ArrowRightOutlined/>} size={'medium'}>
            View Detailed Report
          </Button>
        </Col>
      </Row>
      <LastUpdate updated={updatedAt}/>
      <BarChart {...config} />
    </Col>
  </Row>;
}


export default React.memo(GlobalCovidDataChart);
