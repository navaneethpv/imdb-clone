import Navbar from "./components/Navbar.jsx";
import WatchList from "./components/WatchList.jsx";
import Movies from "./components/Movies.jsx";
import About from "./components/About.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Banner from "./components/Banner.jsx";
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<><Banner /> <Movies /></>} />
          <Route path="/watchlist" element={<WatchList />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
