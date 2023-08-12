/*
 * - Пагинация
 *   - страница и кол-во на странице
 * - Загружаем статьи при сабмите формы
 * - Загружаем статьи при нажатии на кнопку «Загрузить еще»
 * - Обновляем страницу в параметрах запроса
 * - Рисуем статьи
 * - Сброс значения при поиске по новому критерию
 *
 * https://newsapi.org/
 * 4330ebfabc654a6992c2aa792f3173a3
 * http://newsapi.org/v2/everything?q=cat&language=en&pageSize=5&page=1
 */

// - 1
// import './css/common-r-pag.css';
// const options = {
//   headers: {
//     Authorization: 'd1e96ddc4e994b60941e5290bbd43e7d',
//   },
// };

// const url =
//   'https://newsapi.org/v2/everything?q=cat&language=en&pageSize=5&page=1';

// fetch(url, options)
//   .then(r => r.json())
//   .then(console.log);

// - 2
// import './css/common-r-pag.css';
// const refs = {
//   searchForm: document.querySelector('.js-search-form'),
//   articlesContainer: document.querySelector('.js-articles-container'),
// };

// refs.searchForm.addEventListener('submit', onSearch);

// function onSearch(e) {
//   e.preventDefault();

//   const searchQuery = e.currentTarget.elements.query.value;

//   const options = {
//     headers: {
//       Authorization: 'd1e96ddc4e994b60941e5290bbd43e7d',
//     },
//   };

//   const url = `https://newsapi.org/v2/everything?q=${searchQuery}&language=en&pageSize=5&page=1`;

//   fetch(url, options)
//     .then(r => r.json())
//     .then(console.log);
// }

// - 3
// Вопрос - а не лучше брать value из inpute а не из currentTarget-
// Попробуй взять в ./js/on-search значения этих refs ?
// import './css/common-r-pag.css';
// import onSearch from './js/on-search';

// const refs = {
//   searchForm: document.querySelector('.js-search-form'),
//   articlesContainer: document.querySelector('.js-articles-container'),
// };

// refs.searchForm.addEventListener('submit', onSearch);

//-4;
// Пока оставим в одном файле чтобы не потеряться
// import './css/common-r-pag.css';

// const refs = {
//   searchForm: document.querySelector('.js-search-form'),
//   articlesContainer: document.querySelector('.js-articles-container'),
//   loadMoreBtn: document.querySelector('[data-action="load-more"]'),
// };

// refs.searchForm.addEventListener('submit', onSearch);
// refs.loadMoreBtn.addEventListener('click', onLoadMore);

// let searchQuery = '';

// function onSearch(e) {
//   e.preventDefault();

//   searchQuery = e.currentTarget.elements.query.value;

//   const options = {
//     headers: {
//       Authorization: 'd1e96ddc4e994b60941e5290bbd43e7d',
//     },
//   };

//   const url = `https://newsapi.org/v2/everything?q=${searchQuery}&language=en&pageSize=5&page=1`;
//   fetch(url, options)
//     .then(r => r.json())
//     .then(console.log);
// }

// function onLoadMore() {
//   const options = {
//     headers: {
//       Authorization: 'd1e96ddc4e994b60941e5290bbd43e7d',
//     },
//   };

//   const url = `https://newsapi.org/v2/everything?q=${searchQuery}&language=en&pageSize=5&page=1`;
//   fetch(url, options)
//     .then(r => r.json())
//     .then(console.log);
// }

// // - 5
// // !!! Логика работы с API и прорисовки интерфейса должны быть разные функциями
// import './css/common-r-pag.css';
// import NewsApiService from './js/news-service';

// const refs = {
//   searchForm: document.querySelector('.js-search-form'),
//   articlesContainer: document.querySelector('.js-articles-container'),
//   loadMoreBtn: document.querySelector('[data-action="load-more"]'),
// };

// const newsApiService = new NewsApiService();

// refs.searchForm.addEventListener('submit', onSearch);
// refs.loadMoreBtn.addEventListener('click', onLoadMore);

// let searchQuery = '';

// function onSearch(e) {
//   e.preventDefault();

//   searchQuery = e.currentTarget.elements.query.value;
//   newsApiService.fetchArticles(searchQuery);
// }

// function onLoadMore() {
//   newsApiService.fetchArticles(searchQuery);
// }

// // - 6
// // !!! Логика работы с API и прорисовки интерфейса должны быть разные функциями
// import './css/common-r-pag.css';
// import NewsApiService from './js/news-service';

// const refs = {
//   searchForm: document.querySelector('.js-search-form'),
//   articlesContainer: document.querySelector('.js-articles-container'),
//   loadMoreBtn: document.querySelector('[data-action="load-more"]'),
// };

// const newsApiService = new NewsApiService();
// console.log(newsApiService);

