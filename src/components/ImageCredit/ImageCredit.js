import React from 'react';
import {Typography} from "antd";

const {Text} = Typography;

const style = {
    marginTop: '50px'
};

const ImageCredit = () => {
    return <div style={style}>
        <Text>Image & Content credits: <a href="http://hpb.health.gov.lk/">hpb.health.gov.lk</a> & <a
            href="https://www.cdc.gov/coronavirus/2019-ncov/if-you-are-sick/steps-when-sick.html">https://www.cdc.gov</a></Text>
    </div>;
};

export default ImageCredit;
