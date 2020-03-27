import React from "react";
import { ColumnChart } from "@opd/g2plot-react";
import { Col } from "antd";
import LastUpdate from "../LastUpdate/LastUpdate";

const AgeChart = ({data, updatedAt}) => {

    const config = {
        title: {
            visible: false
        },
        data: [...data],
        padding: "auto",
        xField: "age",
        yField: "count",
        yAxis: {
            visible: false
        },
        xAxis:{
            title: {
                visible: false
            }
        },
        color: "#ff8f2f",
        meta: {
            age: {
                alias: "Age Range",
            },
            count: {
                formatter: (v) => {
                    if(v) {
                        return `${v}%`
                    }
                    return "";
                }
            }
        },
        label: {
            visible: true,
            style: {
                fill: "#0D0E68",
                fontSize: 12,
                fontWeight: 600,
                opacity: 0.6
            },
        },
        tooltip: {
            visible: false
        }
    };

    return (
        <Col span={24} className="chart-grid">
            <div className="country-data-title">The age based distribution of the COVID-19 confirmed
                cases
            </div>
            <LastUpdate updated={updatedAt}/>
            <ColumnChart {...config}/>
        </Col>
    );
};

export default AgeChart;
