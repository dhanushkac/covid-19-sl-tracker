import React from 'react';
import {Typography} from "antd";

const {Text} = Typography;

const TreatmentCount = ({cumulative, treatment, type}) => {
    return <div style={{marginBottom: '20px'}}>
        <span className="cumulative-local">{cumulative}</span>
        <div>
            <Text type="secondary" className="cumulative-local-text">{type} Treated</Text>
        </div>
        { treatment !== "0" && <Text type="secondary" className="treatment-local">{treatment} on treatment or
            observation</Text> }
    </div>;
};

export default TreatmentCount;
