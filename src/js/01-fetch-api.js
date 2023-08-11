/*
 * - HTTP-запросы в браузере
 *  - Fetch API
 *  - Владка Network
 *  - HTTP-методы
 *  - Заголовки
 *  - MIME-типы
 *  - Параметры запроса
 * - Документация REST API
 * - Обработка 404 с fetch
 * - Аутентификация
 * - Библиотеки-обёртки
 * - https://pokeapi.co/
 */

// - 1 -
// Вернет Promise + then + catch + ...
// const r = fetch('https://pokeapi.co/api/v2/pokemon/2');
// console.log(r);

// - 2 -
// Вернет Response (обьект) это еще не данные - экземпляр класса Response
// + body это и есть данные, которые нужно расскодировать - 3 метода - blob json text(csv)
// fetch('https://pokeapi.co/api/v2/pokemon/2').then(data => {
//   console.log(data);
// });

// - 3 -
// Вернет конкретного pokemon-а
//-fetch('https://pokeapi.co/api/v2/pokemon/2')
// fetch('https://pokeapi.co/api/v2/pokemon/')
//   .then(response => {
//     //console.log(response.json()); // вернет еще один Promise и его возвращаем в следующий then
//     return response.json();
//   })
//   .then(pokemon => console.log(pokemon))
//   .catch(error => console.log(error));

// - 4 -
// Добавим шаблоН
// import '../css/common-r.css';
// import pokemonCardTpl from '../templates/pokemon-card.hbs';
// fetch('https://pokeapi.co/api/v2/pokemon/2')
//   .then(response => {
//     return response.json();
//   })
//   .then(pokemon => {
//     console.log(pokemon);
//     const markup = pokemonCardTpl(pokemon);
//     console.log(markup);
//   })
//   .catch(error => console.log(error));

// - 5 - Это и называется AJAX асинхронній JS и XML
// import '../css/common-r.css';
// import pokemonCardTpl from '../templates/pokemon-card.hbs';

// const refs = {
//   cardContainer: document.querySelector('.js-card-container'),
// };

// fetch('https://pokeapi.co/api/v2/pokemon/2')
//   .then(response => {
//     return response.json();
//   })
//   .then(pokemon => {
//     console.log(pokemon);
//     const markup = pokemonCardTpl(pokemon);
//     console.log(markup);
//     refs.cardContainer.innerHTML = markup;
//   })
//   .catch(error => console.log(error));

// - 6 - Улучшаем код
// import '../css/common-r.css';
// import pokemonCardTpl from '../templates/pokemon-card.hbs';

// const refs = {
//   cardContainer: document.querySelector('.js-card-container'),
// };

// fetch('https://pokeapi.co/api/v2/pokemon/2')
//   .then(response => {
//     return response.json();
//   })
//   .then(renderPokemonCard)
//   .catch(error => console.log(error));

// function renderPokemonCard(pokemon) {
//   const markup = pokemonCardTpl(pokemon);
//   refs.cardContainer.innerHTML = markup;
// }

// - 7 - Улучшаем код
// import '../css/common-r.css';
// import pokemonCardTpl from '../templates/pokemon-card.hbs';

// const refs = {
//   cardContainer: document.querySelector('.js-card-container'),
// };

// fetchPokemon();

// function fetchPokemon() {
//   fetch('https://pokeapi.co/api/v2/pokemon/2')
//     .then(response => {
//       return response.json();
//     })
//     .then(renderPokemonCard)
//     .catch(error => console.log(error));
// }

// function renderPokemonCard(pokemon) {
//   const markup = pokemonCardTpl(pokemon);
//   refs.cardContainer.innerHTML = markup;
// }

// - 8 - Улучшаем код
// import '../css/common-r.css';
// import pokemonCardTpl from '../templates/pokemon-card.hbs';

// const refs = {
//   cardContainer: document.querySelector('.js-card-container'),
// };

// fetchPokemon()
//   .then(renderPokemonCard)
//   .catch(error => console.log(error));

// // Фунция должна вернуть из себя Промис (функция которая забирает данные и
// // которая рисует данные по хорошему  про друг друга не должны )
// function fetchPokemon() {
//   return fetch('https://pokeapi.co/api/v2/pokemon/2').then(response => {
//     return response.json();
//   });
// }

