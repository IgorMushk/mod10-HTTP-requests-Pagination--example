// // - 5 + news-service.js
// // !!! Логика работы с API и прорисовки интерфейса должны быть разные функциями
// export default class NewApiService {
//   constructor() {}

//   fetchArticles(searchQuery) {
//     const options = {
//       headers: {
//         Authorization: 'd1e96ddc4e994b60941e5290bbd43e7d',
//       },
//     };

//     const url = `https://newsapi.org/v2/everything?q=${searchQuery}&language=en&pageSize=5&page=1`;

//     fetch(url, options)
//       .then(r => r.json())
//       .then(console.log);
//   }
// }

// // - 6
// export default class NewApiService {
//   constructor() {
//     this.searchQuery = '';
//   }

//   fetchArticles() {
//     console.log(this);
//     const options = {
//       headers: {
//         Authorization: 'd1e96ddc4e994b60941e5290bbd43e7d',
//       },
//     };

//     const url = `https://newsapi.org/v2/everything?q=${this.searchQuery}&language=en&pageSize=5&page=1`;

//     fetch(url, options)
//       .then(r => r.json())
//       .then(console.log);
//   }

//   get query() {
//     return this.searchQuery;
//   }

//   set query(newQuery) {
//     this.searchQuery = newQuery;
//   }
// }

// // - 7
// export default class NewApiService {
//   constructor() {
//     this.searchQuery = '';
//     this.page = 1;
//   }

//   fetchArticles() {
//     console.log('До запроса объект: ', this);
//     const options = {
//       headers: {
//         Authorization: 'd1e96ddc4e994b60941e5290bbd43e7d',
//       },
//     };

//     const url = `https://newsapi.org/v2/everything?q=${this.searchQuery}&language=en&pageSize=5&page=${this.page}`;

//     fetch(url, options)
//       .then(r => r.json())
//       //-.then(console.log);
//       .then(data => {
//         console.log(data);
//         // если результат запроса успешный мы page увеличиывем на 1
//         //this.page += 1;
//         this.incrementPage();
//         console.log('После запроса объект если все ok: ', this);
//       });
//   }

//   incrementPage() {
//     this.page += 1;
//   }

//   resetPage() {
//     this.page = 1;
//   }

//   get query() {
//     return this.searchQuery;
//   }

//   set query(newQuery) {
//     this.searchQuery = newQuery;
//   }
// }

// //  - 8
// export default class NewApiService {
//   constructor() {
//     this.searchQuery = '';
//     this.page = 1;
//   }

//   fetchArticles() {
//     console.log('До запроса объект: ', this);
//     const options = {
//       headers: {
//         Authorization: 'd1e96ddc4e994b60941e5290bbd43e7d',
//       },
//     };

//     const url = `https://newsapi.org/v2/everything?q=${this.searchQuery}&language=en&pageSize=5&page=${this.page}`;

//     return fetch(url, options)
//       .then(r => r.json())
//       .then(data => {
//         //-.then(console.log);
//         console.log(data);
//         // если результат запроса успешный мы page увеличиывем на 1
//         //this.page += 1;
//         this.incrementPage();
//         console.log('После запроса объект если все ok: ', this);
//         return data.articles;
//       });
//   }

//   incrementPage() {
//     this.page += 1;
//   }

//   resetPage() {
//     this.page = 1;
//   }

//   get query() {
//     return this.searchQuery;
//   }

//   set query(newQuery) {
//     this.searchQuery = newQuery;
//   }
// }

// //===========
// const API_KEY = '4330ebfabc654a6992c2aa792f3173a3';
// My;
const API_KEY = 'd1e96ddc4e994b60941e5290bbd43e7d';
const BASE_URL = 'https://newsapi.org/v2';
const options = {
  headers: {
    Authorization: API_KEY,
  },
};

export default class NewsApiService {
  constructor() {
    this.searchQuery = '';
    this.page = 1;
  }

  fetchArticles() {
    const url = `${BASE_URL}/everything?q=${this.searchQuery}&language=en&pageSize=5&page=${this.page}`;

    return fetch(url, options)
      .then(response => response.json())
      .then(({ articles }) => {
        this.incrementPage();
        return articles;
      });
  }

  incrementPage() {
    this.page += 1;
  }

  resetPage() {
    this.page = 1;
  }

  get query() {
    return this.searchQuery;
  }

  set query(newQuery) {
    this.searchQuery = newQuery;
  }
}
