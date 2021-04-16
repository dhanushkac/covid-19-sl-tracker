import React from "react";
import { Col, Row, Typography } from "antd";
import "./FooterPanel.css";
import ContactPanel from "../ContactPanel/ContactPanel";
import CreditPanel from "../CreditPanel/CreditPanel";
import TwitterWidget from "../../components/TwitterWidget";

const { Title } = Typography;

const FooterPanel = () => {
  return (
      <Row justify="space-around" style={{ marginTop: "40px" }}>
        <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 8 }} lg={{ span: 8 }} xl={{ span: 8 }}>
          <div className="important-contacts">
            <Title>Other Important Contacts</Title>
          </div>
          <ContactPanel/>
        </Col>
        <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 8 }} lg={{ span: 8 }} xl={{ span: 8 }}>
          <TwitterWidget/>
        </Col>
        <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 8 }} lg={{ span: 8 }} xl={{ span: 8 }}>
          <CreditPanel/>
        </Col>
      </Row>
  );
};

export default FooterPanel;
