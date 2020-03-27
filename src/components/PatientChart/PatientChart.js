import React from "react";
import { LineChart, StackedBarChart } from "@opd/g2plot-react";
import LastUpdate from "../LastUpdate/LastUpdate";
import { Checkbox, Col, Radio, Row } from "antd";
import "./PatientChart.css";

const PatientChart = ({data, updatedAt}) => {

    const onChange = data.onChange;
    const chartConf = data.config;
    const countries = data.countries;
    const selectedCountries =
        countries[1].length > 0 ? countries[1][0] : countries[0];
    const filteredData = [];
    chartConf.chartData.forEach(element => {
        if(selectedCountries.indexOf(element.country) >= 0) {
            filteredData.push(element);
        }
    });

    const lineChartData = {
        data: [...chartConf.chartData]
    };

    const barChartData = {
        data: [...filteredData]
    };

    return (
        <Col span={24} className="chart-grid">
            <div className="country-data-title">
                The daily distribution of the COVID-19 confirmed cases
            </div>
            <LastUpdate updated={updatedAt}/>
            <div className="action">
                <Radio.Group
                    style={{textAlign: "center", marginTop: "30px"}}
                    onChange={onChange[0]} defaultValue={false}
                    buttonStyle="solid" size="large">
                    <Radio.Button value={false}>Sri Lanka</Radio.Button>
                    <Radio.Button value={true}> &nbsp; Asia &nbsp;</Radio.Button>
                </Radio.Group>
            </div>
            {chartConf.lineChart ? (
                <LineChart {...lineChartData} {...chartConf} />
            ) : (
                <React.Fragment>
                    <Checkbox.Group style={{width: "100%", marginBottom: "40px"}} onChange={onChange[1]}>
                        <Row justify="start">
                            <Col xs={12} sm={12} md={8} lg={6} xl={4}>
                                <Checkbox value={"China"}>China</Checkbox>
                            </Col>
                            <Col xs={12} sm={12} md={8} lg={6} xl={4}>
                                <Checkbox value={"Nepal"}>Nepal</Checkbox>
                            </Col>
                            <Col xs={12} sm={12} md={8} lg={6} xl={4}>
                                <Checkbox value={"Bangladesh"}>Bangladesh</Checkbox>
                            </Col>
                            <Col xs={12} sm={12} md={8} lg={6} xl={4}>
                                <Checkbox value={"Afghanistan"}>Afghanistan</Checkbox>
                            </Col>
                            <Col xs={12} sm={12} md={8} lg={6} xl={4}>
                                <Checkbox value={"Bhutan"}>Bhutan</Checkbox>
                            </Col>
                            <Col xs={12} sm={12} md={8} lg={6} xl={4}>
                                <Checkbox value={"Indonesia"}>Indonesia</Checkbox>
                            </Col>
                            <Col xs={12} sm={12} md={8} lg={6} xl={4}>
                                <Checkbox value={"Philippines"}>Philippines</Checkbox>
                            </Col>
                            <Col xs={12} sm={12} md={8} lg={6} xl={4}>
                                <Checkbox value={"Maldives"}>Maldives</Checkbox>
                            </Col>
                            <Col xs={12} sm={12} md={8} lg={6} xl={4}>
                                <Checkbox value={"Thailand"}>Thailand</Checkbox>
                            </Col>
                            <Col xs={12} sm={12} md={8} lg={6} xl={4}>
                                <Checkbox value={"Vietnam"}>Vietnam</Checkbox>
                            </Col>
                        </Row>
                    </Checkbox.Group>
                    <StackedBarChart {...barChartData} {...chartConf} />
                </React.Fragment>
            )}
        </Col>
    );
};

export default PatientChart;
