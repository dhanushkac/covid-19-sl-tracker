import React from "react";
import { BackTop, Layout, Typography } from "antd";

import HomeIcon from "../../resources/virus.svg";

const { Header } = Layout;
const { Title } = Typography;

const Navigation = () => {
  return <>
    <BackTop/>
    <Header>
      <img src={HomeIcon} alt="" width={50}/>
      <Title level={3} className="logo">COVID-19 Sri Lanka Tracker</Title>
    </Header>
  </>
}

export default Navigation;
