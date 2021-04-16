import React, { useEffect, useState } from "react";
import { Layout, Result, Spin } from "antd";

import FooterPanel from "./panels/FooterPanel";
import HospitalPanel from "./panels/HospitalPanel/HospitalPanel";
import HeaderPanel from "./panels/HeaderPanel/HeaderPanel";
import ChartPanel from "./panels/ChartPanel/ChartPanel";
import AboutPanel from "./panels/AboutPanel/AboutPanel";
import InfoPanel from "./panels/InfoPanel";
import Navigation from "./components/Navigation";
import { INITIAL_GLOBAL_DATA, INITIAL_LOCAL_DATA } from "./utils/state";
import { getStatData } from "./utils/stat.helper";
import { loadCountryData, loadData, loadHistoryData } from "./services/main.service";

import "./App.css";

const { Content, Footer } = Layout;

function App() {

  const [isLoading, setIsLoading] = useState(false);
  const [isLocal, setIsLocal] = useState(true);
  const [lastUpdated, setLastUpdated] = useState("");

  const [localData, setLocalData] = useState(INITIAL_LOCAL_DATA);
  const [globalData, setGlobalData] = useState(INITIAL_GLOBAL_DATA);
  const [pcrData, setPcrData] = useState([]);
  const [hospitalData, setHospitalData] = useState([]);
  const [historyData, setHistoryData] = useState([]);
  const [countryData, setCountryData] = useState([]);

  const [error, setError] = useState({ error: false, message: "" });
  const [historyError, setHistoryError] = useState({ error: false, message: "" });
  const [countryDataError, setCountryDataError] = useState({ error: false, message: "" });

  const handleState = (data) => {
    if (data.error) {
      setError({ ...error, error: true, message: data.errorMessage });
      return;
    }

    setLastUpdated(data.lastUpdated);
    setGlobalData(data.globalData);
    setLocalData(data.localData);
    setPcrData(data.pcrData);
    setHospitalData(data.hospitalData);
    setIsLoading(false);
    setError({ error: false, message: "" });
  }

  const handleHistoryDataState = (data) => {
    if (data.error) {
      setHistoryError({ ...error, error: true, message: data.errorMessage });
      return;
    }

    setHistoryData(data.historyData);
  }

  const handleCountryDataState = async (data) => {
    if (data.error) {
      setCountryDataError({ ...countryDataError, error: true, message: data.errorMessage });
      return;
    }

    const countriesToFiler = ["India", "Japan", "China", "Australia", "Singapore", "UAE", "Pakistan", "South Korea", "Kuwait"]
    const countryChartData = await data.countryData.filter(data => countriesToFiler.indexOf(data.country) !== -1).map(data => {
      return { cases: data.cases, deaths: data.deaths, recovered: data.recovered, country: data.country };
    });

    setCountryData(countryChartData);
  }

  const onTypeChange = ({ target: { value } }) => {
    setIsLocal(value);
  }

  useEffect(() => {
    setIsLoading(true);
    loadData().then(data => handleState(data));
    loadHistoryData().then(data => handleHistoryDataState(data));
    loadCountryData().then(data => handleCountryDataState(data));
  }, []);

  const data = getStatData(localData, globalData, isLocal, pcrData);
  const chartData = { pcrData, historyData, lastUpdated, countryData, historyError, countryDataError };

  return (
    <Layout className="layout">
      <Navigation/>
      <Content className="content">
        {isLoading && <div className="spin-root">
          <Spin size="large" className="spin-load"/>
        </div>}
        {!isLoading && <>
          {!error.error && <>
            <HeaderPanel cardData={data} onChange={onTypeChange} lastUpdate={lastUpdated}/>
            <ChartPanel {...chartData} />
            <HospitalPanel hospitalData={hospitalData} admitted={localData.localTotalIndividualsIHospitals}
                           lastUpdatedAt={lastUpdated}/>
            <AboutPanel/>
            <InfoPanel/>
            <FooterPanel/>
          </>}

          {error.error && <Result
            status="500"
            title="An unexpected error occurred"
            subTitle="We will be back soon. Please try again in few minutes."
          />}
        </>}

      </Content>
      {!isLoading && <Footer className="footer">Made with ❤ by <a href="https://dhanushka.dev/">Dhanushka</a>
      </Footer>}
    </Layout>
  );
}

export default App;
