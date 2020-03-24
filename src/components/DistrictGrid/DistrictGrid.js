import React from "react";
import { Col, Row } from "antd";
import "./DistrictGrid.css";

const DistrictGrid = ({data}) => {

    const western = [];
    const northWestern = [];
    const sabaragamuwa = [];
    const southern = [];
    const eastern = [];
    const uva = [];
    const central = [];
    const northern = [];
    const northCentral = [];


    data.forEach(value => {
        if(value.province === "Western Province") {
            western.push({...value});
        } else if(value.province === "North Western Province") {
            northWestern.push(value);
        } else if(value.province === "Sabaragamuwa Province") {
            sabaragamuwa.push(value);
        } else if(value.province === "Southern Province") {
            southern.push(value);
        } else if(value.province === "Eastern Province") {
            eastern.push(value);
        } else if(value.province === "Uva Province") {
            uva.push(value);
        } else if(value.province === "Central Province") {
            central.push(value);
        } else if(value.province === "Northern Province") {
            northern.push(value);
        } else if(value.province === "North Central Province") {
            northCentral.push(value);
        }
    });

    const provincialData = {
        "Western": western,
        "Central": central,
        "Southern": southern,
        "North Western": northWestern,
        "Sabaragamuwa": sabaragamuwa,
        "North Central": northCentral,
        "Uva": uva,
        "Eastern": eastern,
        "Northern": northern,
    };

    return (
        <div style={{marginTop: "30px"}}>
            <Row>
                {
                    Object.entries(provincialData).map(value => {
                        return <Col className="province" key={value[0]} xs={{span: 24}} sm={{span: 24}}
                                    md={{span: 8}}>
                            <div className="district-list">
                                <div className="province-title">
                                    <span>{value[0]}</span>
                                </div>
                                <Row>
                                    {value[1].map(data => <Col className="district-item" key={data.name} span={8}>
                                        <div
                                            className={`district-card ${data.patient_count === 0 ? " opacity" : ""}`}>
                                            <div className="district-name">
                                                {data.name.replace(/\b\w/, v => v.toUpperCase())}
                                            </div>
                                            <div className="district-value">
                                                <div className="district-value" level={1}>{data.patient_count}</div>
                                            </div>
                                        </div>
                                    </Col>)}
                                </Row>
                            </div>
                        </Col>
                    })
                }
            </Row>
        </div>
    );
};

export default DistrictGrid;
