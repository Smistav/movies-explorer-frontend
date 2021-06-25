// JWT
export const JWT = 'jwt';
// Блок URL
export const URL_SERVER_MOVIES_API = "https://api.nomoreparties.co"
export const URL_MAIN_API = "https://api.smistav.nomoredomains.icu";
export const URL_MOVIES_API = "https://api.nomoreparties.co/beatfilm-movies";
// Блок CARDS
export const ADD_CARDS_1280 = 3;
export const ADD_CARDS_768_320 = 2;
export const INIT_CARDS_1280 = 12;
export const INIT_CARDS_768 = 8;
export const INIT_CARDS_320 = 5;
// Movies
export const SHORT_MOVIES_DURATION = 40;
//Form
export const MIN_LENGTH_PASSWORD = '2';
export const MAX_LENGTH_PASSWORD = '100';
export const MIN_LENGTH_EMAIL = '2';
export const MAX_LENGTH_EMAIL = '40';
export const MIN_LENGTH_NAME = '2';
export const MAX_LENGTH_NAME = '40';
//Блок ERROR
export const ERROR_QUERY = "Во время запроса произошла ошибка.Возможно, проблема с соединением или сервер недоступен.Подождите немного и попробуйте ещё раз";
export const EMPTY_QUERY = "Нужно ввести ключевое слово";
export const EMPTY_RESULT = "Ничего не найдено";
export const OK_RESULT_API = 'Изменения успешно приняты';
export const POPUP_ERROR = 'Что то пошло не так... Просьба обратиться в службу поддержки';
// Form Input
export const PATTERN_NAME = '^[a-zA-Zа-яёА-ЯЁ -]{2,30}$';
//Страницы
export const MAIN_PAGE = '/';
export const MOVIES_PAGE = '/movies';
export const SAVED_MOVIES_PAGE = '/saved-movies';
export const PROFILE_PAGE = '/profile';
export const LOGIN_PAGE = '/signin';
export const REGISTER_PAGE = '/signup';
export const PAGE_WITHOUT_AUTH = [MAIN_PAGE, LOGIN_PAGE, REGISTER_PAGE];
//LocalStorage
export const LS_CARDS = 'cards';
export const LS_SAVED_CARDS = 'saved-cards';
export const LS_FILTERED_CARDS = 'filtered-cards';
export const LS_FILTERED_SAVED_CARDS = 'filtered-saved-cards';