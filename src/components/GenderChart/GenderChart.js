import React from "react";
import { PieChart } from "@opd/g2plot-react";
import LastUpdate from "../LastUpdate/LastUpdate";
import { Col } from "antd";
import useScreenDimensions from "../../utils/useScreenDimensions";

const GenderChart = ({chartData, updatedAt}) => {

    const [dimension] = useScreenDimensions();

    const config = {
        forceFit: true,
        title: {
            visible: false
        },
        description: {
            visible: false,
            text: ""
        },
        radius: dimension.width > 450 ? 1 : 0.7,
        data: chartData,
        responsive: true,
        yField: "type",
        angleField: "value",
        colorField: "type",
        height: 300,
        label: {
            visible: true,
            type: "spider",
            formatter: (v) => {
                return v + "%"
            }
        },
        legend: {
            visible: true,
            position: "bottom",
        },
    };

    return <Col span={24} className="chart-grid">
        <div>
            <div className="country-data-title">The gender based distribution of the COVID-19 confirmed
                cases
            </div>
            <div style={{ color: "#f68585", fontSize: "1.2em !important"}}>This chart no longer updates due to the termination of the source the Epidemiology Unit.</div>
            <LastUpdate updated={updatedAt}/>
            <PieChart {...config} />
        </div>
    </Col>
};

export default GenderChart;
