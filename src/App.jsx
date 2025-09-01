import { useState } from "react";
import Navbar from "./components/Navbar.jsx";
import WatchList from "./components/WatchList.jsx";
import Movies from "./components/Movies.jsx";
import About from "./components/About.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Banner from "./components/Banner.jsx";
function App() {
  const [watchlist, setWatchlist] = useState([]);
  const handleAddtoWatchlist = (movieObj) => {
    let newList = [...watchlist, movieObj];
    setWatchlist(newList);
    console.log(newList)
    };

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Banner />
                <Movies
                  handleAddtoWatchlist={handleAddtoWatchlist}
                />
              </>
            }
          />
          <Route path="/watchlist" element={<WatchList  watchlist={watchlist} />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
