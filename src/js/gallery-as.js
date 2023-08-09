'use strict';

import { UnsplashAPI } from './unsplash-api';
import createGalleryCards from '../templates/gallery-card.hbs';

const searchFormEl = document.querySelector('.js-search-form');
const galleryListEl = document.querySelector('.js-gallery');
const loadMoreBtnEl = document.querySelector('.js-load-more');

const unsplashApiInstance = new UnsplashAPI();

//console.log(unsplashApiInstance);

const handleSearchFormSubmit = event => {
  event.preventDefault();

  console.log(event.target.elements);
  //console.dir(event.target.elements.user - search - query.value);
  console.log(event.currentTarget.elements);
  //console.dir(.elements.user - search - query.value);
  console.log(event.target.firstElementChild.value);

  console.log(event);
  const searchQuery = event.target.firstElementChild.value.trim();

  if (!searchQuery) {
    return;
  }

  unsplashApiInstance.query = searchQuery;

  unsplashApiInstance
    .fetchPhotos()
    .then(data => {
      console.log(data);
      galleryListEl.innerHTML = createGalleryCards(data.results);

      if (data.total_pages <= 1) {
        loadMoreBtnEl.classList.add('is-hidden');
      } else {
        loadMoreBtnEl.classList.remove('is-hidden');
      }
    })
    .catch(console.warn);
};

const handleLoadMoreBtnClick = () => {
  unsplashApiInstance.page += 1;

  unsplashApiInstance
    .fetchPhotos()
    .then(data => {
      if (unsplashApiInstance.page >= data.total_pages) {
        loadMoreBtnEl.classList.add('is-hidden');
      }

      galleryListEl.insertAdjacentHTML(
        'beforeend',
        createGalleryCards(data.results)
      );
    })
    .catch(console.warn);
};

searchFormEl.addEventListener('submit', handleSearchFormSubmit);

loadMoreBtnEl.addEventListener('click', handleLoadMoreBtnClick);
