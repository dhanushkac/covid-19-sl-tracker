import React from "react";
import { Col, Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import Message from "../Message/Message";
import "./CardPanel.css";

const antIcon = <LoadingOutlined style={{fontSize: 24}}/>;

const SubCard = ({title, infoData, additional}) => {
    return <Col xs={{span: 24}} sm={{span: 22}} md={{span: 8}} lg={{span: 8, offset: 0}}>
        <div style={{width: "90%", margin: "auto"}}>
            <Message type="light" style={{fontsize: "1em"}}>
                <div className="card-info">
                    <div className="card-info-title">
                        {title}
                    </div>
                    {
                        infoData ?
                            <span>
                                <div className="card-info-data">
                                {infoData}
                            </div>
                            <div style={{
                                color: "grey",
                                height: "25px"
                            }}>{additional}</div>
                            </span> : <Spin indicator={antIcon}/>
                    }
                </div>
            </Message>
        </div>
    </Col>;
};

export default SubCard;

