import axios from 'axios';
const API_KEY = '5addf7c91f9f383bcdf9e326d1db1a2f';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEAHER';

export function fetchWeather(city){

    const url = `${ROOT_URL}&q=${city},col`;
    const request = axios.get(url);

    return {
        type: FETCH_WEATHER,
        payload: request
    }
}