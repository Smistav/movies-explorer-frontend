import { URL_MOVIES_API } from './constants';

class MoviesApi {
  constructor(options) {
    ({ baseUrl: this._baseUrl } = options);
  }
  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка ${res.status}`);
  }
  // Метод Карточек Фильмов

  getMovieCards() {
    return fetch(this._baseUrl, {
      headers: {
        'Content-Type': 'application/json',
      }
    }).then(
      this._checkResponse
    );

  }
}
const moviesApi = new MoviesApi({
  baseUrl: URL_MOVIES_API,
});

export default moviesApi;