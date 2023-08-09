'use strict';

// --
// const BASE_URL = 'https://jsonplaceholder.typicode.com';

// //fetch(`${BASE_URL}/posts`)
// fetch(`${BASE_URL}/posts?_limit=25&_page=4`)
//   .then(response => {
//     if (!response.ok) {
//       throw new Error(response.status);
//     }

//     return response.json();
//   })
//   .then(console.log)
//   .catch(console.warn);
// --

import { JSONPlaceholderAPI } from './jsonplaceholder-api';
import createPostsCards from '../templates/posts.hbs';

const POSTS_COUNT = 100;

const postsWrapperEl = document.querySelector('.js-posts');
const loadMoreBtnEl = document.querySelector('.js-load-more');

const jsonplaceholderInstance = new JSONPlaceholderAPI();

console.log(jsonplaceholderInstance);
//jsonplaceholderInstance.fetchPosts().then(console.log).catch(console.warn);

jsonplaceholderInstance
  .fetchPosts()
  .then(data => {
    console.log(data);
    postsWrapperEl.innerHTML = createPostsCards(data);

    loadMoreBtnEl.classList.remove('is-hidden');
  })
  .catch(console.warn);

const handleLoadMoreBtnClick = () => {
  jsonplaceholderInstance.page += 1;

  const { limit, page } = jsonplaceholderInstance;

  if (POSTS_COUNT <= limit * page) {
    loadMoreBtnEl.classList.add('is-hidden');
  }

  jsonplaceholderInstance
    .fetchPosts()
    .then(data => {
      postsWrapperEl.insertAdjacentHTML('beforeend', createPostsCards(data));
    })
    .catch(console.warn);
};

loadMoreBtnEl.addEventListener('click', handleLoadMoreBtnClick);
