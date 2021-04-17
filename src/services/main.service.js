import moment from "moment";

const BASE_URL = "https://hpb.health.gov.lk/api";
const GLOBAL_BASE_URL = "https://disease.sh/v3/covid-19/countries";

export const loadData = async () => {

  const result = {
    lastUpdated: "",
    globalData: {},
    localData: {},
    hospitalData: {},
    pcrData: []
  };

  try {
    const response = await fetch(`${BASE_URL}/get-current-statistical`);

    validateResponse(response);

    const json = await response.json();
    const data = json.data;

    result.lastUpdated = moment(data.update_date_time, "YYYY-MM-DD HH:mm:ss", true).format("DD-MM-YYYY hh:mm A");
    result.globalData = {
      globalNewCases: data.global_new_cases,
      globalTotalCases: data.global_total_cases,
      globalDeaths: data.global_deaths,
      globalNewDeaths: data.global_new_deaths,
      globalRecovered: data.global_recovered
    };
    result.localData = {
      localNewCases: data.local_new_cases,
      localTotalCases: data.local_total_cases,
      localTotalIndividualsIHospitals: data.local_total_number_of_individuals_in_hospitals,
      localDeaths: data.local_deaths,
      localNewDeaths: data.local_new_deaths,
      localRecovered: data.local_recovered,
      localActiveCases: data.local_active_cases,
      totalPcrTestingCount: data.total_pcr_testing_count
    };

    result.pcrData = data.daily_pcr_testing_data.map(value => ({ ...value, count: parseInt(value.count) }));
    result.hospitalData = [...data.hospital_data];
    result.loading = false;
  } catch (error) {
    throw error;
  }

  return result;
}

export const loadHistoryData = async () => {

  try {
    const response = await fetch(`${BASE_URL}/get-statistical-history-data`);

    validateResponse(response);

    const json = await response.json();
    return json.data.reverse();

  } catch (error) {
    throw error;
  }
}

export const loadCountryData = async () => {
  try {
    const response = await fetch(GLOBAL_BASE_URL);

    validateResponse(response);

    return await response.json();
  } catch (error) {
    throw error;
  }
}

function validateResponse(response) {
  if (!response.ok) {
    throw new Error(response.statusText);
  }
}
