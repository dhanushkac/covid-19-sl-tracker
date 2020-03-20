import React, {useState} from 'react';
import {Col, Pagination, Row, Typography} from 'antd';
import {TwitterTimelineEmbed} from "react-twitter-embed";
import './HospitalPanel.css';
import Message from "../../components/Message/Message";
import HospitalGrid from "../../components/HospitalGrid/HospitalGrid";

const {Title} = Typography;

const HospitalPanel = ({hospitalData, admitted}) => {

    const [index, setIndex] = useState(1);
    const pageSize = 4;

    const onchange = (val) => {
        setIndex(val);
    };

    const displayData = [...hospitalData].slice((index - 1) * pageSize, index * pageSize);

    return <Col>
        <div className="hospital-panel">
            <Title level={2}>Current status of the hospitals - treated or observed</Title>
            <Row>
                <Message admitted={admitted}/>
            </Row>
            <Row>
                <Pagination defaultCurrent={1} total={17} pageSize={pageSize} onChange={onchange}/>
            </Row>
            <Row>
                <Col xs={{span: 24}} sm={{span: 24}} md={{span: 20}} style={{marginTop: '25px'}}>
                    <Row>
                        <HospitalGrid data={displayData}/>
                    </Row>
                </Col>
                <Col xs={{span: 24}} md={{span: 4}}>
                    <div style={{border: '1px solid #e6e6e6'}}>
                        <TwitterTimelineEmbed
                            sourceType="profile"
                            screenName="WHO"
                            options={{height: 400}}
                        />
                    </div>
                </Col>
            </Row>
        </div>
    </Col>;
};

export default HospitalPanel;
