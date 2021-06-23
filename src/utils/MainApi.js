import { URL_MAIN_API } from './constants';

class Api {
  constructor(options) {
    ({ baseUrl: this._baseUrl } = options);
  }
  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return res.json().then(res => Promise.reject(res));
  }
  // Методы Карточек Фильмов

  getMovieCards(jwt) {
    return fetch(`${this._baseUrl}/movies`, {
      headers: {
        'Content-Type': 'application/json',
        'authorization': `Bearer ${jwt}`
      }
    }).then(
      this._checkResponse
    );
  }
  addCard(movieCard, jwt) {
    return fetch(`${this._baseUrl}/movies`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'authorization': `Bearer ${jwt}`
      },
      body: JSON.stringify(movieCard),
    }).then(this._checkResponse);
  }
  changeLikeCardStatus(movieCard, id, isLike, jwt) {
    return isLike ? this.addCard(movieCard, jwt) : this.deleteCard(id, jwt)
  }
  deleteCard(id, jwt) {
    return fetch(`${this._baseUrl}/movies/${id}`, {
      method: "DELETE",
      headers: {
        'Content-Type': 'application/json',
        'authorization': `Bearer ${jwt}`
      },
    }).then(this._checkResponse);
  }
  // Методы для users

  getUserInfo(jwt) {
    return fetch(`${this._baseUrl}/users/me`, {
      headers: {
        'Content-Type': 'application/json',
        'authorization': `Bearer ${jwt}`
      }
    }).then(
      this._checkResponse
    );
  }
  setUserInfo({ name, email }, jwt) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: "PATCH",
      headers: {
        'Content-Type': 'application/json',
        'authorization': `Bearer ${jwt}`
      },
      body: JSON.stringify({ name, email }),
    }).then(this._checkResponse);
  }
  // Методы sign

  sign({ name, email, password }, path) {
    const body = path === '/signin' ? JSON.stringify({ email, password })
      : JSON.stringify({ name, email, password });
    return fetch(`${this._baseUrl}${path}`, {
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      body: body,
    }).then(this._checkResponse);
  }

  checkToken(jwt) {
    return fetch(`${this._baseUrl}/users/me`, {
      headers: {
        'Content-Type': 'application/json',
        'authorization': `Bearer ${jwt}`
      },
    }).then(this._checkResponse);
  }
}
const mainApi = new Api({
  baseUrl: URL_MAIN_API,
});

export default mainApi;