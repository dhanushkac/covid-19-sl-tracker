import moment from "moment";

const BASE_URL = "https://hpb.health.gov.lk/api";
const GLOBAL_BASE_URL = "https://disease.sh/v3/covid-19/countries";

export const loadData = async () => {

  const result = {
    lastUpdated: "",
    error: false,
    errorMessage: "",
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
    result.error = true;
    result.errorMessage = error.message;
  }

  return result;
}

export const loadHistoryData = async () => {

  const result = {
    error: false,
    errorMessage: "",
    historyData: []
  };

  try {
    const response = await fetch(`${BASE_URL}/get-statistical-history-data`);

    validateResponse(response);

    const json = await response.json();
    const data = json.data.reverse();

    result.historyData = data.reduce((res, val) => {
      res = [...res, {
        date: val.date,
        value: val.cases_count,
        type: "Cases"
      },
        {
          date: val.date,
          value: val.recoveries_count,
          type: "Recoveries"
        },
        {
          date: val.date,
          value: val.deaths_count,
          type: "Deaths"
        }
      ]

      return res;
    }, []);

  } catch (error) {
    result.error = true;
    result.errorMessage = error.message;
  }

  return result;
}

export const loadCountryData = async () => {
  const result = {
    error: false,
    errorMessage: "",
    countryData: []
  };

  try {
    const response = await fetch(GLOBAL_BASE_URL);
    result.countryData = await response.json();
  } catch (error) {
    result.error = true;
    result.errorMessage = error.message;
  }

  return result;
}

function validateResponse(response) {
  if (!response.ok) {
    throw new Error(response.statusText);
  }
}
