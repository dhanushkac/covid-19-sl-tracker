import React from "react";
import { Col, Row, Typography } from "antd";
import "./PanelPage.css";
import ContactPanel from "../ContactPanel/ContactPanel";
import CreditPanel from "../../components/ImageCredit/CreditPanel";
import SpreadPreventPanel from "../SpreadPreventPanel/SpreadPreventPanel";
import SymptomPanel from "../SymptomsPanel/SymptomPanel";
import TwitterWidget from "../../components/TwitterWidget/TwitterWidget";
const {Title} = Typography;

const PanelPage = () => {
    return (
        <div>
            <Row className="panel-page" justify="space-between" gutter={[32, 16]}>
                <Col xs={{span: 24}} sm={{span: 24}} md={{span: 24}} lg={{span: 12}} xl={{span: 10}}>
                    <SymptomPanel/>
                </Col>
                <Col xs={{span: 24}} sm={{span: 24}} md={{span: 24}} lg={{span: 12}} xl={{span: 13, offset: 1}}>
                    <SpreadPreventPanel/>
                </Col>
            </Row>
            <Row justify="space-around" style={{ marginTop: "40px" }}>
                <Col xs={22} sm={11} md={{span: 12}} lg={{span: 11}} xl={{span: 8, offset: 1}}>
                    <div className="important-contacts">
                        <Title>Other Important Contacts</Title>
                    </div>
                    <ContactPanel/>
                </Col>
                <Col xs={22} sm={11} md={{span: 12}} lg={{span: 11}} xl={{span: 6}} >
                    <TwitterWidget/>
                </Col>
                <Col xs={22} sm={22} md={{span: 22}} lg={{span: 22}} xl={{span: 9}}>
                    <CreditPanel/>
                </Col>
            </Row>
        </div>
    );
};

export default PanelPage;
