import React from 'react';
import {Typography} from "antd";
import './ContactPanel.css';

const {Title, Text} = Typography;

const ContactPanel = () => {
    return <div className="important-contacts">
        <Title>Other Important Contacts</Title>
        <div className="contacts">
            <div>
                <Text>Suwasariya Hotline: +9471 010 7107</Text>
            </div>
            <div>
                <Text>Epidemiology Unit: +94011 269 5112</Text>
            </div>
            <div>
                <Text>Quarantine Unit: +94011 211 2705</Text>
            </div>
            <div>
                <Text>Disaster Management Unit: +94011 307 1073</Text>
            </div>
        </div>
    </div>;
};

export default ContactPanel;
