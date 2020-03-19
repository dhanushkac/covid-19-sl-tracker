import React from 'react';
import {Card, Col, Row, Tooltip, Typography} from 'antd';
import {TwitterTimelineEmbed} from "react-twitter-embed";
import {formatNumber} from "../../utils/Numbers";
import './HospitalPanel.css';

const {Title, Text} = Typography;

const HospitalPanel = ({data}) => {

    return <div className="hospital-panel">
        <Title level={2}>Current status of the hospitals</Title>
        <Row>
            <Col xs={{span: 24}} sm={{span: 24}} md={{span: 20}} style={{marginTop: '25px'}}>
                <Row>
                    {data.map(item => {
                        const titleNode = <Tooltip placement="top" title={item.hospital.name}>
                            <Text>{item.hospital.name}</Text>
                        </Tooltip>;

                        const cumulativeLocal = formatNumber(item.cumulative_local);
                        const treatmentLocal = formatNumber(item.treatment_local);
                        const cumulativeForeign = formatNumber(item.cumulative_foreign);
                        const treatmentForeign = formatNumber(item.treatment_foreign);

                        return <Col key={item.hospital_id} xs={{span: 24}} sm={{span: 11}} md={{span: 5}}
                                    style={{marginRight: '20px', marginBottom: '20px'}}>
                            <Card title={titleNode}>
                                <div>
                                    <span className="cumulative-local">{cumulativeLocal}</span>
                                    <Text type="secondary" className="treatment-local">{treatmentLocal} new
                                        cases</Text>
                                    <div>
                                        <Text type="secondary" className="cumulative-local-text">Total locals being
                                            tested</Text>
                                    </div>
                                </div>

                                <div>
                                    <span className="cumulative-local">{cumulativeForeign}</span>
                                    <Text type="secondary" className="treatment-local">{treatmentForeign} new
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

export default HospitalPanel;
