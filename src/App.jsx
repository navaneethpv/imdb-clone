import { useState, useEffect } from "react";
import Navbar from "./components/Navbar.jsx";
import WatchList from "./components/WatchList.jsx";
import Movies from "./components/Movies.jsx";
import About from "./components/About.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Banner from "./components/Banner.jsx";
function App() {
  const [watchlist, setWatchlist] = useState([]);
  const handleAddtoWatchlist = (movieObj) => {
    console.log("Adding movie to watchlist:", movieObj);
    if (!movieObj.id) {
      console.warn("Movie object missing id:", movieObj);
      return;
    }
    let newList = [...watchlist, movieObj];
    setWatchlist(newList);
    localStorage.setItem("Movies", JSON.stringify(newList));
  };

  const handleRemoveFromWatchlist = (movieObj) => {
    let filteredList = watchlist.filter((movie) => movie.id !== movieObj.id);
    setWatchlist(filteredList);
    localStorage.setItem("Movies", JSON.stringify(filteredList));
  };
  
  const handleClearAll = () =>{
    let removedList = [];
    setWatchlist (removedList);
    localStorage.setItem('Movies',JSON.stringify(removedList))
  }

  useEffect(() => {
    let moviesFromLocalStorage = localStorage.getItem("Movies");
    if (!moviesFromLocalStorage) {
      console.log("No movies in your local storage");
      return;
    }
    setWatchlist(JSON.parse(moviesFromLocalStorage));
  }, []);
  const [search, setSearch] = useState("");
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  return (
    <>
      <BrowserRouter>
        <Navbar search={search} handleSearch={handleSearch} />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Banner />
                <Movies
                  handleAddtoWatchlist={handleAddtoWatchlist}
                  handleRemoveFromWatchlist={handleRemoveFromWatchlist}
                  watchlist={watchlist}
                  search={search}
                />
              </>
            }
          />
          <Route
            path="/watchlist"
            element={
              <WatchList
                watchlist={watchlist}
                handleRemoveFromWatchlist={handleRemoveFromWatchlist}
                handleClearAll = {handleClearAll}
              />
            }
          />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
