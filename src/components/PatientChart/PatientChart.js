import React from 'react';
import {Typography} from "antd";
import { LineChart } from '@opd/g2plot-react';

const {Title} = Typography;

const PatientChart = ({chartData, width}) => {

    const config = {
        height: 400,
        width: width,

        title: {
            visible: false
        },
        description: {
            visible: false
        },
        padding: 'auto',
        forceFit: true,
        xField: 'date',
        yField: 'confirmed',
        label: {
            visible: true,
            type: 'point',
        },
        point: {
            visible: true,
            size: 5,
        },
        xAxis: {
            tickCount: 10,
        },
        data: [...chartData],
    };

    return <div style={{marginTop: '40px'}}>
        <Title level={2}>The Distribution of the COVID-19 confirmed
            cases</Title>
        <LineChart {...config} />
    </div>;
};

export default PatientChart;
