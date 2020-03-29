import React from "react";
import { AreaChart } from "@opd/g2plot-react";
import LastUpdate from "../LastUpdate/LastUpdate";
import { Col } from "antd";

const ConfirmedHistogram = ({patientChartData, updatedAt}) => {
    const data = [];

    if(patientChartData) {
        for(let i = 0; i < patientChartData.length - 1; i++) {
            data.push({
                date: patientChartData[i].date,
                confirmed: patientChartData[i].confirmed - patientChartData[i + 1].confirmed
            });
        }
    }

    const config = {
        title: {
            visible: false
        },
        data,
        meta: {
            confirmed: {
                alias:"found"
            }
        },
        responsive: true,
        xField: "date",
        yField: "confirmed",
        stackField: "confirmed",
        color: ["#82d1de"],
        areaStyle: {
            fillOpacity: 0.7,
        },
        legend: {
            visible: false
        },
    };

    return <Col span={24} className="chart-grid">
        <div className="country-data-title">The daily identified COVID-19 confirmed cases
        </div>
        <LastUpdate updated={updatedAt}/>
        <AreaChart {...config} />
    </Col>;
}


export default ConfirmedHistogram;
