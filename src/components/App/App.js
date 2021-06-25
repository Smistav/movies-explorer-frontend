import { useEffect, useState } from "react";
import {
  Route, Switch, useHistory,
  // useLocation 
} from "react-router-dom";
import Main from "../Main/Main";
import Header from "../Header/Header";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import Login from "../Login/Login";
import Register from "../Register/Register";
import Footer from "../Footer/Footer";
import PageNotFound from "../PageNotFound/PageNotFound";
import mainApi from "../../utils/MainApi";
import moviesApi from "../../utils/MoviesApi";
import './App.css';
import {
  URL_SERVER_MOVIES_API, OK_RESULT_API,
  // PAGE_WITHOUT_AUTH, 
  JWT, LS_CARDS, LS_SAVED_CARDS,
  LS_FILTERED_CARDS, LS_FILTERED_SAVED_CARDS, MAIN_PAGE, MOVIES_PAGE, SAVED_MOVIES_PAGE,
  PROFILE_PAGE, LOGIN_PAGE, REGISTER_PAGE, POPUP_ERROR
} from "../../utils/constants";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";

function App() {
  const [logged, setLogged] = useState(false);
  const [currentUser, setCurrentUser] = useState({ name: "", email: "" }); // данные пользователя
  const [cards, setCards] = useState([]); // Все карточки MovieApi
  const [savedCards, setSavedCards] = useState([]); // карточки пользователя
  const [filteredCards, setFilteredCards] = useState([]); // поиск пользователя
  const [filteredSavedCards, setFilteredSavedCards] = useState([]);// поиск пользователя сохраненных карточек
  const [loading, setLoading] = useState(false); // состояние Прелоадера
  const [errorQuery, setErrorQuery] = useState(false); //Состояние связи с сервером MovieApi
  const [emptyQuery, setEmptyQuery] = useState(false); // Состояние пустого запроса
  const [emptyResultQuery, setEmptyResultQuery] = useState(false); // Состояние пустого результата
  const [errorResultApi, setErrorResultApi] = useState(''); // Состояние ошибки запроса на изменение данных
  const [okResultApi, setOkResultApi] = useState(''); // Состояние OK запроса на изменение данных
  const [checkboxSavedCards, setCheckboxSavedCards] = useState(true);// Состояние чекбокса в SavedCards
  const [checkboxCards, setCheckboxCards] = useState(true);// Состояние чекбокса в Cards
  const history = useHistory();
  const [popupError, setPopupError] = useState('');
  // const location = useLocation();

  function handleCheckboxSavedCards() {
    setCheckboxSavedCards(!checkboxSavedCards);
  }
  function handleCheckboxCards() {
    setCheckboxCards(!checkboxCards);
  }

  useEffect(() => {
    function checkToken() {
      // const pathname = location.pathname;
      if (localStorage.getItem(JWT)) {
        const jwt = localStorage.getItem(JWT);
        mainApi
          .checkToken(jwt)
          .then((userInfo) => {
            setCurrentUser(userInfo);
            setLogged(true);
            localStorage.setItem("logged", "true");
          })
          .catch((err) => {
            console.log(err);
          });
      } else {
        // PAGE_WITHOUT_AUTH.includes(pathname) ? history.push(pathname) : history.push(MAIN_PAGE);
      }
    }
    checkToken();
  }, [logged])
  useEffect(() => {
    if (logged) {
      if (!localStorage.getItem(LS_SAVED_CARDS)) {
        getSavedMovies();
      } else {
        setSavedCards(JSON.parse(localStorage.getItem(LS_SAVED_CARDS)));
      }
    }
  }, [currentUser, logged]);

  useEffect(() => {
    if (logged) {
      mainApi
        .getUser(localStorage.getItem(JWT))
        .then((userInfo) => {
          setCurrentUser(userInfo);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [logged]);
  // Если пользователь уже делал поиск то монтируем cards из LS
  useEffect(() => {
    localStorage.getItem(LS_CARDS) && setCards(JSON.parse(localStorage.getItem(LS_CARDS)));
  }, []);
  // проверяем в LS filtered-cards и saved-filtered-cards при монтировании
  // если пользователь вернулся(не забыть удалять после logout)
  useEffect(() => {
    localStorage.getItem(LS_FILTERED_CARDS) && setFilteredCards(
      JSON.parse(localStorage.getItem(LS_FILTERED_CARDS)));
    localStorage.getItem(LS_FILTERED_SAVED_CARDS) && setFilteredSavedCards(
      JSON.parse(localStorage.getItem(LS_FILTERED_SAVED_CARDS)));
  }, []);
  // Отслеживаем по SavedCards данные в LS когда удаляем или добавляем карточку.
  useEffect(() => {
    logged && localStorage.setItem(LS_SAVED_CARDS, JSON.stringify(savedCards));
  }, [savedCards, logged]);

  // В начале загрузки 
  // Если LS пустой подключаем moviesApi
  // Если нет берем из LS
  // Конвертируем карточки под формат бэкенда
  function convertCard(card) {
    const { country, director, duration, year, description,
      image_select: image = URL_SERVER_MOVIES_API + card.image.url,
      trailer = card.trailerLink,
      thumbnail = URL_SERVER_MOVIES_API + card.image.formats.thumbnail.url,
      nameEN, nameRU, id } = card;
    return {
      country, director, duration, year, description, image, trailer, thumbnail,
      nameEN, nameRU, id
    }
  }
  function filteredQuery(query, cards, lsName) {
    let filteredCards;
    if (query.name === '' || query.name === undefined) {
      setEmptyQuery(true);
    } else {
      filteredCards = cards.filter((card) => card.nameRU
        .toLowerCase().includes(query.name.toLowerCase()));
      if (filteredCards.length !== 0) {
        localStorage.setItem(lsName, JSON.stringify(filteredCards));
      } else {
        setEmptyResultQuery(true);
        localStorage.removeItem(lsName);
      }
    }
    return filteredCards;
  }
  function handleQuerySubmit(query) {
    let convertCards;
    setEmptyQuery(false);
    setEmptyResultQuery(false);
    setErrorQuery(false);
    setLoading(true);
    if (!localStorage.getItem(LS_CARDS)) {
      setLoading(true);
      moviesApi
        .getMovieCards()
        .then((cards) => {
          convertCards = cards.map(card => convertCard(card));
          setCards(convertCards);
          localStorage.setItem(LS_CARDS, JSON.stringify(convertCards));
          setLoading(false);
          setFilteredCards(filteredQuery(query, convertCards, LS_FILTERED_CARDS));
        })
        .catch(() => {
          setLoading(false);
          setErrorQuery(true);
        });
    } else {
      setCards(JSON.parse(localStorage.getItem(LS_CARDS)));
      setLoading(false);
      setFilteredCards(filteredQuery(query, cards, LS_FILTERED_CARDS));
    }
  }
  function handleQuerySubmitSaved(query) {
    setEmptyQuery(false);
    setEmptyResultQuery(false);
    setErrorQuery(false);
    setLoading(true);
    if (!localStorage.getItem(LS_SAVED_CARDS)) {
      setLoading(true);
      mainApi
        .getMovieCards(localStorage.getItem(JWT))
        .then((cards) => {
          setSavedCards(cards);
          localStorage.setItem(LS_SAVED_CARDS, JSON.stringify(cards));
          setLoading(false);
          setFilteredSavedCards(filteredQuery(query, cards, LS_FILTERED_SAVED_CARDS));
        })
        .catch(() => {
          setLoading(false);
          setErrorQuery(true);
        });
    } else {
      setSavedCards(JSON.parse(localStorage.getItem(LS_SAVED_CARDS)));
      setLoading(false);
      setFilteredSavedCards(filteredQuery(query, savedCards, LS_FILTERED_SAVED_CARDS));
    }
  }
  function handleCardLike(card) {
    const { country, director, duration, year, description, image, trailer, thumbnail,
      nameEN, nameRU, id: movieId } = card;
    const isLiked = savedCards.some((savedCard) =>
      ((savedCard.movieId === (card.id || card.movieId)) && savedCard.owner === currentUser._id));
    const deleteCard = savedCards.find((savedCard) => (
      (savedCard.movieId === (card.id || card.movieId)) && savedCard.owner === currentUser._id)) || '';
    setPopupError('');
    mainApi
      .changeLikeCardStatus({
        country, director, duration, year, description, image, trailer, thumbnail,
        nameEN, nameRU, movieId
      }, deleteCard._id, !isLiked, localStorage.getItem(JWT))
      .then((likeCard) => {
        setFilteredCards((state) => state.map((c) => (c.id === card.id ? card : c)));
        !isLiked ? setSavedCards([...savedCards, likeCard]) :
          setSavedCards((state) => state.filter((c) => c.movieId !== (card.id || card.movieId)));
      })
      .catch((err) => {
        setPopupError(POPUP_ERROR);
        setTimeout(setPopupError, 1000, '');
      });
  }
  function handleRegister(onRegister) {
    setLoading(true);
    setErrorResultApi('');
    mainApi
      .sign(onRegister, REGISTER_PAGE)
      .then(({ email }) => {
        setLoading(false);
        handleLogin({ email, password: onRegister.password })
      })
      .catch((err) => {
        setLoading(false);
        setErrorResultApi(err.message);
      })
  }
  function resetLS() {
    localStorage.removeItem(LS_SAVED_CARDS);
    localStorage.removeItem(LS_FILTERED_CARDS);
    localStorage.removeItem(LS_FILTERED_SAVED_CARDS);
    localStorage.removeItem(JWT);
    localStorage.removeItem("logged");
  }
  function resetFilter() {
    setFilteredCards([]);
    setFilteredSavedCards([]);
  }
  // при заходе пользователя монтируем saved-cards либо из API либо из LS
  function getSavedMovies() {
    mainApi
      .getMovieCards(localStorage.getItem(JWT))
      .then((cards) => {
        setSavedCards(cards);
        localStorage.setItem(LS_SAVED_CARDS, JSON.stringify(cards));
      })
      .catch((err) => {
        console.log(err);
      });
  }
  function handleLogin(onLogin) {
    setLoading(true);
    setErrorResultApi('');
    mainApi
      .sign(onLogin, LOGIN_PAGE)
      .then((jwt) => {
        if (jwt) {
          localStorage.setItem(JWT, jwt.token);
          setLogged(true);
          setLoading(false);
          getSavedMovies();
          history.push(MAIN_PAGE);
        } else {
          throw jwt;
        }
      })
      .catch((err) => {
        setLoading(false);
        setErrorResultApi(err.message);
      });
  }
  function handleEditUser(onEditUser) {
    setLoading(true);
    setErrorResultApi('');
    setOkResultApi('');
    mainApi
      .setUser(onEditUser, localStorage.getItem(JWT))
      .then((userInfo) => {
        setCurrentUser(userInfo);
        setLoading(false);
        setOkResultApi(OK_RESULT_API);
      })
      .catch((err) => {
        setLoading(false);
        setErrorResultApi(err.validation.body.message);
      });
  }
  function handleLogout() {
    setLogged(false);
    setCurrentUser({ name: "", email: "" });
    resetLS();
    resetFilter();
    history.push(MAIN_PAGE);
  }
  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="app">
        <Header logged={logged} />
        <Switch>
          <Route exact path={MAIN_PAGE}>
            <Main />
          </Route>
          <ProtectedRoute
            logged={logged}
            path={MOVIES_PAGE}
            component={Movies}
            onSubmit={handleQuerySubmit}
            loading={loading}
            errorQuery={errorQuery}
            emptyQuery={emptyQuery}
            emptyResult={emptyResultQuery}
            filteredCards={filteredCards}
            savedCards={savedCards}
            onCardLike={handleCardLike}
            owner={currentUser._id}
            onCheckbox={handleCheckboxCards}
            checkbox={checkboxCards}
            popupError={popupError}
          />
          <ProtectedRoute
            component={SavedMovies}
            logged={logged}
            path={SAVED_MOVIES_PAGE}
            onSubmit={handleQuerySubmitSaved}
            loading={loading}
            errorQuery={errorQuery}
            emptyQuery={emptyQuery}
            emptyResult={emptyResultQuery}
            savedCards={savedCards}
            filteredSavedCards={filteredSavedCards}
            onCardRemove={handleCardLike}
            onCheckbox={handleCheckboxSavedCards}
            checkbox={checkboxSavedCards}
          />
          <ProtectedRoute
            component={Profile}
            path={PROFILE_PAGE}
            logged={logged}
            onEditUser={handleEditUser}
            errorResultApi={errorResultApi}
            okResultApi={okResultApi}
            loading={loading}
            onLogout={handleLogout}
          />
          <Route path={LOGIN_PAGE}>
            <Login
              onLogin={handleLogin}
              loading={loading}
              errorResultApi={errorResultApi}
            />
          </Route>
          <Route path={REGISTER_PAGE}>
            <Register
              onRegister={handleRegister}
              loading={loading}
              errorResultApi={errorResultApi}
            />
          </Route>
          <Route path="*">
            <PageNotFound />
          </Route>
        </Switch>
        <Footer />
      </div>
    </CurrentUserContext.Provider>
  )
}

export default App;
