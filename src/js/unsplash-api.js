'use strict';

export class UnsplashAPI {
  //#API_KEY = 'LxvKVGJqiSe6NcEVZOaLXC-f2JIIWZaq_o0WrF8mwJc';
  // My Access Key -  https://unsplash.com/oauth/applications/486726
  #API_KEY = 'L3IKHQI2AjVSJ-6WGYWweMH_kKk6loLeYXOjvicsLAk';
  #BASE_URL = 'https://api.unsplash.com';

  // Фиксированные параметры поиска
  baseSearchParams = {
    per_page: 12,
    //color: 'black_and_white',
    client_id: this.#API_KEY,
  };

  page = 1;

  query = null;

  fetchPhotos() {
    const searchParams = new URLSearchParams({
      // Эти параметры сделаем как фикисованные
      //per_page: 12,
      //color: 'black_and_white',
      //client_id: this.#API_KEY,
      // а тут будем распыливать базовые параметры
      ...this.baseSearchParams,
      query: this.query,
      page: this.page,
    });

    return fetch(`${this.#BASE_URL}/search/photos?${searchParams}`).then(
      response => {
        if (!response.ok) {
          throw new Error(response.status);
        }

        return response.json();
      }
    );
  }
}
