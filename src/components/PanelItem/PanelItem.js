import React from 'react';
import { Row, Col, Typography } from 'antd';

const { Title, Text } = Typography;

const style = {
    marginTop: '20px'
};

const PanelItem = ({title, text, image}) => {
    return <Row style={style}>
        <Col sm={{span: 24}} xs={{span: 24}} md={{span: 3}}>
            <div style={{ textAlign: 'center' }}>
                <img src={image} alt="" style={{ width: '80%', marginBottom: '20px' }}/>
            </div>
        </Col>
        <Col sm={{span: 24}} xs={{span: 24}} md={{span: 20}}>
            <Title level={4}>{title}</Title>
            <Text>{text}</Text>
        </Col>
    </Row>
};

export default PanelItem;
