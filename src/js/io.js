/**
 * Typical Observer's registration
 */
const callback = (entries, io) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      console.log('Привет из колбека в forEach');
      // console.log(entry);
      // console.log(entry.isIntersecting);
      console.log(entry.target);
    }
  });
};
const options = {
  // rootMargin: '100px',
  // threshold: 0.5,
};
const observer = new IntersectionObserver(callback, options);

const sentinel = document.querySelector('#sentinel');
observer.observe(sentinel);

// test
// css in  common-r-infscr.css
// #sentinel {
//   /* width: 500px;
//   height: 500px;
//   background-color: tomato; */
// }
