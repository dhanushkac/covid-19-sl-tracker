import React from "react";
import { Col, Row, Typography } from "antd";

import HospitalGrid from "../../components/HospitalGrid";
import LastUpdate from "../../components/LastUpdate";

import "./HospitalPanel.css";

const { Title } = Typography;

const HospitalPanel = ({ hospitalData, lastUpdatedAt }) => {

  return <Row>
    <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 24 }} style={{ marginTop: "25px" }}>
      <div className="hospital-panel">
        <Title style={{ marginTop: "40px", marginBottom: "0" }} level={3}>Current status of the hospitals -
          Treated or Observed</Title>
        <LastUpdate updated={lastUpdatedAt} style={{ marginBottom: "10px" }}/>
        <Row>
          <HospitalGrid data={hospitalData}/>
        </Row>
      </div>
    </Col>
  </Row>;
};

export default HospitalPanel;
