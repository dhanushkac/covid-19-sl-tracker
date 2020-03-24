import React from "react";
import { Col, Row } from "antd";
import "./PanelPage.css";
import ContactPanel from "../ContactPanel/ContactPanel";
import CreditPanel from "../../components/ImageCredit/ImageCredit";
import SpreadPreventPanel from "../SpreadPreventPanel/SpreadPreventPanel";
import SymptomPanel from "../SymptomsPanel/SymptomPanel";

const PanelPage = () => {
    return (
        <Row className="panel-page">
            <Col xs={{span: 24}} sm={{span: 24}} md={{span: 10}}>
                <SymptomPanel/>
            </Col>
            <Col xs={{span: 24}} sm={{span: 24}} md={{span: 12, offset: 1}}>
                <SpreadPreventPanel/>
                <ContactPanel/>
                <CreditPanel/>
            </Col>
        </Row>
    );
};

export default PanelPage;
