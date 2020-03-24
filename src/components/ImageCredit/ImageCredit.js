import React from 'react';
import {Typography} from "antd";

const {Text} = Typography;

const ImageCredit = () => {
    return (
        <div style={{marginTop: '50px'}}>
            <div>
                <Text>Credits & Sources: <a href="http://hpb.health.gov.lk/">hpb.health.gov.lk</a> | <a
                    href="http://www.epid.gov.lk/web/">http://www.epid.gov.lk/web/</a> | <a
                    href="https://github.com/pomber/covid19">https://github.com/pomber/covid19</a> | <a
                    href="https://www.cdc.gov/coronavirus/2019-ncov/if-you-are-sick/steps-when-sick.html">https://www.cdc.gov</a></Text>
            </div>
            <div>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a
                href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
        </div>
    );
};

export default ImageCredit;
