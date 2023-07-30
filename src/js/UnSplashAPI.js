// api.unsplash.com - https://unsplash.com/developers
// unsplash.com/documentation#search-photos
// key - gcevo00lZKvSMKLnZZJPKYS5xNbpbsP_4i6E-BVlG58

// Классы которые отыечают только за запросы на Back
// https://api.unsplash.com/search/photos
// Сделаем как открывается страница загружалисьт популярные фото

export class UnsplashAPI {
  #BASE_URL = 'https://api.unsplash.com/search/photos';
  #API_KEY = 'gcevo00lZKvSMKLnZZJPKYS5xNbpbsP_4i6E-BVlG58';
  #query = '';
  #searchParams = new URLSearchParams({
    per_page: 12,
    orientation: 'portrait',
    client_id: this.#API_KEY,
  });

  getPopularImage(page) {
    // const url = `${
    //   this.#BASE_URL
    // }?page=${page}&query=popular&per_page=12&orientation=portrait&client_id=${
    //   this.#API_KEY
    // }`;
    const url = `${this.#BASE_URL}?page=${page}&query=popular&${
      this.#searchParams
    }`;
    return fetch(url).then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    });
  }

  getImageByQuery(page) {
    // const url = `${this.#BASE_URL}?page=${page}&query=${
    //   this.#query
    // }&per_page=12&orientation=portrait&client_id=${this.#API_KEY}`;
    const url = `${this.#BASE_URL}?page=${page}&query=${this.#query}&${
      this.#searchParams
    }`;
    return fetch(url).then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    });
  }

  set query(newQuery) {
    this.#query = newQuery;
  }
}

// В зависимости что вводжим в input
