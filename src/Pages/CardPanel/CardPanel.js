import React from "react";
import { Col, Radio, Row, Typography } from "antd";
import Card from "../../components/Card/Card";
import { formatNumber } from "../../utils/Numbers";
import "../../components/SubCard/CardPanel.css";
import moment from "moment";
import SubCard from "../../components/SubCard/SubCard";

const {Title} = Typography;

const CardPanel = ({lastUpdate, cardData, onChange, isLocal}) => {
    const formattedDate = moment(lastUpdate, "DD-MM-YYYY hh:mm A", true).format("YYYY MMMM DD hh:mm A");
    const quarantineInfo = cardData.other.foreigners + " foreigners included";
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
            {isLocal && <Row justify="space-around">
                <SubCard title="Patients currently in hospitals" infoData={cardData.inHospital}
                         additional="Suspected or Confirmed"/>
//                 <SubCard title="Confirmed patients in quarantine centers" infoData={cardData.other.quarantine_centers}
//                          additional={quarantineInfo}/>
//                 <SubCard title="Countries or Territories affected" infoData={cardData.countries}/>
            </Row>}
        </Col>
    );
};

export default CardPanel;
