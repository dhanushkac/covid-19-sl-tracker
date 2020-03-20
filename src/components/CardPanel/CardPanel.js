import React from 'react';
import Moment from "react-moment";
import {Col, Radio, Row, Typography} from "antd";
import Card from "../Card/Card";
import {formatNumber} from "../../utils/Numbers";

const {Title} = Typography;

const CardPanel = ({lastUpdate, cardData, onChange}) => {

    return <Col xs={{span: 24, offset: 0}} sm={{span: 14}} md={{span: 14}}
                lg={{span: 14}}>
        <div className="last-sync" style={{fontWeight: '600'}}>Last updated</div>
        <Title className="last-sync" level={2}>
            <Moment format="YYYY MMMM DD hh:mm A">{lastUpdate}</Moment>
        </Title>
        <div className="action">
            <Radio.Group style={{textAlign: 'center'}} onChange={onChange} defaultValue={true}
                         buttonStyle="solid" size="large">
                <Radio.Button value={true}>Local</Radio.Button>
                <Radio.Button value={false}>Global</Radio.Button>
            </Radio.Group>
        </div>
        <Row>
            {
                cardData.map(item => {
                    const value = formatNumber(item.value);
                    return <Col key={item.style} xs={{span: 24, offset: 0}} sm={{span: 6}}
                                md={{span: 8, offset: 0}}>
                        <Card title={item.text} value={value}
                              newStatus={item.newText} icon={item.icon} style={item.style}/>
                    </Col>
                })
            }
        </Row>
    </Col>
};

export default CardPanel;
