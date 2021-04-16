import React from "react";
import { LinkOutlined, PictureOutlined } from "@ant-design/icons";
import { Typography } from "antd";

const { Title } = Typography;

const CreditPanel = () => {
  return (
    <div style={{ width: "90%", margin: "auto", marginTop: "20px" }}>
      <div>
        <Title level={4}>Credits & Sources:</Title>
        <div>
          <LinkOutlined/> <a href="https://hpb.health.gov.lk/" target="_blank"
                             rel="noopener noreferrer">hpb.health.gov.lk</a>
        </div>
        <div>
          <LinkOutlined/> <a href="https://www.epid.gov.lk/web/" target="_blank"
                             rel="noopener noreferrer">http://www.epid.gov.lk/web/</a>
        </div>
        <div>
          <LinkOutlined/> <a href="https://disease.sh/" target="_blank"
                             rel="noopener noreferrer">https://disease.sh/</a>
        </div>
        <div>
          <LinkOutlined/> <a
          href="https://www.cdc.gov/coronavirus/2019-ncov/if-you-are-sick/steps-when-sick.html" target="_blank"
          rel="noopener noreferrer">https://www.cdc.gov</a>
        </div>
      </div>

      <div style={{ marginTop: '30px' }}>
        <PictureOutlined/> Icons made by <a href="https://www.flaticon.com/authors/freepik"
                                            title="Freepik" target="_blank"
                                            rel="noopener noreferrer">Freepik</a> from <a
        href="https://www.flaticon.com/"
        title="Flaticon">www.flaticon.com</a>
      </div>
    </div>
  );
};

export default CreditPanel;
