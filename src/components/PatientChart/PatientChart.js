import React from "react";
import { Typography, Radio, Checkbox, Row, Col } from "antd";
import { LineChart, StackedBarChart } from "@opd/g2plot-react";

const { Title } = Typography;

const PatientChart = ({ width, onChange, chartConf, changeCountry, countries, lastUpdate }) => {
  
  const selectedCountries =
    countries[1].length > 0 ? countries[1][0] : countries[0];
  const filteredData = [];
  chartConf.chartData.forEach(element => {
    if (selectedCountries.indexOf(element.country) >= 0) {
      filteredData.push(element);
    }
  });

  const configLine = {
    width: width,
    data: [...chartConf.chartData]
  };

  const configBar = {
    data: [...filteredData]
  };

  

  return (
    <div style={{ marginTop: "40px" }}>
      <Title level={2}>The Distribution of the COVID-19 confirmed cases</Title>
      <div className="action">
        <Row align="middle">
          <Col  span={12} offset={8} >
            <Radio.Group
              style={{ textAlign: "center" }}
              onChange={onChange[0]}
              defaultValue={false}
              buttonStyle="solid"
              size="large"
            >
              <Radio.Button value={false}>Sri Lanka</Radio.Button>
              <Radio.Button value={true}> &nbsp; Asia &nbsp;</Radio.Button>
            </Radio.Group>
          </Col>
          <Col xs={24} sm={24} md={4} lg={4} xl={4}>
            <Row style={{fontWeight: '500', fontSize: '1'}}>Last Updated</Row>
            <Row><Title  level={4}>{lastUpdate}</Title></Row>
            
          </Col>
        </Row>
      </div>
      {chartConf.lineChart ? (
        <LineChart {...configLine} {...chartConf} />
      ) : (
        <React.Fragment>
          <Checkbox.Group style={{ width: "100%" }} onChange={onChange[1]}>
            <Row justify="end">
              <Col xs={12} sm={12} md={8} lg={4} xl={2}>
                <Checkbox value={"China"}>China</Checkbox>
              </Col>
              <Col xs={12} sm={12} md={8} lg={4} xl={2}>
                <Checkbox value={"Nepal"}>Nepal</Checkbox>
              </Col>
              <Col xs={12} sm={12} md={8} lg={4} xl={2}>
                <Checkbox value={"Bangladesh"}>Bangladesh</Checkbox>
              </Col>
              <Col xs={12} sm={12} md={8} lg={4} xl={2}>
                <Checkbox value={"Afghanistan"}>Afghanistan</Checkbox>
              </Col>
              <Col xs={12} sm={12} md={8} lg={4} xl={2}>
                <Checkbox value={"Bhutan"}>Bhutan</Checkbox>
              </Col>
              <Col xs={12} sm={12} md={8} lg={4} xl={2}>
                <Checkbox value={"Indonesia"}>Indonesia</Checkbox>
              </Col>
              <Col xs={12} sm={12} md={8} lg={4} xl={2}>
                <Checkbox value={"Philippines"}>Philippines</Checkbox>
              </Col>
              <Col xs={12} sm={12} md={8} lg={4} xl={2}>
                <Checkbox value={"Maldives"}>Maldives</Checkbox>
              </Col>
              <Col xs={12} sm={12} md={8} lg={4} xl={2}>
                <Checkbox value={"Thailand"}>Thailand</Checkbox>
              </Col>
            </Row>
          </Checkbox.Group>
          <StackedBarChart {...configBar} {...chartConf} />
        </React.Fragment>
      )}
    </div>
  );
};

export default PatientChart;
