// - 3
//  Вопрос - а не лучше брать value из inpute а не из currentTarget-
//  Как взять в ./js/on-search значения  refs searchForm articlesContainer?
// export default function onSearch(e) {
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
