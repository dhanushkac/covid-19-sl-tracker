import React from 'react';
import {Typography} from 'antd';
import PanelItem from "../PanelItem/PanelItem";

const {Title, Text} = Typography;

const SpreadPreventPanel = () => {
    return <div>
        <div>
            <div style={{margin: '20px 0'}}><Title level={2}>Steps to help prevent the spread of COVID-19 if you
                are sick</Title></div>
            <PanelItem title="Stay home except to get medical care"
                       text="People who are mildly ill with COVID-19 are able to recover at home. Do not leave, except to get medical care. Do not visit public areas. Avoid using public transportation, ride-sharing, or taxis. Call before you get medical care. Be sure to get care if you feel worse or you think it is an emergency."
                       image="https://www.cdc.gov/coronavirus/2019-ncov/images/COVIDweb_02_bed.png"/>
            <PanelItem title="Cover your coughs and sneezes"
                       text="Cover your mouth and nose with a tissue when you cough or sneeze. Throw used tissues in a lined trash can. Immediately wash your hands with soap and water for at least 20 seconds. If soap and water are not available, clean your hands with an alcohol-based hand sanitizer that contains at least 60% alcohol."
                       image="https://www.cdc.gov/coronavirus/2019-ncov/images/COVIDweb_06_coverCough.png"/>
            <PanelItem title="Clean your hands often"
                       text="Wash your hands often with soap and water for at least 20 seconds. This is especially important after blowing your nose, coughing, or sneezing; going to the bathroom; and before eating or preparing food. Avoid touching your eyes, nose, and mouth with unwashed hands.  Soap and water are the best option, especially if hands are visibly dirty."
                       image="https://www.cdc.gov/coronavirus/2019-ncov/images/COVIDweb_07_wash.png"/>
            <PanelItem title="Clean all “high-touch” surfaces everyday"
                       text="Clean high-touch surfaces in your isolation area (“sick room” and bathroom) every day; let a caregiver clean and disinfect high-touch surfaces in other areas of the home. High-touch surfaces include phones, remote controls, counters, tabletops, doorknobs, bathroom fixtures, toilets, keyboards, tablets, and bedside tables."
                       image="https://www.cdc.gov/coronavirus/2019-ncov/images/COVIDweb_09_clean.png"/>
        </div>
        <div className="more-details"><Text>For more details check <a
            href="https://www.cdc.gov/coronavirus/2019-ncov/if-you-are-sick/steps-when-sick.html">this link.</a></Text>
        </div>
    </div>
};

export default SpreadPreventPanel;
