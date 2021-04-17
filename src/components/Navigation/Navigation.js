import React from "react";
import { BackTop, Col, Layout, Radio, Row, Typography } from "antd";

import HomeIcon from "../../resources/virus.svg";

const { Header } = Layout;
const { Title } = Typography;

const Navigation = () => {

  const onChange = e => {
    console.log(e);
  };

  return <>
    <BackTop/>
    <Header>
      <Row style={{ width: '100%' }}>
        <Col span={12} style={{ display: 'flex', alignItems: 'center' }}>
          <img src={HomeIcon} alt="" width={50}/>
          <Title level={3} className="logo">COVID-19 Sri Lanka Tracker</Title>
        </Col>
        <Col span={12} style={{ textAlign: 'right' }}>
          <Radio.Group
            onChange={onChange}
            defaultValue={'en'}
            optionType="button"
            size={'small'}
            buttonStyle="solid">
            <Radio.Button value={'en'}>En</Radio.Button>
            <Radio.Button value={'si'} disabled={true}>සිං</Radio.Button>
            <Radio.Button value={'ta'} disabled={true}>தமி</Radio.Button>
          </Radio.Group>
        </Col>
      </Row>
    </Header>
  </>
}

export default Navigation;
