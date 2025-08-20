import React from "react";
import { FcFilmReel } from "react-icons/fc";
import { Link} from "react-router-dom";
const Navbar = () => {
  return (
    <div className="flex justify-between items-center bg-gray-800 text-white p-4">
        <FcFilmReel className="text-6xl" />
      <div className="flex gap-15 justify-between items-center text-white p-2 ml-20">
        <Link to="/">
          <li className="list-none font-bold">Home</li>
        </Link>
        <Link to="/watchlist">
          <li className="list-none font-bold">Watchlist</li>
        </Link>
        <Link to="/about">
          <li className="list-none font-bold">About</li>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
