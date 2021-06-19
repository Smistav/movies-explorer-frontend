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


  // В начале загрузки 
  // Если LS пустой подключаем moviesApi
  // Если нет берем из LS
  function initCards() {
    // let convertCards = [];
    // function convertCard(card) {
    //   const {
    //     country,
    //     director,
    //     duration,
    //     year,
    //     description,
    //     image_select: image = URL_SERVER_MOVIES_API + card.image.url,
    //     trailer = card.trailerLink,
    //     thumbnail = URL_SERVER_MOVIES_API + card.image.formats.thumbnail.url,
    //     nameEN,
    //     nameRU,
    //     id,
    //   } = card;
    //   return {
    //     country,
    //     director,
    //     duration,
    //     year,
    //     description,
    //     image,
    //     trailer,
    //     thumbnail,
    //     nameEN,
    //     nameRU,
    //     id
    //   }
    // }
    if (!localStorage.getItem("cards")) {
      setErrorQuery(false);
      setLoading(true);
      moviesApi
        .getMovieCards()
        .then((cards) => {
          // convertCards = cards.map(card => convertCard(card));
          setCards(cards);//convertCards
          localStorage.setItem("cards", JSON.stringify(cards));//convertCards
          setLoading(false);
          return cards
          // return convertCards;
        })
        .catch((err) => {
          setLoading(false);
          setErrorQuery(true);
        });
    } else {
      localStorage.getItem("cards") && setCards(JSON.parse(localStorage.getItem("cards")));
    }

  }
  // В начале загрузки
  // Проверяем в LS filtered-cards если пользователь вернулся(не забыть удалять после logout)
  useEffect(() => {
    localStorage.getItem("filtered-cards") && setFilteredCards(
      JSON.parse(localStorage.getItem("filtered-cards")));
  }, []);
  // useEffect(() => {
  //   setFilteredCards(filteredCards)
  // }, [filteredCards]);
  function convertCard(card) {
    const {
      country,
      director,
      duration,
      year,
      description,
      image_select: image = URL_SERVER_MOVIES_API + card.image.url,
      trailer = card.trailerLink,
      thumbnail = URL_SERVER_MOVIES_API + card.image.formats.thumbnail.url,
      nameEN,
      nameRU,
      id,
    } = card;
    return {
      country,
      director,
      duration,
      year,
      description,
      image,
      trailer,
      thumbnail,
      nameEN,
      nameRU,
      id
    }
  }
  function filteredQuery(query, cards) {
    let filteredCards;
    if (query.name === '' || query.name === undefined) {
      setEmptyQuery(true);
      setFilteredCards([]);
    } else {
      filteredCards = cards.filter((card) => card.nameRU
        .toLowerCase().includes(query.name.toLowerCase()));
      setFilteredCards(filteredCards);
      if (filteredCards.length !== 0) {
        localStorage.setItem("filtered-cards", JSON.stringify(filteredCards));
      } else {
        setEmptyResult(true);
        localStorage.removeItem("filtered-cards");
      }
    }
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
          setCards(convertCards);//convertCards
          localStorage.setItem("cards", JSON.stringify(convertCards));//convertCards
          setLoading(false);
          filteredQuery(query, convertCards)
        })
        .catch((err) => {
          setLoading(false);
          setErrorQuery(true);
        });
    } else {
      setCards(JSON.parse(localStorage.getItem("cards")));
      setLoading(false);
      filteredQuery(query, cards);
    }
  }
  function handleCardLike(card) {
    const {
      country,
      director,
      duration,
      year,
      description,
      image_select: image = URL_SERVER_MOVIES_API + card.image.url,
      trailer = card.trailerLink,
      thumbnail = URL_SERVER_MOVIES_API + card.image.formats.thumbnail.url,
      nameEN,
      nameRU,
      id: movieId,
    } = card
    // setLoading(true);
    mainApi
      .setLikeCard({
        country,
        director,
        duration,
        year,
        description,
        image,
        trailer,
        thumbnail,
        nameEN,
        nameRU,
        movieId
      }
        , localStorage.getItem("jwt"))
      .then((newCard) => {
        //setFilteredCards((state) => state.map((c) => (c.movieId === card.id ? newCard : c)));
        // setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  useEffect(() => {
    mainApi
      .getMovieCards(localStorage.getItem("jwt"))
      .then((savedCards) => {
        setSavedCards(savedCards);
      })
      .catch((err) => console.log(err));
  }
    , []);

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
          <SavedMovies savedCards={savedCards} />
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
