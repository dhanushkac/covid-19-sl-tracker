import React from 'react';
import {Card, Col, Tooltip, Typography} from "antd";
import {formatNumber} from "../../utils/Numbers";
import TreatmentCount from "../TreatmentCount/TreatmentCount";

const {Text} = Typography;

const HospitalGrid = ({data}) => {
    return data && data.map(item => {
        const name = (item.hospital.name).replace(/^TH/g, "Teaching Hospital");
        const titleNode = <Tooltip placement="bottom" title={name}>
            <Text>{name}</Text>
        </Tooltip>;

        const cumulativeLocal = formatNumber(item.cumulative_local);
        const treatmentLocal = formatNumber(item.treatment_local);
        const cumulativeForeign = formatNumber(item.cumulative_foreign);
        const treatmentForeign = formatNumber(item.treatment_foreign);

        return <Col key={item.hospital_id} xs={{span: 24}} sm={{span: 11}} md={{span: 5}}
                    style={{marginRight: '20px', marginBottom: '20px'}}>
            <Card title={titleNode}>
                <TreatmentCount type="Sri Lankans" cumulative={cumulativeLocal} treatment={treatmentLocal}/>
                <TreatmentCount type="Foreigners" cumulative={cumulativeForeign} treatment={treatmentForeign}/>
            </Card>
        </Col>;
    })
};

export default HospitalGrid;
