import React from "react";
import { Col, Row, Typography } from "antd";
import "./HospitalPanel.css";
import HospitalGrid from "../../components/HospitalGrid/HospitalGrid";
import LastUpdate from "../../components/LastUpdate/LastUpdate";
import TwitterWidget from "../../components/TwitterWidget/TwitterWidget";

const {Title} = Typography;

const HospitalPanel = ({hospitalData, lastUpdatedAt}) => {

    return <Col xs={{span: 24}} sm={{span: 24}} md={{span: 24}} style={{marginTop: "25px"}}>
        <div className="hospital-panel">
            <Title style={{marginTop: "40px", marginBottom: "0"}} level={2}>Current status of the hospitals -
                treated or observed</Title>
            <LastUpdate updated={lastUpdatedAt} style={{marginBottom: "10px"}}/>
            <Row>
                <HospitalGrid data={hospitalData}/>
            </Row>
        </div>
    </Col>;
};

export default HospitalPanel;
