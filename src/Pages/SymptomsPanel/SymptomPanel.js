import React from "react";
import { Col, Row, Typography } from "antd";

const {Title, Text} = Typography;

const SymptomPanel = () => {
    const title = <Title>Main Symptoms</Title>;
    return (
        <div>
            {title}
            <Text>These are the most common symptoms of COVID-19. Some people become infected but don’t develop
                any symptoms and don't feel unwell. Most people (about 80%) recover from the disease without
                needing special treatment.</Text>
            <div>
                <Row>
                    <Col style={{textAlign: "center", marginTop: "30px"}} xs={{span: 16, offset: 4}}
                         sm={{span: 24}} md={{span: 7, offset: 1}}
                         lg={{span: 6}}>
                        <img src="http://hpb.health.gov.lk/media/feature/1.png" alt="" style={{width: "75%"}}/>
                        <Title level={3}>Fever</Title>
                    </Col>
                    <Col style={{textAlign: "center", marginTop: "30px"}} xs={{span: 16, offset: 4}}
                         sm={{span: 24}} md={{span: 7, offset: 1}}
                         lg={{span: 6}}>
                        <img src="http://hpb.health.gov.lk/media/feature/2.png" alt="" style={{width: "75%"}}/>
                        <Title level={3}>Cough and sneezes</Title>
                    </Col>
                    <Col style={{textAlign: "center", marginTop: "30px"}} xs={{span: 16, offset: 4}}
                         sm={{span: 24}} md={{span: 7, offset: 1}}
                         lg={{span: 6}}>
                        <img src="http://hpb.health.gov.lk/media/feature/3.png" alt="" style={{width: "75%"}}/>
                        <Title level={3}>Sore throat</Title>
                    </Col>
                    <Col style={{textAlign: "center", marginTop: "30px"}} xs={{span: 16, offset: 4}}
                         sm={{span: 24}} md={{span: 7, offset: 1}}
                         lg={{span: 6}}>
                        <img src="http://hpb.health.gov.lk/media/feature/4.png" alt="" style={{width: "75%"}}/>
                        <Title level={3}>Sneezing and runny nose</Title>
                    </Col>
                    <Col style={{textAlign: "center", marginTop: "30px"}} xs={{span: 16, offset: 4}}
                         sm={{span: 24}} md={{span: 7, offset: 1}}
                         lg={{span: 6}}>
                        <img src="http://hpb.health.gov.lk/media/feature/9.png" alt="" style={{width: "75%"}}/>
                        <Title level={3}>Difficulty in breathing</Title>
                    </Col>
                </Row>
            </div>

        </div>
    );
};

export default SymptomPanel;
