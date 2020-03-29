import React from "react";
import { AreaChart } from "@opd/g2plot-react";
import LastUpdate from "../LastUpdate/LastUpdate";
import { Col } from "antd";

const ConfirmedHistogram = ({patientChartData, updatedAt}) => {
    const config = {
        title: {
            visible: false
        },
        data: patientChartData,
        meta: {
            count: {
                alias: "found"
            }
        },
        responsive: true,
        xField: "date",
        yField: "count",
        stackField: "count",
        color: ["#82d1de"],
        areaStyle: {
            fillOpacity: 0.7,
        },
        legend: {
            visible: false
        },
        xAxis: {
            tickCount: 5
        }
    };

    return <Col span={24} className="chart-grid">
        <div className="country-data-title">The daily identified COVID-19 confirmed cases
        </div>
        <LastUpdate updated={updatedAt}/>
        <AreaChart {...config} />
    </Col>;
}


export default ConfirmedHistogram;
