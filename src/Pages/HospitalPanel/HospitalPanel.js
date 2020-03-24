import React from 'react';
import {Col, Row, Typography} from 'antd';
import './HospitalPanel.css';
import HospitalGrid from "../../components/HospitalGrid/HospitalGrid";
import LastUpdate from "../../components/LastUpdate/LastUpdate";
import TwitterWidget from "../../components/TwitterWidget/TwitterWidget";
import moment from "moment";

const {Title} = Typography;

const HospitalPanel = ({hospitalData, lastUpdatedAt}) => {
    const formattedDate = moment(lastUpdatedAt, 'YYYY-MM-DD hh:mm:ss', true).format('YYYY-MM-DD hh:mm A');
    return (
        <Col xs={{span: 24}} sm={{span: 24}} md={{span: 24}} style={{marginTop: '25px'}}>
            <div className="hospital-panel">
                <Title style={{marginTop: '40px', marginBottom: '0'}} level={2}>Current status of the hospitals -
                    treated or
                    observed</Title>
                <LastUpdate updated={formattedDate} style={{marginBottom: '10px'}}/>
                <Row>
                    <HospitalGrid data={hospitalData}/>
                    <TwitterWidget/>
                </Row>
            </div>
        </Col>
    );
};

export default HospitalPanel;
