import React from "react";
import { Col, Radio, Row, Typography } from "antd";
import moment from "moment";

import StatCard from "../../components/StatCard";
import { formatNumber } from "../../utils/Numbers";

import './HeaderPanel.css'

const { Title } = Typography;

const HeaderPanel = ({ lastUpdate, cardData, onChange }) => {
  const formattedDate = moment(lastUpdate, "DD-MM-YYYY hh:mm A", true).format("YYYY MMMM DD hh:mm A");
  return (
    <Row style={{ marginTop: '36px' }}>
      <Col xs={{ span: 24, offset: 0 }} sm={{ span: 24 }} md={{ span: 24 }}
           lg={{ span: 24 }} xl={{ span: 24 }}>
        <div className="last-sync" style={{ fontWeight: "600" }}>Last updated</div>
        <Title className="last-sync" level={4}>
          {formattedDate}
        </Title>
        <div className="action">
          <Radio.Group style={{ textAlign: "center" }} onChange={onChange} defaultValue={true}
                       buttonStyle="solid" size="large">
            <Radio.Button value={true}>Local</Radio.Button>
            <Radio.Button value={false}>Global</Radio.Button>
          </Radio.Group>
        </div>
        <Row justify="center">
          {
            cardData.map(item => {
              const value = formatNumber(item.value);
              return <Col key={item.text} xs={{ span: 24, offset: 0 }} sm={{ span: 24 }}
                          md={{ span: 8, offset: 0 }} lg={{ span: 8, offset: 0 }} xl={{ span: 4, offset: 0 }}>
                <StatCard title={item.text} value={value}
                          newStatus={item.newText} icon={item.icon} style={item.style}/>
              </Col>
            })
          }
        </Row>
      </Col>
    </Row>
  );
};

export default HeaderPanel;
