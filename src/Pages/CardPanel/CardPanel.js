import React from "react";
import { Col, Radio, Row, Typography } from "antd";
import Card from "../../components/Card/Card";
import { formatNumber } from "../../utils/Numbers";
import Message from "../../components/Message/Message";
import "./CardPanel.css";
import moment from "moment";

const {Title} = Typography;

const CardPanel = ({lastUpdate, cardData, onChange, isLocal}) => {
    const formattedDate = moment(lastUpdate, "DD-MM-YYYY hh:mm A", true).format("YYYY MMMM DD hh:mm A");
    return (
        <Col xs={{span: 24, offset: 0}} sm={{span: 24}} md={{span: 24}}
             lg={{span: 24}} xl={{span: 14}}>
            <div className="last-sync" style={{fontWeight: "600"}}>Last updated</div>
            <Title className="last-sync" level={2}>
                {formattedDate}
            </Title>
            <div className="action">
                <Radio.Group style={{textAlign: "center"}} onChange={onChange} defaultValue={true}
                             buttonStyle="solid" size="large">
                    <Radio.Button value={true}>Local</Radio.Button>
                    <Radio.Button value={false}>Global</Radio.Button>
                </Radio.Group>
            </div>
            <Row>
                {
                    cardData.main.map(item => {
                        const value = formatNumber(item.value);
                        return <Col key={item.style} xs={{span: 24, offset: 0}} sm={{span: 24}}
                                    md={{span: 8, offset: 0}}>
                            <Card title={item.text} value={value}
                                  newStatus={item.newText} icon={item.icon} style={item.style}/>
                        </Col>
                    })
                }
            </Row>
            { isLocal && <Row justify="space-around">
                <Col xs={{span: 24}} sm={{span: 22}} md={{span: 8}} lg={{span: 8, offset: 0}}>
                    <div style={{width: "90%", margin: "auto"}}>
                        <Message type="light" style={{fontsize: "1em"}}>
                            <div className="card-info">
                                <div className="card-info-title">
                                    Patients currently in hospitals
                                </div>
                                <div className="card-info-data">
                                    {cardData.inHospital}
                                </div>
                                <div style={{
                                    color: "grey",
                                    height: "25px"
                                }}>Suspected or Confirmed
                                </div>
                            </div>
                        </Message>
                    </div>
                </Col>
                <Col xs={{span: 24}} sm={{span: 22}} md={{span: 8}} lg={{span: 8, offset: 0}}>
                    <div style={{width: "90%", margin: "auto"}}>
                        <Message type="light" style={{fontsize: "1em"}}>
                            <div className="card-info">
                                <div className="card-info-title">
                                    Confirmed patients in quarantine centers
                                </div>
                                <div>
                                    <div className="card-info-data">
                                        {cardData.other.quarantine_centers}
                                    </div>
                                    <div style={{
                                        color: "grey",
                                        height: "25px"
                                    }}>{cardData.other.foreigners} foreigners included
                                    </div>
                                </div>
                            </div>
                        </Message>
                    </div>
                </Col>
                <Col xs={{span: 24}} sm={{span: 22}} md={{span: 8}} lg={{span: 8, offset: 0}}>
                    <div style={{width: "90%", margin: "auto"}}>
                        <Message type="light" style={{fontsize: "1em"}}>
                            <div className="card-info">
                                <div className="card-info-title">
                                    Countries or Territories  affected
                                </div>
                                <div className="card-info-data">
                                    {cardData.countries}
                                </div>
                                <div style={{
                                    color: "grey",
                                    height: "25px"
                                }}/>
                            </div>
                        </Message>
                    </div>
                </Col>
            </Row>}
        </Col>
    );
};

export default CardPanel;