// refs.searchForm.addEventListener('submit', onSearch);
// refs.loadMoreBtn.addEventListener('click', onLoadMore);

// //- let searchQuery = '';

// function onSearch(e) {
//   e.preventDefault();

//   //-searchQuery = e.currentTarget.elements.query.value;
//   newsApiService.query = e.currentTarget.elements.query.value;
//   newsApiService.fetchArticles();
// }

// function onLoadMore() {
//   newsApiService.fetchArticles();
// }

// // - 7
// // !!! Логика работы с API и прорисовки интерфейса должны быть разные функциями
// import './css/common-r-pag.css';
// import NewsApiService from './js/news-service';

// const refs = {
//   searchForm: document.querySelector('.js-search-form'),
//   articlesContainer: document.querySelector('.js-articles-container'),
//   loadMoreBtn: document.querySelector('[data-action="load-more"]'),
// };

// const newsApiService = new NewsApiService();
// console.log(newsApiService);

// refs.searchForm.addEventListener('submit', onSearch);
// refs.loadMoreBtn.addEventListener('click', onLoadMore);

// //- let searchQuery = '';

// function onSearch(e) {
//   e.preventDefault();

//   //-searchQuery = e.currentTarget.elements.query.value;
//   newsApiService.query = e.currentTarget.elements.query.value;
//   newsApiService.resetPage();
//   newsApiService.fetchArticles();
// }

// function onLoadMore() {
//   newsApiService.fetchArticles();
// }

// // - 8 - Теперь рисуем
// // !!! Логика работы с API и прорисовки интерфейса должны быть разные функциями
// import articlesTpl from './templates/articles.hbs';
// import './css/common-r-pag.css';
// import NewsApiService from './js/news-service';

// const refs = {
//   searchForm: document.querySelector('.js-search-form'),
//   articlesContainer: document.querySelector('.js-articles-container'),
//   loadMoreBtn: document.querySelector('[data-action="load-more"]'),
// };

// const newsApiService = new NewsApiService();
// console.log(newsApiService);

// refs.searchForm.addEventListener('submit', onSearch);
// refs.loadMoreBtn.addEventListener('click', onLoadMore);

// function onSearch(e) {
//   e.preventDefault();

//   // не дождаться пока придут dog, очистить cat
//   //clearArticlesContainer();
//   newsApiService.query = e.currentTarget.elements.query.value;

//   if (newsApiService.query === '') {
//     return alert('Введи что-то нормальное');
//   }

//   newsApiService.resetPage();
//   //newsApiService.fetchArticles().then(articles => console.log(articles));
//   //newsApiService.fetchArticles().then(appendArticlesMarkup);
//   newsApiService.fetchArticles().then(articles => {
//     // дождаться пока придут dog , а потом очистить cat
//     clearArticlesContainer();
//     appendArticlesMarkup(articles);
//   });
// }

// function onLoadMore() {
//   //newsApiService.fetchArticles().then(articles => console.log(articles));
//   newsApiService.fetchArticles().then(appendArticlesMarkup);
// }

// function appendArticlesMarkup(articles) {
//   refs.articlesContainer.insertAdjacentHTML('beforeend', articlesTpl(articles));
// }

// function clearArticlesContainer() {
//   refs.articlesContainer.innerHTML = '';
// }

//===========

import articlesTpl from './templates/articles.hbs';
import './css/common-r-pag.css';
import NewsApiService from './js/news-service';
import LoadMoreBtn from './js/components/load-more-btn';

const refs = {
  searchForm: document.querySelector('.js-search-form'),
  articlesContainer: document.querySelector('.js-articles-container'),
};
const loadMoreBtn = new LoadMoreBtn({
  selector: '[data-action="load-more"]',
  hidden: true,
});
const newsApiService = new NewsApiService();

console.log(loadMoreBtn);
//loadMoreBtn.show();
//loadMoreBtn.disable();
//loadMoreBtn.enable();

refs.searchForm.addEventListener('submit', onSearch);
loadMoreBtn.refs.button.addEventListener('click', fetchArticles); // onLOadMore

function onSearch(e) {
  e.preventDefault();

  newsApiService.query = e.currentTarget.elements.query.value;

  if (newsApiService.query === '') {
    return alert('Введи что-то нормальное');
  }

  loadMoreBtn.show();
  newsApiService.resetPage();
  clearArticlesContainer();
  fetchArticles();
}

// onLoadMore
function fetchArticles() {
  loadMoreBtn.disable();
  newsApiService.fetchArticles().then(articles => {
    appendArticlesMarkup(articles);
    loadMoreBtn.enable();
  });
}

function appendArticlesMarkup(articles) {
  refs.articlesContainer.insertAdjacentHTML('beforeend', articlesTpl(articles));
}

function clearArticlesContainer() {
  refs.articlesContainer.innerHTML = '';
}
