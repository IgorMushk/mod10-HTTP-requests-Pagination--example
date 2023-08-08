// https://www.youtube.com/watch?v=DACuvyOeHi8&t=5040s
// https://www.weatherbit.io/api

'use strict';

import { getWeatherDataByCityName } from './weather-api';
import weatherCardTemplate from '../templates/weather-card.hbs';

//const searchQuery = 'kiev';
//getWeatherDataByCityName(searchQuery);

const weatherFormEl = document.querySelector('.js-search-form');
const weatherWrapperEl = document.querySelector('.weather__wrapper');

const convertSecondsToHoursAndMinutes = seconds => {
  const date = new Date(seconds * 1000);

  return `${`${date.getHours()}`.padStart(
    2,
    0
  )}:${`${date.getMinutes()}`.padStart(2, 0)}`;
};

const handleWeatherFormSubmit = event => {
  event.preventDefault();
  console.dir(event.target.elements.user_country.value);
  console.dir(event.currentTarget.elements.user_country.value);
  console.dir(event.target.firstElementChild.value);

  const searchQuery = event.target.firstElementChild.value.trim();

  if (!searchQuery) {
    return;
  }

  getWeatherDataByCityName(searchQuery)
    .then(data => {
      console.log(data);
      data.sys.sunset = convertSecondsToHoursAndMinutes(data.sys.sunset);
      data.sys.sunrise = convertSecondsToHoursAndMinutes(data.sys.sunrise);

      weatherWrapperEl.innerHTML = weatherCardTemplate(data);
    })
    .catch(console.warn);
};

weatherFormEl.addEventListener('submit', handleWeatherFormSubmit);
