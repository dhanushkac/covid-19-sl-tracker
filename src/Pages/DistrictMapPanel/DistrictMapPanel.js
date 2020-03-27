import React, { useState } from "react";
import "./MapPanel.css";
import GoogleMapReact from "google-map-react";
import { Col, Tooltip } from "antd";
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

    return (
        <Col xs={{span: 24}} sm={{span: 24}} md={{span: 24}} lg={{span: 234}} xl={{span: 8}}>
            <div style={{marginTop: "40px"}}>
                <div><span className="country-data-title">The districts reported with the highest number of the COVID-19 confirmed cases</span>
                </div>
                <LastUpdate updated={updatedDate}/>
                <div style={{height: dimension.width < 576 ? "500px" : "800px", width: "100%", margin: "auto", marginTop: "30px"}}>
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
        </Col>
    );
};

export default DistrictMapPanel;
