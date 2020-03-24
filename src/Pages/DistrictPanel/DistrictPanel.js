import React from "react";
import { Col } from "antd";
import DistrictGrid from "../../components/DistrictGrid/DistrictGrid";
import "./DistrictPanel.css"
import LastUpdate from "../../components/LastUpdate/LastUpdate";

const DistrictPanel = ({districtData, updatedDate}) => {

    return <Col span={24}>
        <div style={{width: "100%", marginTop: "40px"}}>
            <div><span
                className="country-data-title">The district based distribution of the COVID-19 confirmed cases</span>
            </div>
            <LastUpdate updated={updatedDate}/>
        </div>
        <Col span={24}>
            <DistrictGrid data={districtData}/>
        </Col>
    </Col>;
};

export default DistrictPanel;
