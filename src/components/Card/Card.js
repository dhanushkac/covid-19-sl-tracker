import React from 'react';

import {Typography} from 'antd';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import './card.css';

const {Title} = Typography;

const Card = ({title, value, icon, newStatus, style}) => {
    return <div className="card" style={{ background: style }}>
        <div><FontAwesomeIcon style={{ color: "white" }} icon={icon} size="2x"/></div>
        <Title className="card-title" level={4}>{title}</Title>
        <Title className={`card-status`}>{value}</Title>
        <p className="new-status-text">{newStatus}</p>
    </div>;
};

export default Card;
