import { URL_MAIN_API } from './constants';

class Api {
  constructor(options) {
    ({ baseUrl: this._baseUrl } = options);
  }
  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка ${res.status}`);
  }
  // Методы Карточек Фильмов

  getMovieCards(jwt) {
    return fetch(this._baseUrl + '/movies', {
      headers: {
        'Content-Type': 'application/json',
        'authorization': `Bearer ${jwt}`
      }
    }).then(
      this._checkResponse
    );
  }
  setLikeCard(movieCard, jwt) {// Добавить поля или передать объект полностью посмотреть
    return fetch(`${this._baseUrl}/movies`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'authorization': `Bearer ${jwt}`
      },
      body: JSON.stringify(movieCard),
    }).then(this._checkResponse);
  }
  // changeLikeCardStatus({ ...fields }, id, isLike, jwt) {
  //   return isLike ? this.addNewCard({ ...fields }, jwt) : this.deleteCard(id, jwt)
  // }
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
        // 'authorization': `Bearer ${jwt}`
      }
    }).then(
      this._checkResponse
    );
  }
  setUserInfo({ name, email }, jwt) {
    return fetch(this._baseUrl + "/users/me", {
      method: "PATCH",
      headers: {
        'Content-Type': 'application/json',
        'authorization': `Bearer ${jwt}`
      },
      body: JSON.stringify({ name, email }),
    }).then(this._checkResponse);
  }
  // Методы sign

  signin({ email, password }) {
    return fetch(this._baseUrl, {
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    }).then(this._checkResponse);
  }
  signup({ name, email, password }) {
    return fetch(this._baseUrl, {
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, password }),
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