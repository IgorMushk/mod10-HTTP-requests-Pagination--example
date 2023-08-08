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

// вопросы из таблицы - 1
// function calcSumm(numOne, numTwo) {
//   if (numTwo === 1) {
//     return numOne;
//   } else {
//     return numOne * calcSumm(numOne, numTwo - 1);
//   }
// }
// console.log(calcSumm(2, 3));

// вопросы из таблицы - 2
// const fetchUsersBtn = document.querySelector('.btn');
// const userList = document.querySelector('.user-list');

// fetchUsersBtn.addEventListener('click', () => {
//   fetchUsers()
//     .then(users => renderUserList(users))
//     .catch(error => console.log(error));
// });

// function fetchUsers() {
//   return fetch('https://jsonplaceholder.typicode.com/users').then(response => {
//     if (!response.ok) {
//       throw new Error(response.status);
//     }
//     return response.json();
//   });
// }

// function renderUserList(users) {
//   const markup = users
//     .map(user => {
//       return `<li>
//           <p><b>Name</b>: ${user.name}</p>
//           <p><b>Email</b>: ${user.email}</p>
//           <p><b>Company</b>: ${user.company.name}</p>
//         </li>`;
//     })
//     .join('');
//   userList.innerHTML = markup;
// }
