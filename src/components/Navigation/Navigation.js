import React from "react";
import { BackTop, Col, Layout, Radio, Row, Typography, Grid } from "antd";

import HomeIcon from "../../resources/virus.svg";

const { Header } = Layout;
const { Title } = Typography;
const { useBreakpoint } = Grid;

const Navigation = () => {

  const onChange = e => {
    console.log(e);
  };

  const screens = useBreakpoint();
  const isMobile = !screens.md && screens.xs;

  return <>
    <BackTop/>
    <Header>
      <Row style={{ width: '100%' }}>
        <Col xs={{ span: 12 }} sm={{ span: 12 }} md={{ span: 16 }}
             lg={{ span: 12 }} xl={{ span: 12 }} style={{ display: 'flex', alignItems: 'center' }}>
          <img src={HomeIcon} alt="" width={50}/>
          {!isMobile && <Title level={4} className="logo">COVID-19 Sri Lanka Tracker</Title>}
        </Col>
        <Col xs={{ span: 12 }} sm={{ span: 12 }} md={{ span: 8 }}
             lg={{ span: 12 }} xl={{ span: 12 }} style={{ textAlign: 'right' }}>
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
