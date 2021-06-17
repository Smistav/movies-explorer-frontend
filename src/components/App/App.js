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
  const [currentUser, setCurrentUser] = useState({ name: "", email: "" });
  const [cards, setCards] = useState([]);
  const [savedCards, setSavedCards] = useState([]);
  const [filteredCards, setFilteredCards] = useState();
  const [loading, setLoading] = useState(false);


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
      setLoading(true);
      moviesApi
        .getMovieCards(localStorage.getItem("jwt"))
        .then((cards) => {
          setCards(cards);
          localStorage.setItem("cards", JSON.stringify(cards));
          setLoading(false);
        })
        .catch((err) => console.log(err));
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
    const filteredCards = cards
      .filter((card) => card.nameRU
        .toLowerCase()
        .includes(query.name))
    setFilteredCards(filteredCards);
    if (filteredCards) {
      localStorage.setItem("filtered-cards", JSON.stringify(filteredCards));
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
