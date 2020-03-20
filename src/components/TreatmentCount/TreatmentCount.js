import React from 'react';
import {Typography} from "antd";

const {Text} = Typography;

const TreatmentCount = ({cumulative, treatment, type}) => {
    return <div style={{marginBottom: '20px'}}>
        <span className="cumulative-local">{cumulative}</span>
        <div>
            <Text type="secondary" className="cumulative-local-text">{type} Treated</Text>
        </div>
        <Text type="secondary">
            <div style={{height: '20px'}}>{treatment !== "0" &&
            <span className="treatment-local">{treatment} on treatment or observation</span>}</div>
        </Text>
    </div>;
};

export default TreatmentCount;
