import React from "react";
import { LineChart } from "@opd/g2plot-react";
import { Col, Typography } from "antd";

import LastUpdate from "../LastUpdate";

const { Title } = Typography;

const LocalComparisonChart = ({ data, updatedAt }) => {

  const localComparisonData = getLocalComparisonData(data);

  const config = {
    title: {
      visible: false
    },
    data: localComparisonData,
    responsive: true,
    xField: "date",
    yField: "value",
    seriesField: "type",
    color: ["#895ad4", "#71cb1c"],
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
        return { name: v.type, value: `${v.value}`.replace(/\d{1,3}(?=(\d{3})+$)/g, (s) => `${s},`) }
      },
    },
  };

  return <Col span={24} className="chart-grid">
    <Title level={4}>Sri Lanka COVID-19 Status - Total Cases Vs Active Cases</Title>
    <LastUpdate updated={updatedAt}/>
    <LineChart {...config} />
  </Col>;
}

function getLocalComparisonData(historyData) {

  return historyData.reduce((arr, value) => {
    const lastIndex = arr.length - 1;

    const cases = parseInt(value.cases_count);
    const deaths = parseInt(value.deaths_count);
    const recoveries = parseInt(value.recoveries_count);

    const active = cases - deaths - recoveries;

    const totalCases = (lastIndex === -1 ? 0 : arr[lastIndex - 1].value) + cases;
    const totalActive = (lastIndex === -1 ? 0 : arr[lastIndex].value) + active;

    arr = [...arr, {
      date: value.date,
      type: "Total Cases",
      value: totalCases,
    }, {
      date: value.date,
      type: "Active Cases",
      value: totalActive
    }]

    return arr;
  }, []);
}


export default React.memo(LocalComparisonChart);
