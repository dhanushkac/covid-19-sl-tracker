import React from "react";
import { BarChart } from "@opd/g2plot-react";
import { Button, Col, Row, Typography } from "antd";

import LastUpdate from "../LastUpdate";
import { ArrowRightOutlined } from "@ant-design/icons";

const { Title } = Typography;

const GlobalCovidDataChart = ({ data, updatedAt }) => {

  const chartData = data.reduce((arr, val) => {
    arr = [...arr, {
      type: "Cases",
      country: val.country,
      value: val.cases
    }, {
      type: "Deaths",
      country: val.country,
      value: val.deaths
    }, {
      type: "Recovered",
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
      return type==='Cases' ? '#1fbcec' : ( type === 'Deaths' ? '#d76e60' :  '#60d7a7');
    },
    xAxis: {
      label: {
        formatter: (v) => `${v}`.replace(/\d{1,3}(?=(\d{3})+$)/g, (s) => `${s},`),
      }
    },
    tooltip: {
      formatter: (v) => {
        return { name: v.type, value: `${v.value}`.replace(/\d{1,3}(?=(\d{3})+$)/g, (s) => `${s},`) }
      },
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

  return <Col span={24} className="chart-grid">
    <Row>
      <Col span={18}>
        <Title level={4}>Global COVID-19 Status</Title>
      </Col>
      <Col span={6} style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
        <Button disabled type="dashed" icon={<ArrowRightOutlined/>} size={'medium'}>
          View Detailed Report
        </Button>
      </Col>
    </Row>
    <LastUpdate updated={updatedAt}/>
    <BarChart {...config} />
  </Col>;
}


export default React.memo(GlobalCovidDataChart);
