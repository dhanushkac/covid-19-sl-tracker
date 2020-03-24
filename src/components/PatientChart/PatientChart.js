import React from "react";
import { LineChart } from "@opd/g2plot-react";
import LastUpdate from "../LastUpdate/LastUpdate";
import { Col } from "antd";

const PatientChart = ({data, updatedAt}) => {

    const config = {
        height: 400,
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
            visible: false,
            type: "point",
        },
        style: {
            width: "100%"
        },
        point: {
            visible: true,
            size: 5,
        },
        xAxis: {
            tickCount: 10,
        },
        data,
    };

    return (
        <Col span={24} style={{marginTop: "40px"}}>
            <div className="country-data-title">The daily distribution of the COVID-19 confirmed
                cases
            </div>
            <LastUpdate updated={updatedAt}/>
            <LineChart {...config} />
        </Col>
    );
};

export default PatientChart;
