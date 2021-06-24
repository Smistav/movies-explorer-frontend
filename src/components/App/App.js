import { useEffect, useState } from "react";
import { Route, Switch, useHistory } from "react-router-dom";
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
import { URL_SERVER_MOVIES_API } from "../../utils/constants";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { ProtectedRoute } from "../ProtectedRoute/ProtectedRoute";

function App() {
  const [currentUser, setCurrentUser] = useState({ name: "", email: "" }); // данные пользователя
  const [cards, setCards] = useState([]); // Все карточки MovieApi
  const [savedCards, setSavedCards] = useState([]); // карточки пользователя
  const [filteredCards, setFilteredCards] = useState([]); // поиск пользователя
  const [filteredSavedCards, setFilteredSavedCards] = useState([]);// поиск пользователя сохраненных карточек
  const [loading, setLoading] = useState(false); // состояние Прелоадера
  const [errorQuery, setErrorQuery] = useState(false); //Состояние связи с сервером MovieApi
  const [emptyQuery, setEmptyQuery] = useState(false); // Состояние пустого запроса
  const [emptyResultQuery, setEmptyResultQuery] = useState(false); // Состояние пустого результата
  const [errorResultApi, setErrorResultApi] = useState(''); // Состояние ошибки запроса
  const [logged, setLogged] = useState(false);
  const history = useHistory();

  useEffect(() => {
    function checkToken() {
      if (localStorage.getItem("jwt")) {
        const jwt = localStorage.getItem("jwt");
        mainApi
          .checkToken(jwt)
          .then((userInfo) => {
            setCurrentUser(userInfo);
            setLogged(true);
          })
          .catch((err) => {
            console.log(err);
          });
      }
    }
    checkToken();
  }, [logged]);
  useEffect(() => {
    if (logged) {
      mainApi
        .getUser(localStorage.getItem("jwt"))
        .then((userInfo) => {
          setCurrentUser(userInfo);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [logged]);

  function resetLS() {
    setFilteredCards([]);
    setFilteredSavedCards([]);
    localStorage.removeItem("cards");
    localStorage.removeItem("saved-cards");
    localStorage.removeItem("filtered-cards");
    localStorage.removeItem("filtered-saved-cards");
  }
  // Если пользователь уже делал поиск то монтируем cards из LS
  useEffect(() => {
    localStorage.getItem("cards") && setCards(JSON.parse(localStorage.getItem("cards")));
  }, []);
  // при заходе пользователя монтируем saved-cards либо из API либо из LS
  useEffect(() => {
    if (!localStorage.getItem("saved-cards")) {
      mainApi
        .getMovieCards(localStorage.getItem("jwt"))
        .then((cards) => {
          setSavedCards(cards);
          localStorage.setItem("saved-cards", JSON.stringify(cards));
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      setSavedCards(JSON.parse(localStorage.getItem("saved-cards")));
    }
  }, [currentUser])
  // проверяем в LS filtered-cards и saved-filtered-cards при монтировании
  // если пользователь вернулся(не забыть удалять после logout)
  useEffect(() => {
    localStorage.getItem("filtered-cards") && setFilteredCards(
      JSON.parse(localStorage.getItem("filtered-cards")));
    localStorage.getItem("filtered-saved-cards") && setFilteredSavedCards(
      JSON.parse(localStorage.getItem("filtered-saved-cards")));
  }, []);
  // Отслеживаем по SavedCards данные в LS когда удаляем или добавляем карточку.
  useEffect(() => {
    localStorage.setItem("saved-cards", JSON.stringify(savedCards));
  }, [savedCards]);

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
    if (!localStorage.getItem("cards")) {
      setLoading(true);
      moviesApi
        .getMovieCards()
        .then((cards) => {
          convertCards = cards.map(card => convertCard(card));
          setCards(convertCards);
          localStorage.setItem("cards", JSON.stringify(convertCards));
          setLoading(false);
          setFilteredCards(filteredQuery(query, convertCards, "filtered-cards"));
        })
        .catch(() => {
          setLoading(false);
          setErrorQuery(true);
        });
    } else {
      setCards(JSON.parse(localStorage.getItem("cards")));
      setLoading(false);
      setFilteredCards(filteredQuery(query, cards, "filtered-cards"));
    }
  }
  function handleQuerySubmitSaved(query) {
    setEmptyQuery(false);
    setEmptyResultQuery(false);
    setErrorQuery(false);
    setLoading(true);
    if (!localStorage.getItem("saved-cards")) {
      setLoading(true);
      mainApi
        .getMovieCards(localStorage.getItem("jwt"))
        .then((cards) => {
          setSavedCards(cards);
          localStorage.setItem("saved-cards", JSON.stringify(cards));
          setLoading(false);
          setFilteredSavedCards(filteredQuery(query, cards, "filtered-saved-cards"));
        })
        .catch(() => {
          setLoading(false);
          setErrorQuery(true);
        });
    } else {
      setSavedCards(JSON.parse(localStorage.getItem("saved-cards")));
      setLoading(false);
      setFilteredSavedCards(filteredQuery(query, savedCards, "filtered-saved-cards"));
    }
  }
  function handleCardLike(card) {
    const { country, director, duration, year, description, image, trailer, thumbnail,
      nameEN, nameRU, id: movieId } = card;
    const isLiked = savedCards.some((savedCard) =>
      ((savedCard.movieId === (card.id || card.movieId)) && savedCard.owner === currentUser._id));
    const deleteCard = savedCards.find((savedCard) => (
      (savedCard.movieId === (card.id || card.movieId)) && savedCard.owner === currentUser._id)) || '';
    mainApi
      .changeLikeCardStatus({
        country, director, duration, year, description, image, trailer, thumbnail,
        nameEN, nameRU, movieId
      }, deleteCard._id, !isLiked, localStorage.getItem("jwt"))
      .then((likeCard) => {
        setFilteredCards((state) => state.map((c) => (c.id === card.id ? card : c)));
        !isLiked ? setSavedCards([...savedCards, likeCard]) :
          setSavedCards((state) => state.filter((c) => c.movieId !== (card.id || card.movieId)));
      })
      .catch((err) => {
        console.log(err);
      });
  }
  function handleRegister(onRegister) {
    setLoading(true);
    setErrorResultApi('');
    mainApi
      .sign(onRegister, '/signup')
      .then(({ email }) => {
        setLoading(false);
        handleLogin({ email, password: onRegister.password })
      })
      .catch((err) => {
        setLoading(false);
        setErrorResultApi(err.message);
      })
  }
  function handleLogin(onLogin) {
    setLoading(true);
    setErrorResultApi('');
    mainApi
      .sign(onLogin, "/signin")
      .then((jwt) => {
        if (jwt) {
          localStorage.setItem("jwt", jwt.token);
          setLogged(true);
          setLoading(false);
          resetLS();
          history.push("/movies");
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
    mainApi
      .setUser(onEditUser, localStorage.getItem("jwt"))
      .then((userInfo) => {
        setCurrentUser(userInfo);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        setErrorResultApi(err.validation.body.message);
      });
  }
  function handleLogout() {
    setLogged(false);
    setCurrentUser({ name: "", email: "" });
    localStorage.removeItem("jwt");
    history.push("/");
  }
  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="app">
        <Header logged={logged} />
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
          <ProtectedRoute
            logged={logged}
            path="/movies"
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
          />
          <ProtectedRoute
            logged={logged}
            path="/saved-movies"
            component={SavedMovies}
            onSubmit={handleQuerySubmitSaved}
            loading={loading}
            errorQuery={errorQuery}
            emptyQuery={emptyQuery}
            emptyResult={emptyResultQuery}
            savedCards={savedCards}
            filteredSavedCards={filteredSavedCards}
            onCardRemove={handleCardLike}
          />
          <ProtectedRoute
            logged={logged}
            path="/profile"
            component={Profile}
            onEditUser={handleEditUser}
            errorResultApi={errorResultApi}
            onLogout={handleLogout}
          />
          <Route path="/signin">
            <Login onLogin={handleLogin} errorResultApi={errorResultApi} />
          </Route>
          <Route path="/signup">
            <Register onRegister={handleRegister} errorResultApi={errorResultApi} />
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
