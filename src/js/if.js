import InfiniteScroll from 'infinite-scroll';

//+
console.log(InfiniteScroll);

// var unsplashID =
//   '9ad80b14098bcead9c7de952435e937cc3723ae61084ba8e729adb642daf0251';
var unsplashID = 'L3IKHQI2AjVSJ-6WGYWweMH_kKk6loLeYXOjvicsLAk';

const infScroll = new InfiniteScroll('.container', {
  responseType: 'text',
  history: false,
  path() {
    //return `https://newsapi.org/v2/everything?q=bitcoin&apiKey=bb47a995514a49758140b073ef1103f5`;
    return `https://newsapi.org/v2/everything?q=bitcoin&apiKey=d1e96ddc4e994b60941e5290bbd43e7d`;
    //- 400 -
    //return `https://api.unsplash.com/search/photos?client_id=${unsplashID}&page=${this.pageIndex}`;
  },
});

// + ok
// fetch(
//   `https://newsapi.org/v2/everything?q=bitcoin&apiKey=d1e96ddc4e994b60941e5290bbd43e7d&pageSize=5&page=1`
// );

// - err 400 -
// fetch(
//   `https://api.unsplash.com/search/photos?client_id=ZZnPIBEQmYg0Piwf2Ikb52Rownl_w4UDopcPBlNfuA4`
// );

//+
console.log(infScroll);

infScroll.loadNextPage();
//+
// setTimeout(() => {
//   infScroll.loadNextPage();
// }, 1000);

infScroll.on('load', (response, path) => {
  console.log(JSON.parse(response));
  console.log(path);

  // тут по шаблну сделали строку с тегами
  // потом кинули в фрагмент
  // фрагмент передали в infScroll.appendItems(фоагмент)
});

// const markup = '<p>qweqweqwe</p>';
// const fragment = new DocumentFragment();
// const d = document.createElement('div');
// fragment.innerHTML = markup;
// console.log(fragment);
