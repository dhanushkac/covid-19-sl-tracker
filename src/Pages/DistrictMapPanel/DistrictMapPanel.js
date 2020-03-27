import React, { useState } from "react";
import "./MapPanel.css";
import GoogleMapReact from "google-map-react";
import { Col, Row, Tooltip } from "antd";
import LastUpdate from "../../components/LastUpdate/LastUpdate";
import { normalizePatientData } from "../../utils/Numbers";
import useScreenDimensions from "../../utils/useScreenDimensions";

const DistrictData = ({color, index, name, value}) => {
    return index > 0 ? <Tooltip title={value} placement={"left"}>
        <div style={{
            background: "white",
            borderRadius: "10px",
            padding: `5px 10px`,
            fontSize: "1.1em",
            display: "inline-flex",
            fontWeight: "600",
            color: "#464545",
            border: "1.3px solid #333333"
        }}>
            <div style={{background: `${color}`, width: "15px", height: "15px"}}/>
            <span style={{paddingLeft: "10px"}}>{name}</span>
        </div>
    </Tooltip> : <div/>;
};

const DistrictMapPanel = ({districtData, updatedDate}) => {

    const [center] = useState({lat: 7.8731, lng: 80.7718});
    const [zoom] = useState(8);
    const [dimension] = useScreenDimensions();

    const COLORS = ["", "#ffb700", "#ff6d00", "#FF0015"];

    const patientCountsNormalized = normalizePatientData(districtData);

    const districtColors = patientCountsNormalized.map(value => COLORS[value]);

    const style = {
        background: "#ffc737",
        padding: "0px 10px",
        borderRadius: "5px",
        color: "#464646",
        marginRight: "10px"
    };

    return (
        <div className="chart-grid">
            <div><span className="country-data-title">The districts reported with the highest number of the COVID-19 confirmed cases</span>
            </div>
            <LastUpdate updated={updatedDate}/>
            <div style={{color: "grey", fontSize: "1.2em !important", marginBottom: "25px", marginTop: "10px"}}>
                Each district is coloured based on the found confirmed COVID-19 cases.
            </div>
            <div style={{height: "50px"}}>
                <Row justify="start">
                    <Col xs={{span: 12}} sm={{span: 8}} md={{span: 4}} xl={{span: 6}} span="3">
                        <span style={{marginRight: "10px"}}>
                            <span style={{
                                ...style,
                                background: "#ffc737"
                            }}/>   Low
                        </span>
                    </Col>
                    <Col xs={{span: 12}} sm={{span: 8}} md={{span: 4}} xl={{span:6}} span="4">
                        <span style={{marginRight: "10px"}}>
                            <span style={{
                                ...style,
                                background: "#ff6d00"
                            }}/> Medium
                        </span>
                    </Col>
                    <Col xs={{span: 12}} sm={{span: 8}} md={{span: 4}} xl={{span: 6}} span="3">
                        <span style={{marginRight: "10px"}}>
                            <span style={{
                                ...style,
                                background: "#FF0015"
                            }}/> High
                        </span>
                    </Col>
                </Row>
            </div>
            <div style={{
                height: dimension.width < 576 ? "500px" : "800px",
                width: "100%",
                margin: "auto",
                marginTop: "30px"
            }}>
                <GoogleMapReact
                    draggable={true}
                    bootstrapURLKeys={{key: "AIzaSyApGiESgJBGHPnwRJDThKi3L9EGrqoj7lk"}}
                    defaultCenter={center}
                    defaultZoom={dimension.width < 576 ? 7 : zoom}
                    yesIWantToUseGoogleMapApiInternals
                >
                    {districtData.map((data, i) => {
                        return <DistrictData key={data.name} lat={data.geoLocation.lat}
                                             lng={data.geoLocation.lng}
                                             index={patientCountsNormalized[i]}
                                             name={data.name} value={data.patient_count}
                                             color={districtColors[i]}/>;
                    })}
                </GoogleMapReact>
            </div>
        </div>
    );
};

export default DistrictMapPanel;
