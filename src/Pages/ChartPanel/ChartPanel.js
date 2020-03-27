import React from "react";
import { Col, Row } from "antd";
import PatientChart from "../../components/PatientChart/PatientChart";
import AgeChart from "../../components/AgeChart/AgeChart";
import GenderChart from "../../components/GenderChart/GenderChart";

const ChartPanel = ({patientChartData, ageChartData, patientDataUpdatedAt, ageDataUpdatedAt, genderChartData}) => {

    return (
        <Col xs={{span: 24}} sm={{span: 24}} md={{span: 24}} lg={{span: 24}} xl={{span: 15}}>
            <Row>
                <PatientChart data={patientChartData} updatedAt={patientDataUpdatedAt}/>
                <Col span={24}>
                    <Row justify="space-around">
                        <Col xs={{span: 24}} sm={{span: 24}} md={{span: 24}} lg={{span: 11}} xl={{span: 11}}>
                            <AgeChart data={ageChartData} updatedAt={ageDataUpdatedAt}/>
                        </Col>
                        <Col xs={{span: 24}} sm={{span: 24}} md={{span: 24}} lg={{span: 11}} xl={{span: 11}}>
                            <GenderChart chartData={genderChartData} updatedAt={ageDataUpdatedAt}/>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Col>
    )
};

export default ChartPanel;
