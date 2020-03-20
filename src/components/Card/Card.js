import React from 'react';

import {Tooltip, Typography} from 'antd';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import './card.css';

const {Title} = Typography;

const Card = ({title, value, icon, newStatus, style}) => {
    return <div className="card" style={{background: style}}>
        <div><FontAwesomeIcon style={{color: "white"}} icon={icon} size="2x"/></div>
        <Title className="card-title" level={4}>{title}</Title>
        <Title className={`card-status`}>{value}</Title>

        <div className="status-data">
            {newStatus && <Tooltip placement="bottom" title={newStatus.toLowerCase() + ' within past 24 hours'}>
                <p className="new-status-text">{newStatus}</p>
            </Tooltip>}
        </div>
    </div>;
};

export default Card;
