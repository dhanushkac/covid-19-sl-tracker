import React from 'react';
import {Area, AreaChart, CartesianGrid, Tooltip, XAxis, YAxis} from "recharts";
import {Typography} from "antd";

const {Title} = Typography;

const PatientChart = ({chartData, width}) => {
    return <div style={{marginTop: '40px'}}>
        <Title level={2}>The Distribution of the COVID-19 confirmed
            cases</Title>
        <AreaChart width={width - 100} height={400} data={chartData}
                   margin={{top: 10, right: 30, left: 0, bottom: 0}}>
            <defs>
                <linearGradient id="confirmed" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#357ae8" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#357ae8" stopOpacity={0}/>
                </linearGradient>
            </defs>
            <XAxis dataKey="date"/>
            <YAxis/>
            <CartesianGrid strokeDasharray="3 3"/>
            <Tooltip/>
            <Area type="monotone" dataKey="confirmed" stroke="#8884d8" fillOpacity={1}
                  fill="url(#confirmed)"/>
        </AreaChart>
    </div>;
};

export default PatientChart;
