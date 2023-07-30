import { createGalleryCard } from './createGalleryCard';
import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.min.css';
import { UnsplashAPI } from './UnSplashAPI';

const apiGallery = new UnsplashAPI();

const container = document.getElementById('tui-pagination-container');
// ниже
const options = {
  // below default value of options
  totalItems: 0,
  itemsPerPage: 12,
  visiblePages: 5,
  page: 1,
  template: {
    page: '<a href="#" class="tui-page-btn">{{page}}</a>',
    currentPage:
      '<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',
    moveButton:
      '<a href="#" class="tui-page-btn tui-{{type}}">' +
      '<span class="tui-ico-{{type}}">{{type}}</span>' +
      '</a>',
    disabledMoveButton:
      '<span class="tui-page-btn tui-is-disabled tui-{{type}}">' +
      '<span class="tui-ico-{{type}}">{{type}}</span>' +
      '</span>',
    moreButton:
      '<a href="#" class="tui-page-btn tui-{{type}}-is-ellip">' +
      '<span class="tui-ico-ellip">...</span>' +
      '</a>',
  },
};
const pagination = new Pagination(container, options); //instance

const page = pagination.getCurrentPage(); // Вызов для получения текущей стрницы, которая сейчас открыты

const galleryRef = document.querySelector('.js-gallery');
const form = document.querySelector('.js-search-form');

form.addEventListener('submit', onSubmitForm);

// Эта функция возвращает promise. Запросим 1 страничку
//apiDallery.getPopularImage(1).then(data => console.log(data));
//apiDallery.getPopularImage(1).then(({ results, total }) => {
//   console.log(results);
//   console.log(total);
// });

// Хорошая практика - Функции, которые создают разметику выносить в отделье файлы
apiGallery.getPopularImage(page).then(({ results, total }) => {
  pagination.reset(total);
  const markup = createGalleryCard(results);
  galleryRef.innerHTML = markup;
});

// Слушатель событий для кнопок - https://nhn.github.io/tui.pagination/latest/Pagination#event-afterMove
// Нужно вынести в отдельную функцию, чтобфі не дублировать код
// и когда делаем поиск по query нужно отписаться.
// pagination.on('afterMove', event => {
//   const currentPage = event.page;
//   //console.log(currentPage);
//   apiGallery.getPopularImage(currentPage).then(({ results, total }) => {
//     const markup = createGalleryCard(results);
//     galleryRef.innerHTML = markup;
//   });
// });
pagination.on('afterMove', getPopular);

function onSubmitForm(event) {
  event.preventDefault();
  const { query } = event.target.elements;
  const searchQuery = query.value.trim();
  if (!searchQuery) {
    return Notify.failure('Enter something');
  }
  apiGallery.query = searchQuery;
  // Отписаться от прослушт=ивания на популярныек изначально заправшиваемые каритнки
  pagination.off('afterMove', getPopular);
  // Отписываемся от прослушивания для новых поисков, чтобы не множились запросы
  pagination.off('afterMove', getByQuery);
  apiGallery.getImageByQuery(page).then(({ results, total }) => {
    pagination.reset(total);
    const markup = createGalleryCard(results);
    galleryRef.innerHTML = markup;
  });

  pagination.on('afterMove', getByQuery);
}

function getPopular(event) {
  const currentPage = event.page;
  //console.log(currentPage);
  apiGallery.getPopularImage(currentPage).then(({ results, total }) => {
    const markup = createGalleryCard(results);
    galleryRef.innerHTML = markup;
  });
}

function getByQuery(event) {
  const currentPage = event.page;
  //console.log(currentPage);
  apiGallery.getImageByQuery(currentPage).then(({ results, total }) => {
    const markup = createGalleryCard(results);
    galleryRef.innerHTML = markup;
  });
}
