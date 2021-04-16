import React from "react";
import { Row } from "antd";

import QuestionsAnswers from "../../components/QuestionsAnswers";
import MessageList from "../../components/MessageList";


const AboutPanel = () => {
  return <Row gutter={16} style={{ marginTop: '20px' }}>
    <QuestionsAnswers/>
    <MessageList/>
  </Row>
}

export default AboutPanel;
