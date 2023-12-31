// - 1 -
// fetch('https://apt.glthub.com/zen')
//   .then(res => res.text())
//   .then(console.log);

// - 2 -
// const searchbox = document.querySelector('.searchbox');

// searchbox.addEventListener('submit', e => {
//   e.preventDefault();
//   const login = searchbox.elements.login.value;
//   fetchUser(login).then(userdata => console.log(userdata));
// });

// function fetchUser(login) {
//   return fetch(`https://api.github.com/users/${login}`).then(response =>
//     response.json()
//   );
// }

//public_repos
// ...

// // - 3 - не проверял
// const searchbox = document.querySelector('.searchbox' );
// const profileContainer = document.querySelector('.profile-section');

// searchbox.addEventListener('submit1, e => {
//   e.preventDefault();
//   const login = searchbox.elements.login.value;
//   fetchUser(login).then(showProfile);
//   searchbox.reset();
// });

// function showProfile(userdata) {
//   console.log(userdata);
// };

// function fetchUser(login) {
//   return fetch('https://api.github.com/users/${login}').then(response => response.json()
//   );
// }

// ===========================

import debounce from 'lodash.debounce';
import { fetchUser } from './services/api';

// const searchbox = document.querySelector('.searchbox');
const searchbox = document.querySelector('.searchbox > input');
const profileContainer = document.querySelector('.profile-section');

// searchbox.addEventListener('submit', e => {
//   e.preventDefault();
//   const login = searchbox.elements.login.value;
//   fetchUser(login).then(showProfile);
//   searchbox.reset();
// });

searchbox.addEventListener(
  'input',
  debounce(() => {
    fetchUser(searchbox.value)
      // .then(showProfile)
      .then(userdata => showProfile(userdata))
      //  catch(showError);
      .catch(error => showError(error));
  }, 300)
);

function showError(error) {
  console.log(error);
  profileContainer.innerHTML = 'Упс! Что-то пошло не так! Попробуйте еще раз!';
}

function showProfile({
  avatar_url,
  name,
  bio,
  public_repos,
  followers,
  following,
}) {
  profileContainer.innerHTML = `<div class="profile">
  <img src="${avatar_url}" class="avatar" alt="user avatar" width="120" height="120" />
  <div class="content">
    ${name ? `<h1 class="name">${name}</h1>` : ''}
    ${bio ? `<p class="bio">${bio}</p>` : ''}
    <ul class="stats">
      <li>Followers: <span>${followers}</span></li>
      <li>Following: <span>${following}</span></li>
      <li>Repos: <span>${public_repos}</span></li>
    </ul>
  </div>
  </div>`;
}
