import React from "react";
import { Typography } from "antd";
import "./ContactPanel.css";

const {Text} = Typography;

const ContactPanel = () => {
    return (
        <div className="important-contacts">
            <div>
                <div className="contact-item">
                    <Text>Suwasariya Hotline</Text>
                    <div className="contacts">071 010 7107</div>
                </div>
                <div className="contact-item">
                    <Text>Epidemiology Unit</Text>
                    <div className="contacts">011 269 5112</div>
                </div>
                <div className="contact-item">
                    <Text>Quarantine Unit</Text>
                    <div className="contacts">011 211 2705</div>
                </div>
                <div className="contact-item">
                    <Text>Disaster Management Unit</Text>
                    <div className="contacts">011 307 1073</div>
                </div>
            </div>
        </div>
    );
};

export default ContactPanel;
