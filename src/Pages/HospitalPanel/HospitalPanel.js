import React from 'react';
import {Card, Col, Row, Typography} from 'antd';
import {TwitterTimelineEmbed} from "react-twitter-embed";
import './HospitalPanel.css';

const {Title, Text} = Typography;

const HospitalDataGrid = ({data}) => {

    return <div style={{margin: 'auto', marginTop: '25px'}}>
        <Title level={2}>Current status of the hospitals</Title>
        <Row>
            <Col xs={{span: 24}} md={{span: 18}} style={{marginTop: '25px'}}>
                <Row>
                    {data.map(item => {
                        return <Col key={item.hospital_id} xs={{span: 24}} md={{span: 5}}
                                    style={{marginRight: '20px', marginBottom: '20px'}}>
                            <Card title={item.hospital.name}>
                                <div>
                                    <span className="cumulative-local">{item.cumulative_local}</span>
                                    <Text type="secondary" className="treatment-local">{item.treatment_local} new
                                        cases</Text>
                                    <div>
                                        <Text type="secondary" className="cumulative-local-text">Total locals being
                                            tested</Text>
                                    </div>
                                </div>

                                <div>
                                    <span className="cumulative-local">{item.cumulative_foreign}</span>
                                    <Text type="secondary" className="treatment-local">{item.treatment_foreign} new
                                        cases</Text>
                                    <div>
                                        <Text type="secondary" className="cumulative-local-text">Total foreigners being
                                            tested</Text>
                                    </div>
                                </div>
                            </Card>
                        </Col>;
                    })}
                </Row>
            </Col>
            <Col xs={{span: 24}} md={{span: 4}}>
                <TwitterTimelineEmbed
                    sourceType="profile"
                    screenName="WHO"
                    options={{height: 600}}
                />
            </Col>
        </Row>
    </div>;
};

export default HospitalDataGrid;
