import React from 'react';

const LastUpdate = ({updated, style}) => {
    return <div style={{...style, color: 'grey', fontSize: '1.2em !important'}}>Last update on {updated}</div>;
};

export default LastUpdate;