// function renderPokemonCard(pokemon) {
//   const markup = pokemonCardTpl(pokemon);
//   refs.cardContainer.innerHTML = markup;
// }

// - 9 - Делаем настраиваемую функцию (через передачю параметра и интерполяцию)
// import '../css/common-r.css';
// import pokemonCardTpl from '../templates/pokemon-card.hbs';

// const refs = {
//   cardContainer: document.querySelector('.js-card-container'),
// };

// fetchPokemon(2)
//   .then(renderPokemonCard)
//   .catch(error => console.log(error));

// // Фунция должна вернуть из себя Промис (функция которая забирает данные и
// // которая рисует данные по хорошему  про друг друга не должны )
// function fetchPokemon(pokemonId) {
//   return fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`).then(
//     response => {
//       return response.json();
//     }
//   );
// }

// function renderPokemonCard(pokemon) {
//   const markup = pokemonCardTpl(pokemon);
//   refs.cardContainer.innerHTML = markup;
// }

// - 10 - Делаем настраиваемую функцию (через передачю параметра и интерполяцию)
// import '../css/common-r.css';
// import pokemonCardTpl from '../templates/pokemon-card.hbs';

// const refs = {
//   cardContainer: document.querySelector('.js-card-container'),
//   searchForm: document.querySelector('.js-search-form'),
// };

// refs.searchForm.addEventListener('submit', onSeaarch);

// function onSeaarch(e) {
//   e.preventDefault();

//   const form = e.currentTarget;
//   console.log(form.elements);
//   const searchQuery = form.elements.query.value;

//   fetchPokemon(searchQuery)
//     .then(renderPokemonCard)
//     .catch(error => console.log(error))
//     .finally(() => form.reset());
// }

// // Фунция должна вернуть из себя Промис (функция которая забирает данные и
// // которая рисует данные по хорошему  про друг друга не должны )
// function fetchPokemon(pokemonId) {
//   return fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`).then(
//     response => {
//       return response.json();
//     }
//   );
// }

// function renderPokemonCard(pokemon) {
//   const markup = pokemonCardTpl(pokemon);
//   refs.cardContainer.innerHTML = markup;
// }

//-------------------------------------------------------
import '../css/common-r.css';
import pokemonCardTpl from '../templates/pokemon-card.hbs';
import API from './api-service';
import getRefs from './get-refs';

const refs = getRefs();

refs.searchForm.addEventListener('submit', onSearch);

function onSearch(e) {
  e.preventDefault();

  const form = e.currentTarget;
  const searchQuery = form.elements.query.value;

  API.fetchPokemon(searchQuery)
    .then(renderPokemonCard)
    .catch(onFetchError)
    .finally(() => form.reset());
}

function renderPokemonCard(pokemon) {
  const markup = pokemonCardTpl(pokemon);
  refs.cardContainer.innerHTML = markup;
}

function onFetchError(error) {
  alert('Упс, что-то пошло не так и мы не нашли вашего покемона!');
}

// =========================================

// fetch('https://pokeapi.co/api/v2/pokemon?limit=100&offset=200')
//   .then(r => r.json())
//   .then(console.log);

// fetch(
//   'https://pixabay.com/api/?key=38570888-30e5be38999b280f1014d2377&q=cats&image_type=vector&orientation=vertical'
// )
//   .then(r => r.json())
//   .then(console.log);
//previewURL : "https://cdn.pixabay.com/photo/2013/07/13/13/14/tiger-160601_150.png"
//webformatURL: "https://pixabay.com/get/gbac03fc7970b76e64a7b00efd78945cca2559d00d5e0dded0a540772a323ce967984cc6d8cffeb4f62b42d6cb6a9b945_640.png"

// https://weatherstack.com/ 23eb0a47a81193e24239b74810049765
// fetch(
//   'http://api.weatherstack.com/current?access_key=23eb0a47a81193e24239b74810049765&query=London'
// )
//   .then(r => r.json())
//   .then(console.log);

const url = 'https://newsapi.org/v2/everything?q=cars';
const options = {
  headers: {
    //Authorization: '4330ebfabc654a6992c2aa792f3173a3',
    Authorization: 'd1e96ddc4e994b60941e5290bbd43e7d',
    //X-Api-Key
  },
};

fetch(url, options)
  .then(r => r.json())
  .then(console.log);
