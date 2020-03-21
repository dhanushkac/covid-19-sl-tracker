import React, {useEffect, useState} from 'react';
import './App.css';
import {BackTop, Col, Layout, Result, Row, Spin, Typography} from 'antd';
import {faAmbulance, faProcedures, faWalking} from '@fortawesome/free-solid-svg-icons';
import {DEATHS, GLOBAL_RECOVERED, LOCAL_RECOVERED, NEW_CASES, NEW_DEATHS, TOTAL_CASES} from './utils/Strings';
import PanelPage from "./Pages/PanelPage/PanelPage";
import HospitalPanel from "./Pages/HospitalPanel/HospitalPanel";
import QAPanel from "./components/QAPanel/QAPanel";
import CardPanel from "./components/CardPanel/CardPanel";
import {formatNumber} from "./utils/Numbers";
import {Area, AreaChart, CartesianGrid, Tooltip, XAxis, YAxis} from "recharts";
import moment from 'moment';
import useScreenDimensions from "./utils/useScreenDimensions";
import PatientChart from "./components/PatientChart/PatientChart";

const {Header, Content, Footer} = Layout;
const {Title} = Typography;

function App() {

    const [isLoading, setIsLoading] = useState(false);
    const [isError, setError] = useState(false);
    const [isLocal, setIsLocal] = useState(true);
    const [timer, setTimer] = useState(0);
    const [screenSize] = useScreenDimensions();
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
    const [chartData, setChartData] = useState([]);

    useEffect(() => {
        setInterval(() => {
            setTimer((prevTemp) => prevTemp + 1)
        }, 300000)
    }, []);

    useEffect(() => {
        fetchData();
    }, [timer]);

    const fetchData = async () => {
        try {
            setIsLoading(true);
            const response = await fetch('https://hpb.health.gov.lk/api/get-current-statistical');
            if (!response.ok) {
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

                    const chartData = [...val["Sri Lanka"]];
                    const processedChartData = chartData.map(obj => {
                        const date = moment().format('YYYY-M-DD');
                        if (obj.recovered > 1 && obj.date < date && obj.recovered > data.local_recovered) {
                            return {...obj, "recovered": data.local_recovered};
                        }
                        return obj;
                    });

                    setChartData([...processedChartData, {
                        date: moment().format('YYYY-M-DD'),
                        confirmed: data.local_total_cases,
                        deaths: data.local_deaths,
                        recovered: data.local_recovered
                    }]);
                }).catch(_ => setError(true));

            setHospitalData([...hospitalData, ...data.hospital_data]);
            setIsLoading(false);
            setError(false);
        } catch (error) {
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
        icon: faProcedures,
        style: "#ff8f2f"
    };

    const recovered = {
        text: isLocal ? LOCAL_RECOVERED : GLOBAL_RECOVERED,
        value: isLocal ? state.local_recovered : state.global_recovered,
        icon: faWalking,
        style: "#52c41a"
    };

    const data = [cases, deaths, recovered];

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
                        <Row>
                            <Col span={24}>
                                <PatientChart chartData={chartData} width={screenSize.width}/>
                            </Col>
                        </Row>
                        <Row>
                            <HospitalPanel hospitalData={hospitalData}
                                           admitted={state.local_total_number_of_individuals_in_hospitals}/>
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
                Made with ❤ by <a href="https://dhanushka.dev/">Dhanushka</a> | Powered by <a
                href="http://hpb.health.gov.lk/api-documentation">hpb.health.gov.lk</a>
            </Footer>}
        </Layout>
    );
}

export default App;
