import React from 'react';
import {Col, Row} from "antd";
import PatientChart from "../../components/PatientChart/PatientChart";
import AgeChart from "../../components/AgeChart/AgeChart";
import GenderChart from "../../components/GenderChart/GenderChart";

const ChartPanel = ({patientChartData, ageChartData, patientDataUpdatedAt, ageDataUpdatedAt, genderChartData}) => {

    return (
        <Col xs={{span: 24}} sm={{span: 24}} md={{span: 15}}>
            <Row>
                <PatientChart data={patientChartData} updatedAt={patientDataUpdatedAt}/>
                <Col span={24}>
                    <Row>
                        <Col xs={{span: 24}} sm={{span: 24}} md={{span: 12}}>
                            <AgeChart data={ageChartData} updatedAt={ageDataUpdatedAt}/>
                        </Col>
                        <Col xs={{span: 24}} sm={{span: 24}} md={{span: 12}}>
                            <GenderChart chartData={genderChartData} updatedAt={ageDataUpdatedAt}/>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Col>
    )
};

export default ChartPanel;
