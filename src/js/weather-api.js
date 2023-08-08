'use strict';

const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';
//const API_KEY = '95632b02f9162f375a368971925f5209';
const API_KEY = '0d227eec6f6f7873830c271248b92428';
// https://api.openweathermap.org/data/2.5/weather?q=kiev&appid=0d227eec6f6f7873830c271248b92428&lang=ua&units=metric

export const getWeatherDataByCityName = cityName =>
  fetch(`${BASE_URL}?q=${cityName}&appid=${API_KEY}&lang=ua&units=metric`).then(
    response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      console.log(response);
      //console.log(response.json());
      return response.json();
    }
  );
