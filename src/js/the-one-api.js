const BASE_URL = 'https://the-one-api.dev/v2/';
const END_POINT = 'character';
const KEY = 'YZ3dzviq1QC3f0oHGhfv';

function getCharacter() {
  //const option = new URLSearchParams({
  const param = new URLSearchParams({
    limit: 30,
    page: 1,
  });

  const option = {
    method: 'GET', // POST + body;
    headers: {
      Authorization: `Bearer ${KEY}`,
    },
  };

  //   fetch(`${BASE_URL}${END_POINT}?${option}`).then(resp => console.log(resp));
  fetch(`${BASE_URL}${END_POINT}?${param}`, option).then(resp =>
    console.log(resp)
  );
}

// getCharacter();

getCharacter();
const target = document.querySelector('.js-guard');
let options = {
  root: null,
  rootMargin: '200px',
  threshold: 1.0,
};
