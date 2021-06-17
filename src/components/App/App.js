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

function App() {
  const [currentUser, setCurrentUser] = useState({ name: "", email: "" }); // данные пользователя
  const [cards, setCards] = useState([]); // Все карточки MovieApi
  const [savedCards, setSavedCards] = useState([]); // карточки пользователя
  const [filteredCards, setFilteredCards] = useState(); // поиск пользователя
  const [loading, setLoading] = useState(false); // состояние Прелоадера
  const [errorQuery, setErrorQuery] = useState(false); //Состояние связи с сервером MovieApi
  const [emptyQuery, setEmptyQuery] = useState(false); // Состояние пустого запроса

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
  useEffect(() => {
    if (!localStorage.getItem("cards")) {
      setErrorQuery(false);
      setLoading(true);
      moviesApi
        .getMovieCards(localStorage.getItem("jwt"))
        .then((cards) => {
          setCards(cards);
          localStorage.setItem("cards", JSON.stringify(cards));
          setLoading(false);
        })
        .catch((err) => {
          setLoading(false);
          setErrorQuery(true);
        });
    } else {
      localStorage.getItem("cards") && setCards(JSON.parse(localStorage.getItem("cards")));
    }
  }, []);
  // В начале загрузки
  // Проверяем в LS filtered-cards если пользователь вернулся(не забыть удалять после logout)
  useEffect(() => {
    localStorage.getItem("filtered-cards") && setFilteredCards(
      JSON.parse(localStorage.getItem("filtered-cards")));
  }, []);

  function handleQuerySubmit(query) {
    setEmptyQuery(false);
    setLoading(true);
    let filteredCards = cards
      .filter((card) => card.nameRU
        .toLowerCase()
        .includes(query.name.toLowerCase()))
    setFilteredCards(filteredCards);
    if (filteredCards.length !== 0) {
      localStorage.setItem("filtered-cards", JSON.stringify(filteredCards));
      setLoading(false);
    } else {
      setEmptyQuery(true);
      localStorage.removeItem("filtered-cards");
      setLoading(false);
    }
  }

  // useEffect(() => {
  //   mainApi
  //     .getMovieCards(localStorage.getItem("jwt"))
  //     .then((savedCards) => {
  //       setSavedCards(savedCards);
  //     })
  //     .catch((err) => console.log(err));
  // }
  //   , []);

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
            filteredCards={filteredCards}
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
