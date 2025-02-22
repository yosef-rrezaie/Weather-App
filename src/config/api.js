// current weather api : https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
// Call 5 day / 3 hour forecast data : api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}
// lst and lon : http://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&limit={limit}&appid={API key}

import axios from "axios";
const API_KEY = "00341bb1aa488d5d4ac04218541aa4c3";
const geoApi = axios.create({
  baseURL: "http://api.openweathermap.org/geo/1.0/",
});
const weatherApi = axios.create({
  baseURL: "https://api.openweathermap.org/data/2.5/",
});

geoApi.interceptors.response.use((res) => {
  return res.data;
});

weatherApi.interceptors.response.use((res) => {
  return res.data;
});

export { API_KEY };
export { geoApi };
export { weatherApi };
