import {
  ACTIVE_CASES,
  AFFECTED_COUNTRIES,
  DEATHS,
  GLOBAL_RECOVERED,
  IN_HOSPITAL,
  LOCAL_RECOVERED,
  NEW_CASE,
  NEW_CASES,
  NEW_DEATH,
  NEW_DEATHS,
  PCR_TEST,
  PCR_TESTS,
  TOTAL_CASES,
  TOTAL_PCR_TESTS
} from "./Strings";
import { formatNumber } from "./Numbers";

import AmbulanceIcon from "../resources/ambulance.svg";
import DeathIcon from "../resources/tombstone.svg";
import RecoveredIcon from "../resources/heartbeat.svg";
import ActiveIcon from "../resources/coronavirus.svg";
import CovidTestIcon from "../resources/test-tube.svg";
import HospitalIcon from "../resources/hospital.svg";
import GlobeIcon from "../resources/planet-earth.svg";

const getStatusText = (value, plural, singular) => {
  const val = formatNumber(value);
  return val === "1" ? val + " " + singular : val + " " + plural;
};

export const getStatData = (localData, globalData, isLocal, pcrData) => {
  const cases = {
    text: TOTAL_CASES,
    value: isLocal ? localData.localTotalCases : globalData.globalTotalCases,
    newText: isLocal ? getStatusText(localData.localNewCases, NEW_CASES, NEW_CASE) : getStatusText(globalData.globalNewCases, NEW_CASES, NEW_CASE),
    icon: AmbulanceIcon
  };

  const deaths = {
    text: DEATHS,
    value: isLocal ? localData.localDeaths : globalData.globalDeaths,
    newText: isLocal ? getStatusText(localData.localNewDeaths, NEW_DEATHS, NEW_DEATH) : getStatusText(globalData.globalNewDeaths, NEW_DEATHS, NEW_DEATH),
    icon: DeathIcon
  };

  const recovered = {
    text: isLocal ? LOCAL_RECOVERED : GLOBAL_RECOVERED,
    value: isLocal ? localData.localRecovered : globalData.globalRecovered,
    icon: RecoveredIcon
  };

  const active = {
    text: ACTIVE_CASES,
    value: localData.localActiveCases,
    icon: ActiveIcon
  };

  const tests = {
    text: TOTAL_PCR_TESTS,
    value: localData.totalPcrTestingCount,
    newText: getStatusText(pcrData.length > 0 && pcrData[pcrData.length - 1].count, PCR_TESTS, PCR_TEST),
    icon: CovidTestIcon
  };

  const hospital = {
    text: IN_HOSPITAL,
    value: localData.localTotalIndividualsIHospitals,
    icon: HospitalIcon
  };

  const countries = {
    text: AFFECTED_COUNTRIES,
    value: '219',
    icon: GlobeIcon
  };


  let data = [
    cases, deaths, recovered
  ];

  if (isLocal) {
    data = [...data, active, tests, hospital];
  }

  if (!isLocal) {
    data = [...data, countries];
  }

  return data;
}

export const getContinentData = async (countryData) => {
  return await countryData.reduce((result, value) => {

    if (!value.continent) {
      return result;
    }

    const cases = result[value.continent] + value.cases;
    result = { ...result, [value.continent]: cases }

    return result;
  }, {
    "Africa": 0,
    "Asia": 0,
    "Australia/Oceania": 0,
    "Europe": 0,
    "North America": 0,
    "South America": 0,
  });
}

export const getCountryChartData = async (countryData) => {
  const countriesToFiler = ["India", "Germany", "Poland", "Brazil", "France", "Turkey", "Russia", "Turkey", "Italy"]
  return await countryData.filter(data => countriesToFiler.indexOf(data.country) !== -1).map(data => {
    return { cases: data.cases, deaths: data.deaths, recovered: data.recovered, country: data.country };
  });
}
