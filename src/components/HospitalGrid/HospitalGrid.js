import React, { useState } from "react";
import { Card, Col, Pagination, Row, Tooltip, Typography } from "antd";
import { formatNumber } from "../../utils/Numbers";
import TreatmentCount from "../TreatmentCount/TreatmentCount";

const {Text} = Typography;

const HospitalGrid = ({data}) => {

    const [index, setIndex] = useState(1);
    const pageSize = 4;

    const onchange = (val) => {
        setIndex(val);
    };

    const displayData = [...data].slice((index - 1) * pageSize, index * pageSize);

    return (
        <Col xs={{span: 24}} sm={{span: 24}} md={{span: 24}} lg={{span: 24}} xl={{span: 20}} style={{marginTop: "25px"}}>
            <Pagination defaultCurrent={1} total={17} pageSize={pageSize} onChange={onchange}
                        style={{marginBottom: "10px"}}/>
            <Row gutter={[32, 16]}>
                {displayData && displayData.map(item => {
                    const name = (item.hospital.name).replace(/^TH/g, "Teaching Hospital");
                    const titleNode = <Tooltip placement="bottom" title={name}>
                        <Text>{name}</Text>
                    </Tooltip>;

                    const cumulativeLocal = formatNumber(item.cumulative_local);
                    const treatmentLocal = formatNumber(item.treatment_local);
                    const cumulativeForeign = formatNumber(item.cumulative_foreign);
                    const treatmentForeign = formatNumber(item.treatment_foreign);

                    return <Col key={item.hospital_id} xs={{span: 24}} sm={{span: 12}} md={{span: 8}} lg={{span: 8}} xl={{span: 6}}
                                style={{marginBottom: "20px"}}>
                        <Card title={titleNode}>
                            <TreatmentCount type="Sri Lankans" cumulative={cumulativeLocal}
                                            treatment={treatmentLocal}/>
                            <TreatmentCount type="Foreigners" cumulative={cumulativeForeign}
                                            treatment={treatmentForeign}/>
                        </Card>
                    </Col>;
                })}
            </Row>
        </Col>
    );
};

export default HospitalGrid;
