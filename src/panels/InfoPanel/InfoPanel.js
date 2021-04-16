import React from "react";
import { Col, Row } from "antd";

import SpreadPreventPanel from "../SpreadPreventPanel/SpreadPreventPanel";
import SymptomPanel from "../SymptomsPanel/SymptomPanel";

const InfoPanel = () => {
  return (
    <Row className="panel-page" justify="space-between" gutter={[32, 16]}>
      <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 24 }} lg={{ span: 12 }} xl={{ span: 10 }}>
        <SymptomPanel/>
      </Col>
      <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 24 }} lg={{ span: 12 }} xl={{ span: 13, offset: 1 }}>
        <SpreadPreventPanel/>
      </Col>
    </Row>
  );
};

export default InfoPanel;
