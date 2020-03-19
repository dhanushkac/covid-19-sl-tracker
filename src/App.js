import React, {useEffect, useState} from 'react';
import './App.css';
import {BackTop, Layout, Row, Spin, Typography} from 'antd';
import {faAmbulance, faProcedures, faWalking} from '@fortawesome/free-solid-svg-icons';
import {
    GLOBAL_CASES,
    GLOBAL_DEATHS,
    GLOBAL_NEW_CASES,
    GLOBAL_RECOVERED,
    LOCAL_CASES,
    LOCAL_DEATHS,
    LOCAL_RECOVERED,
    NEW_CASES,
    NEW_DEATHS
} from './utils/Strings';
import PanelPage from "./Pages/PanelPage/PanelPage";
import HospitalPanel from "./Pages/HospitalPanel/HospitalPanel";
import QAPanel from "./components/QAPanel/QAPanel";
import CardPanel from "./components/CardPanel/CardPanel";
import {formatNumber} from "./utils/Numbers";

const {Header, Content, Footer} = Layout;
const {Title} = Typography;

function App() {

    const [isLoading, setIsLoading] = useState(false);
    const [isLocal, setIsLocal] = useState(true);
    const [timer, setTimer] = useState(0);
    const [state, setState] = useState({
        update_date_time: "2020-03-18 20:32:00",
        local_new_cases: 9,
        local_total_cases: 50,
        local_deaths: 0,
        local_new_deaths: 0,
        local_recovered: 2,
        global_new_cases: 15744,
        global_total_cases: 198234,
        global_deaths: 8272,
        global_new_deaths: 475,
        global_recovered: 82889,
    });
    const [hospitalData, setHospitalData] = useState([]);

    useEffect(() => {
        setInterval(() => {
            setTimer((prevTemp) => prevTemp + 1)
        }, 300000)
    }, []);

    useEffect(() => {
        fetchData()
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
                local_recovered: data.local_recovered,
                global_new_cases: data.global_new_cases,
                global_total_cases: data.global_total_cases,
                global_deaths: data.global_deaths,
                global_new_deaths: data.global_new_deaths,
                global_recovered: data.global_recovered
            });

            setHospitalData([...hospitalData, ...data.hospital_data]);
            setIsLoading(false);
        } catch (error) {
            console.log(error);
        }
    };

    function onChange(value) {
        setIsLocal(value.target.value);
    }

    const getStatusText = (value, text) => {
        const val = formatNumber(value);
        return (value !== 0 ? val : "No ") + " " + text;
    };

    const cases = {
        text: isLocal ? LOCAL_CASES : GLOBAL_CASES,
        value: isLocal ? state.local_total_cases : state.global_total_cases,
        newText: isLocal ? getStatusText(state.local_new_cases, NEW_CASES) : getStatusText(state.global_new_cases, GLOBAL_NEW_CASES),
        icon: faAmbulance,
        style: "#ff4d4f"
    };

    const deaths = {
        text: isLocal ? LOCAL_DEATHS : GLOBAL_DEATHS,
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
                    <Row className="card-list">
                        <CardPanel data={data} onChange={onChange} lastUpdate={state.update_date_time}/>
                        <QAPanel/>
                    </Row>
                    <Row>
                        <HospitalPanel data={hospitalData}/>
                    </Row>
                    <Row>
                        <PanelPage/>
                    </Row>
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
