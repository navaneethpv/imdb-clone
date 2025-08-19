import React from "react";
import { FcFilmReel } from "react-icons/fc";
const Navbar = () => {
  return (
    <div className="flex justify-between items-center bg-gray-800 text-white p-4">
        <FcFilmReel className="text-6xl" />
      <div className="flex gap-15 justify-between items-center text-white p-2 ml-20">
        <a href="/">
          <li className="list-none font-bold">Home</li>
        </a>
        <a href="/watchlist">
          <li className="list-none font-bold">Watchlist</li>
        </a>
        <a href="#">
          <li className="list-none font-bold">About</li>
        </a>
      </div>
    </div>
  );
};

export default Navbar;
