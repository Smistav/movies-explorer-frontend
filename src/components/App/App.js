import { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
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

function App() {
  const [currentUser, setCurrentUser] = useState({ name: "", email: "" }); // данные пользователя
  const [cards, setCards] = useState([]); // Все карточки MovieApi
  const [savedCards, setSavedCards] = useState([]); // карточки пользователя
  const [filteredCards, setFilteredCards] = useState(); // поиск пользователя
  const [filteredSavedCards, setFilteredSavedCards] = useState([]);// поиск пользователя сохраненных карточек
  const [loading, setLoading] = useState(false); // состояние Прелоадера
  const [errorQuery, setErrorQuery] = useState(false); //Состояние связи с сервером MovieApi
  const [emptyQuery, setEmptyQuery] = useState(false); // Состояние пустого запроса
  const [emptyResult, setEmptyResult] = useState(false); // Состояние пустого результата
  // useEffect(() => {
  //   // if (isLogged){
  //   mainApi
  //     .getUserInfo(localStorage.getItem("jwt"))
  //     .then((userInfo) => setCurrentUser(userInfo))
  //     .catch((err) => console.log(err));
  //   // }
  // }, []);

  // Если пользователь уже делал поиск то моунтим cards и saved-cards из LS
  useEffect(() => {
    localStorage.getItem("cards") && setCards(JSON.parse(localStorage.getItem("cards")));
    localStorage.getItem("saved-cards") && setSavedCards(JSON.parse(localStorage.getItem("saved-cards")));
  }, []);
  // В начале проверяем в LS filtered-cards если пользователь вернулся(не забыть удалять после logout)
  useEffect(() => {
    localStorage.getItem("filtered-cards") && setFilteredCards(
      JSON.parse(localStorage.getItem("filtered-cards")));
    localStorage.getItem("filtered-saved-cards") && setFilteredSavedCards(
      JSON.parse(localStorage.getItem("filtered-saved-cards")));
  }, []);

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
        setEmptyResult(true);
        localStorage.removeItem(lsName);
      }
    }
    return filteredCards;
  }
  function handleQuerySubmit(query) {
    let convertCards;
    setEmptyQuery(false);
    setEmptyResult(false);
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
        .catch((err) => {
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
    setEmptyResult(false);
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
        .catch((err) => {
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
    const isLiked = savedCards.some((savedCard) => savedCard.movieId === card.id);
    const deleteCard = savedCards.find((savedCard) => savedCard.movieId === card.id) || '';
    mainApi
      .changeLikeCardStatus({
        country, director, duration, year, description, image, trailer, thumbnail,
        nameEN, nameRU, movieId
      }, deleteCard._id, !isLiked, localStorage.getItem("jwt"))
      .then((likeCard) => {
        setFilteredCards((state) => state.map((c) => (c.id === card.id ? card : c)));
        !isLiked ? setSavedCards([...savedCards, likeCard]) :
          setSavedCards((state) => state.filter((c) => c.movieId !== card.id));
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div className="app">
      <Switch>
        <Route exact path="/">
          <Main />
          <Footer />
        </Route>
        <Route path="/movies">
          <Header />
          <Movies
            onSubmit={handleQuerySubmit}
            loading={loading}
            errorQuery={errorQuery}
            emptyQuery={emptyQuery}
            emptyResult={emptyResult}
            filteredCards={filteredCards}
            savedCards={savedCards}
            onCardLike={handleCardLike}
          />
          <Footer />
        </Route>
        <Route path="/saved-movies">
          <Header />
          <SavedMovies
            onSubmit={handleQuerySubmitSaved}
            loading={loading}
            errorQuery={errorQuery}
            emptyQuery={emptyQuery}
            emptyResult={emptyResult}
            savedCards={savedCards}
            filteredSavedCards={filteredSavedCards}
          />
          <Footer />
        </Route>
        <Route path="/profile">
          <Header />
          <Profile userInfo={currentUser} />
        </Route>
        <Route path="/signin">
          <Login />
        </Route>
        <Route path="/signup">
          <Register />
        </Route>
        <Route path="*">
          <PageNotFound />
        </Route>
      </Switch>
    </div>
  )
}

export default App;
