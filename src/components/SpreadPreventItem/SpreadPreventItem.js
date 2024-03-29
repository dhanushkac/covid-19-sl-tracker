import React from "react";
import { Col, Row, Typography } from "antd";

const { Title, Text } = Typography;

const style = {
  marginTop: "20px"
};

const SpreadPreventItem = ({ title, text, image }) => {
  return (
    <Row style={style} gutter={[32, 16]} justify="space-around">
      <Col xs={{ span: 12 }} sm={{ span: 10 }} md={{ span: 6 }} lg={{ span: 8 }} xl={{ span: 5 }}
           style={{ textAlign: "center" }}>
        <img src={image} alt="" style={{ width: "80%", marginBottom: "20px" }}/>
      </Col>
      <Col sm={{ span: 24 }} xs={{ span: 24 }} md={{ span: 18 }} lg={{ span: 16 }} xl={{ span: 19 }}
           style={{ marginTop: '15px' }}>
        <Title level={4}>{title}</Title>
        <Text>{text}</Text>
      </Col>
    </Row>
  );
};

export default SpreadPreventItem;
