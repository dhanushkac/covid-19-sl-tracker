import React from 'react';
import {PieChart} from "@opd/g2plot-react";
import LastUpdate from "../LastUpdate/LastUpdate";
import {Col} from "antd";

const GenderChart = ({chartData, updatedAt}) => {

    const config = {
        forceFit: true,
        title: {
            visible: false
        },
        description: {
            visible: false,
            text: ""
        },
        radius: 0.85,
        data: chartData,
        responsive: true,
        yField: 'type',
        angleField: 'value',
        colorField: 'type',
        label: {
            visible: true,
            style: {
                color: 'white',
                fontSize: '1.1em'
            },
            type: 'spider',
            formatter: (v) => {
                return v + '%'
            }
        },
        legend: {
            visible: true,
            offsetX: 0
        },
    };

    return <Col span={24} style={{marginTop: '40px'}}>
        <div style={{ width: '95%', margin: 'auto' }}>
            <div className="country-data-title">The gender based distribution of the COVID-19 confirmed
                cases
            </div>
            <LastUpdate updated={updatedAt}/>
            <PieChart {...config} />
        </div>
    </Col>
};

export default GenderChart;
