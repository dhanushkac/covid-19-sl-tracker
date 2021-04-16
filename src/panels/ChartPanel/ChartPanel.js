import React from "react";
import { Col, Row } from "antd";

import PCRCountHistogram from "../../components/PCRCountHistogram";
import LocalCovidDataChart from "../../components/LocalCovidDataChart/LocalCovidDataChart";
import GlobalCovidDataChart from "../../components/GlobalCovidDataChart";

const ChartPanel = ({ lastUpdated,
                      pcrData,
                      historyData,
                      historyError,
                      countryData,
                      countryDataError
                    }) => {
  return (
    <React.Fragment>
      {!historyError.error && <Row>
        <Col span="24">
          <LocalCovidDataChart data={historyData} updatedAt={lastUpdated}/>
        </Col>
      </Row>}
      <Row>
        <Col span="24">
          <Row justify="space-between" gutter={[32, 16]}>
            {!countryDataError.error && <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 24 }} lg={{ span: 12 }} xl={{ span: 12 }}>
              <GlobalCovidDataChart data={countryData} updatedAt={lastUpdated}/>
            </Col>}
            <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 24 }} lg={{ span: 12 }} xl={{ span: 12 }}
                 style={{ display: "flex" }}>
              <PCRCountHistogram patientChartData={pcrData} updatedAt={lastUpdated}/>
            </Col>
          </Row>
        </Col>
      </Row>
    </React.Fragment>
  )
};

export default ChartPanel;
