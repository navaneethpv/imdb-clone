import { FcFilmReel } from "react-icons/fc";
import { Link } from "react-router-dom";
const Navbar = ({handleSearch,search}) => {
  return (
    <div className="flex justify-between items-center bg-gray-800 text-white p-4 sticky top-0 z-50">
      <div className="flex items-center">
        <FcFilmReel className="text-6xl" />
        <span className="text-4xl font-bold ml-2 text-gray-300">Movies.in</span>
      </div>
      <div className="flex gap-15 justify-between items-center text-white p-2 ml-20 text-[18px]">
        <Link to="/">
          <li className="list-none font-bold">Home</li>
        </Link>
        <Link to="/watchlist">
          <li className="list-none font-bold">Watchlist</li>
        </Link>
        <Link to="/about">
          <li className="list-none font-bold">About</li>
        </Link>
        <div>
          <input
            type="text"
            className="border-1 px-8 py-2 rounded-full bg-white text-black outline-none font-sans font-medium"
            placeholder="Search...."
            onChange={handleSearch}
            value={search}
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
