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
import { getContinentData, getCountryChartData, getStatData } from "./utils/stat.helper";
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
  const [continentData, setContinentData] = useState({
    "Antarctica": 0,
    "Africa": 0,
    "Asia": 0,
    "Australia/Oceania": 0,
    "Europe": 0,
    "North America": 0,
    "South America": 0,
  });

  const [error, setError] = useState(false);

  const onTypeChange = ({ target: { value } }) => {
    setIsLocal(value);
  }

  useEffect(() => {
    setIsLoading(true);

    const fetchData = async () => {
      const data = await loadData();
      setLastUpdated(data.lastUpdated);
      setGlobalData(data.globalData);
      setLocalData(data.localData);
      setPcrData(data.pcrData);
      setHospitalData(data.hospitalData);
      setIsLoading(false);
      setError(false);

      const _historyData = await loadHistoryData();
      setHistoryData(_historyData);

      const _countryData = await loadCountryData();
      const countryChartData = await getCountryChartData(_countryData);
      const continentData = await getContinentData(_countryData);

      setContinentData(continentData);
      setCountryData(countryChartData);
    }

    fetchData().catch(_ => setError(true));
  }, []);

  const data = getStatData(localData, globalData, isLocal, pcrData);
  const chartData = { pcrData, historyData, lastUpdated, countryData, continentData };

  return (
    <Layout className="layout">
      <Navigation/>
      <Content className="content">
        {isLoading && <div className="spin-root">
          <Spin size="large" className="spin-load"/>
        </div>}
        {!isLoading && <>
          {!error && <>
            <HeaderPanel cardData={data} onChange={onTypeChange} lastUpdate={lastUpdated}/>
            <ChartPanel {...chartData} />
            <HospitalPanel hospitalData={hospitalData} admitted={localData.localTotalIndividualsIHospitals}
                           lastUpdatedAt={lastUpdated}/>
            <AboutPanel/>
            <InfoPanel/>
            <FooterPanel/>
          </>}

          {error && <Result
            status="500"
            title="An unexpected error occurred"
            subTitle="We will be back soon. Please try again in few minutes."
          />}
        </>}

      </Content>
      {!isLoading &&
      <Footer className="footer">
        <div>Made with ❤ by <a href="https://dhanushka.dev/">Dhanushka</a></div>
      </Footer>}
    </Layout>
  );
}

export default App;
