'use strict';

export class JSONPlaceholderAPI {
  #BASE_URL = 'https://jsonplaceholder.typicode.com';

  limit = 25; //78
  page = 1;

  fetchPosts() {
    const searchParams = new URLSearchParams({
      _limit: this.limit,
      _page: this.page,
    });

    console.log(searchParams.toString());

    return fetch(`${this.#BASE_URL}/posts?${searchParams}`).then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }

      return response.json();
    });
  }
}
