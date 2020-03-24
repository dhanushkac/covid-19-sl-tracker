export function formatNumber(num) {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
}

export function normalizePatientData(districtData) {
    const patientCounts = districtData.map(value => value.patient_count);
    const max = Math.max(...patientCounts);
    const min = Math.min(...patientCounts);

    return patientCounts.map(value => {
        return Math.round((value - min) / (max - min) * 3);
    });
}
