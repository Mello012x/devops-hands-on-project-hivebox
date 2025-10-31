/**
 * Normalize sensebox data by filtering only temperature sensors.
 * @param {Object} data - raw data from opensense api. More info: https://docs.opensensemap.org/#api-Boxes-getBox
 * @returns {Object} - Normalized object with temperature data.
 */
export function normalizeSenseBoxData(data) {
  const tempArr = data?.properties?.sensors?.filter(
    (sensor) => sensor.title === "Temperatur",
  );
  return tempArr;
}

/**
 * Filter data based on last medition time keeping only measurements from the last hour.
 * @param {Object} data - Normalized sensebox data with temperature measurements.
 * @returns {Object | null} Data if recent (less than 1h) or null if it's older.
 */
export function filterRecentData(data) {
  const createdAt = data[0]?.lastMeasurement?.createdAt;
  const date = new Date(createdAt).getTime();
  const oneHourAgo = new Date().getTime() - 60 * 60 * 1000;
  return date <= oneHourAgo ? null : data;
}

/**
 * Generate mean temperature of the sensebox stations
 * @param {Object} data - Normalized sensebox temperature data.
 * @returns {String} - Mean temperature.
 */
export function generateMeanTemperature(data) {
  const sum = data.reduce((acc, current) => {
    const sensor = current[0];
    const value = parseFloat(sensor.lastMeasurement.value);
    return acc + value;
  }, 0);

  return sum / data.length;
}

/**
 * Fetches and processes data from multiple (static) sensebox stations.
 * @async
 * @returns {Number} - Mean temperature of the sensebox stations within the last hour.
 */
export async function fetchAndNormalize() {
  /*Calling each one separatelly to avoid rate-limit issues*/
  const ids = [
    "5c21ff8f919bf8001adf2488",
    "5eba5fbad46fb8001b799786",
    "5ade1acf223bd80019a1011c",
  ];
  const results = [];
  for (const id of ids) {
    const res = await fetch(
      `https://api.opensensemap.org/boxes/${id}?format=geojson`,
    );
    const data = await res.json();
    const normalizedData = normalizeSenseBoxData(data);
    const filteredData = filterRecentData(normalizedData);
    filteredData !== null ? results.push(filteredData) : null;
  }
  const meanTemperature = generateMeanTemperature(results);
  return meanTemperature;
}
