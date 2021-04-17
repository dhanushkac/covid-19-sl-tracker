import React from "react";
import { Col, Row, Typography } from "antd";

const { Title, Text } = Typography;

const SymptomPanel = () => {
  return (
    <div style={{ marginTop: '36px' }}>
      <Title level={3}>Main Symptoms</Title>
      <Text>These are the most common symptoms of COVID-19. Some people become infected but don’t develop
        any symptoms and don't feel unwell. Most people (about 80%) recover from the disease without
        needing special treatment.</Text>
      <Row style={{ marginTop: '36px' }}>
        <Col style={{ textAlign: "center", marginTop: "30px" }} xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}
             lg={{ span: 8 }} xl={{ span: 8 }}>
          <img src="http://hpb.health.gov.lk/media/feature/1.png" alt=""/>
          <Title level={4}>Fever</Title>
        </Col>
        <Col style={{ textAlign: "center", marginTop: "30px" }} xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}
             lg={{ span: 8 }} xl={{ span: 8 }}>
          <img src="http://hpb.health.gov.lk/media/feature/2.png" alt=""/>
          <Title level={4}>Cough and sneezes</Title>
        </Col>
        <Col style={{ textAlign: "center", marginTop: "30px" }} xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}
             lg={{ span: 8 }} xl={{ span: 8 }}>
          <img src="http://hpb.health.gov.lk/media/feature/3.png" alt=""/>
          <Title level={4}>Sore throat</Title>
        </Col>
        <Col style={{ textAlign: "center", marginTop: "30px" }} xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}
             lg={{ span: 8 }} xl={{ span: 8 }}>
          <img src="http://hpb.health.gov.lk/media/feature/4.png" alt=""/>
          <Title level={4}>Sneezing and runny nose</Title>
        </Col>
        <Col style={{ textAlign: "center", marginTop: "30px" }} xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}
             lg={{ span: 8 }} xl={{ span: 8 }}>
          <img src="http://hpb.health.gov.lk/media/feature/9.png" alt=""/>
          <Title level={4}>Difficulty in breathing</Title>
        </Col>
      </Row>
    </div>
  );
};

export default SymptomPanel;
