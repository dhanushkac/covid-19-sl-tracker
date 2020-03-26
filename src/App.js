import React, { useEffect, useState } from "react";
import "./App.css";
import { BackTop, Layout, Result, Row, Spin, Typography } from "antd";
import { faAmbulance, faBed, faWalking } from "@fortawesome/free-solid-svg-icons";
import { DEATHS, GLOBAL_RECOVERED, LOCAL_RECOVERED, NEW_CASES, NEW_DEATHS, TOTAL_CASES } from "./utils/Strings";
import PanelPage from "./Pages/PanelPage/PanelPage";
import HospitalPanel from "./Pages/HospitalPanel/HospitalPanel";
import QAPanel from "./components/QAPanel/QAPanel";
import CardPanel from "./Pages/CardPanel/CardPanel";
import { formatNumber } from "./utils/Numbers";
import moment from "moment";
import DistrictPanel from "./Pages/DistrictPanel/DistrictPanel";
import DistrictMapPanel from "./Pages/DistrictMapPanel/DistrictMapPanel";
import ChartPanel from "./Pages/ChartPanel/ChartPanel";
import ASIAN_COUNTRIES from "./utils/AsianCountries";

const {Header, Content, Footer} = Layout;
const {Title, Text} = Typography;

function App() {

    const [isLoading, setIsLoading] = useState(false);
    const [isError, setError] = useState(false);
    const [isErrorCountryData, setErrorCountryData] = useState(false);
    const [isLocal, setIsLocal] = useState(true);
    const [state, setState] = useState({
        update_date_time: "",
        local_new_cases: 0,
        local_total_cases: 0,
        local_deaths: 0,
        local_new_deaths: 0,
        local_recovered: 0,
        local_total_number_of_individuals_in_hospitals: 0,
        global_new_cases: 0,
        global_total_cases: 0,
        global_deaths: 0,
        global_new_deaths: 0,
        global_recovered: 0,
    });
    const [hospitalData, setHospitalData] = useState([]);
    const [patientChartData, setPatientChartData] = useState([]);
    const [districtData, setDistrictData] = useState([]);
    const [otherData, setOtherData] = useState({});
    const [countryDataUpdatedDate, setCountryDataUpdatedDate] = useState("");
    const [byGenderData, setByGenderData] = useState([]);
    const [countriesReported, setCountriesReported] = useState(0);
    const [ageChartData, setAgeChartData] = useState([]);
    const [patientDataUpdatedAt, setPatientDataUpdatedAt] = useState("");
    const [isAsia, setIsAsia] = useState(false);
    const [defaultCounties] = useState(["Malaysia", "Sri Lanka", "India", "Pakistan", "Singapore", "Japan"]);
    const [filteredCountries, setFilteredCountries] = useState([]);
    const [asianChartData, setAsianChartData] = useState([]);

    useEffect(() => {
        fetchData(fetchCountryData);
    }, []);

    const fetchCountryData = async () => {
        try {
            setIsLoading(true);
            const response = await fetch(`http://localhost:3200/status`);

            if(!response.ok) {
                throw Error(response.statusText);
            }

            const json = await response.json();
            const data = json.data;

            setDistrictData(data.district_data);
            setOtherData(data.other_data);
            setCountryDataUpdatedDate(data.updated_at.replace(/.00/, " ").toUpperCase());

            const genderData = Object.entries(data.by_gender).map(value => {
                return {
                    type: value[0],
                    value: value[1]
                }
            });

            setByGenderData(genderData);
            setCountriesReported(data.countries_reported);
            setIsLoading(false);
            setErrorCountryData(false);

            const chartData = data.by_age.map(ageData => {
                const age = Object.keys(ageData)[0];
                const count = ageData[age];
                return {
                    age: age,
                    count: +count
                }
            });

            setAgeChartData(chartData);
        } catch(e) {
            setErrorCountryData(true);
        }
    };

    const fetchData = async (callback) => {
        try {
            setIsLoading(true);
            const response = await fetch("https://hpb.health.gov.lk/api/get-current-statistical");
            if(!response.ok) {
                throw Error(response.statusText);
            }
            const json = await response.json();
            const data = json.data;

            setState({
                ...state,
                update_date_time: data.update_date_time,
                local_new_cases: data.local_new_cases,
                local_total_cases: data.local_total_cases,
                local_deaths: data.local_deaths,
                local_new_deaths: data.local_new_deaths,
                local_total_number_of_individuals_in_hospitals: data.local_total_number_of_individuals_in_hospitals,
                local_recovered: data.local_recovered,
                global_new_cases: data.global_new_cases,
                global_total_cases: data.global_total_cases,
                global_deaths: data.global_deaths,
                global_new_deaths: data.global_new_deaths,
                global_recovered: data.global_recovered
            });

            await fetch("https://pomber.github.io/covid19/timeseries.json")
                .then(response => response.json())
                .then(val => {

                    const sriLankaData = [...val["Sri Lanka"]];
                    const chartData = sriLankaData.map(obj => {
                        const date = moment();
                        const objDate = moment(obj.date, "YYYY-M-DD", true);
                        if(obj.recovered >= 2 && objDate.isBefore(date) && obj.recovered > data.local_recovered) {
                            return {...obj, "confirmed": obj.confirmed - 1};
                        }
                        return obj;
                    });

                    const lastItem = [...sriLankaData].splice(-1, 1);
                    const updatedAt = (lastItem && lastItem.length > 0) ? lastItem[0].date : "";

                    setPatientDataUpdatedAt(moment(updatedAt, "YYYY-M-DD", true).format("YYYY-MM-DD"));
                    setPatientChartData(chartData);

                    const processedAsianData = [];

                    ASIAN_COUNTRIES.map(country => {

                        const lastIndex = val[country].length - 1;
                        const countryData = val[country][lastIndex];

                        const tempActive = {};
                        tempActive["country"] = country;
                        tempActive["type"] = "Confirmed cases";
                        tempActive["value"] = countryData.confirmed;
                        processedAsianData.push(tempActive);

                        return countryData;
                    });

                    setAsianChartData([...processedAsianData]);
                    callback();

                }).catch(_ => setError(true));

            setHospitalData([...hospitalData, ...data.hospital_data]);
            setIsLoading(false);
            setError(false);
        } catch(error) {
            setError(true);
        }
    };

    function onChange(value) {
        setIsLocal(value.target.value);
    }

    const getStatusText = (value, text) => {
        const val = formatNumber(value);
        return val + " " + text;
    };

    function onChangeChart(value) {
        setIsAsia(value.target.value);
    }

    function onChangeCountry(countries) {
        defaultCounties.forEach(element => {
            filteredCountries.push(element);
        });
        countries.forEach(element => {
            filteredCountries.push(element);
        });
        setFilteredCountries([filteredCountries]);
    }

    const cases = {
        text: TOTAL_CASES,
        value: isLocal ? state.local_total_cases : state.global_total_cases,
        newText: isLocal ? getStatusText(state.local_new_cases, NEW_CASES) : getStatusText(state.global_new_cases, NEW_CASES),
        icon: faAmbulance,
        style: "#ff4d4f"
    };

    const deaths = {
        text: DEATHS,
        value: isLocal ? state.local_deaths : state.global_deaths,
        newText: isLocal ? getStatusText(state.local_new_deaths, NEW_DEATHS) : getStatusText(state.global_new_deaths, NEW_DEATHS),
        icon: faBed,
        style: "#ff8f2f"
    };

    const recovered = {
        text: isLocal ? LOCAL_RECOVERED : GLOBAL_RECOVERED,
        value: isLocal ? state.local_recovered : state.global_recovered,
        icon: faWalking,
        style: "#52c41a"
    };

    const data = {
        main: [cases, deaths, recovered],
        inHospital: state.local_total_number_of_individuals_in_hospitals,
        countries: countriesReported,
        other: otherData
    };

    const patientChartConf = {
        config: {
            title: {
                visible: false
            },
            description: {
                visible: false
            },
            padding: "auto",
            forceFit: true,
            point: {
                visible: true,
                size: 4
            },
            responsive: true,
            smooth: true,
            chartData: isAsia ? asianChartData : patientChartData,
            label: {
                visible: isAsia ? true : true,
                offset: 20,
                type: "point"
            },
            lineChart: !isAsia,
            xField: isAsia ? "value" : "date",
            yField: isAsia ? "country" : "confirmed",
            stackField: isAsia ? "type" : "",
            yAxis: {
                tickCount: isAsia ? 18 : 10
            },
            xAxis: {
                tickCount: isAsia ? 10 : 10
            },
            height: isAsia ? 500 : 400,
            style: {
                width: "100%"
            }
        },
        countries: [defaultCounties, filteredCountries],
        onChange: [onChangeChart, onChangeCountry]
    };

    return (
        <Layout className="layout">
            <BackTop/>
            <Header>
                <Title level={3} className="logo">COVID-19 Sri Lanka Tracker</Title>
            </Header>
            <Content className="content">
                {isLoading && <div className="spin-root">
                    <Spin size="large" className="spin-load"/>
                </div>}
                {!isLoading && <div>
                    {!isError && <div>
                        <Row className="card-list">
                            <CardPanel cardData={data} onChange={onChange} lastUpdate={state.update_date_time}/>
                            <QAPanel/>
                        </Row>
                        {!isErrorCountryData && <div>
                            <Row justify="space-around">
                                <ChartPanel ageChartData={ageChartData} patientChartData={patientChartConf}
                                            hospitalData={hospitalData}
                                            patientDataUpdatedAt={patientDataUpdatedAt}
                                            ageDataUpdatedAt={countryDataUpdatedDate} genderChartData={byGenderData}/>
                                <DistrictMapPanel districtData={districtData} updatedDate={countryDataUpdatedDate}/>
                            </Row>
                            <Row>
                                <DistrictPanel districtData={districtData} updatedDate={countryDataUpdatedDate}/>
                            </Row>
                        </div>}
                        {isErrorCountryData && <Row>
                            <Text>Unable to display country based analysis at this moment.</Text>
                        </Row>}
                        <Row>
                            <HospitalPanel hospitalData={hospitalData}
                                           admitted={state.local_total_number_of_individuals_in_hospitals}
                                           lastUpdatedAt={state.update_date_time}/>
                        </Row>
                        <Row>
                            <PanelPage/>
                        </Row>
                    </div>}

                    {isError && <Result
                        status="500"
                        title="An unexpected error occurred"
                        subTitle="We will be back soon. Please try again in few minutes."
                    />}
                </div>}

            </Content>
            {!isLoading && <Footer className="footer">
                Made with ❤ by <a href="https://dhanushka.dev/">Dhanushka</a>
            </Footer>}
        </Layout>
    );
}

export default App;
