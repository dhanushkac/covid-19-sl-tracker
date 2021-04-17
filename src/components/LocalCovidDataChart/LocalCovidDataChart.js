import React from "react";
import { AreaChart } from "@opd/g2plot-react";
import { Col, Row, Typography } from "antd";

import LastUpdate from "../LastUpdate";

const { Title } = Typography;

const LocalCovidDataChart = ({ data, updatedAt }) => {

  const chartData = data.reduce((res, val) => {
    res = [...res, {
      date: val.date,
      value: val.cases_count,
      type: "Cases"
    },
      {
        date: val.date,
        value: val.recoveries_count,
        type: "Recoveries"
      },
      {
        date: val.date,
        value: val.deaths_count,
        type: "Deaths"
      }
    ]

    return res;
  }, []);

  const config = {
    data: chartData,
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
      <Title level={4}>Sri Lanka COVID-19 Status
      </Title>
      <LastUpdate updated={updatedAt}/>
      <AreaChart {...config} />
    </Col>
  </Row>;
}


export default React.memo(LocalCovidDataChart);
