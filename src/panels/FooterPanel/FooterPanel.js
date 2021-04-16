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
        <Col xs={22} sm={11} md={{ span: 12 }} lg={{ span: 11 }} xl={{ span: 8, offset: 1 }}>
          <div className="important-contacts">
            <Title>Other Important Contacts</Title>
          </div>
          <ContactPanel/>
        </Col>
        <Col xs={22} sm={11} md={{ span: 12 }} lg={{ span: 11 }} xl={{ span: 6 }}>
          <TwitterWidget/>
        </Col>
        <Col xs={22} sm={22} md={{ span: 22 }} lg={{ span: 22 }} xl={{ span: 9 }}>
          <CreditPanel/>
        </Col>
      </Row>
  );
};

export default FooterPanel;
