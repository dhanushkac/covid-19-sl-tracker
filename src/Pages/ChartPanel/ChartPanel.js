import React from "react";
import { Col, Row } from "antd";
import AgeChart from "../../components/AgeChart/AgeChart";
import ConfirmedHistogram from "../../components/ConfirmedHistogram/ConfirmedHistogram";

const ChartPanel = ({ageChartData, ageDataUpdatedAt, patientDataUpdatedAt, patientChartData}) => {

    return (
        <React.Fragment>
            <Col span="24">
                <Row justify="space-between" gutter={[32, 16]}>
                    <Col xs={{span: 24}} sm={{span: 24}} md={{span: 24}} lg={{span: 12}} xl={{span: 12}}>
                        <AgeChart data={ageChartData} updatedAt={ageDataUpdatedAt}/>
                    </Col>
                    <Col xs={{span: 24}} sm={{span: 24}} md={{span: 24}} lg={{span: 12}} xl={{span: 12}}
                         style={{display: "flex"}}>
                        <ConfirmedHistogram patientChartData={patientChartData} updatedAt={patientDataUpdatedAt}/>
                    </Col>
                </Row>
            </Col>
        </React.Fragment>
    )
};

export default ChartPanel;
