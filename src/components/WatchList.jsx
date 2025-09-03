import React, { useState } from "react";
import { FaTrash } from "react-icons/fa";
import genres from "../Utilities/genre";

const WatchList = ({
  watchlist,
  handleRemoveFromWatchlist,
  handleClearAll,
}) => {
  const [query, setQuery] = useState("");
  const [sortType, setSortType] = useState("asc");
  const [sortOrder, setSortOrder] = useState("asc");
  const handleSearch = (e) => {
    setQuery(e.target.value);
  };
  const filteredMovies = watchlist.filter((movieObj) =>
    (movieObj.title || movieObj.name || movieObj.original_name)
      ?.toLowerCase()
      .includes(query.toLowerCase())
  );
  const handleSortByRating = () => {
    if (sortType === "rating") {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortType("rating");
      setSortOrder("asc");
    }
  };

  const handleSortByName = () => {
    if (sortType === "name") {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortType("name");
      setSortOrder("asc");
    }
  };
  const handleSortByPopularity = () => {
    if (sortType === "Popularity") {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortType("Popularity");
      setSortOrder("asc");
    }
  };

  const sortedMovies = [...filteredMovies].sort((movieA, movieB) => {
    if (sortType === "rating") {
      if (sortOrder === "asc") {
        return movieA.vote_average - movieB.vote_average;
      } else if (sortOrder === "desc") {
        return movieB.vote_average - movieA.vote_average;
      }
    } else if (sortType === "name") {
      const nameA = (
        movieA.title ||
        movieA.name ||
        movieA.original_name ||
        ""
      ).toLowerCase();
      const nameB = (
        movieB.title ||
        movieB.name ||
        movieB.original_name ||
        ""
      ).toLowerCase();
      if (sortOrder === "asc") {
        return nameA.localeCompare(nameB);
      } else if (sortOrder === "desc") {
        return nameB.localeCompare(nameA);
      }
    } else if (sortType === "Popularity") {
      if (sortOrder === "asc") {
        return movieA.popularity - movieB.popularity;
      } else if (sortOrder === "desc") {
        return movieB.popularity - movieA.popularity;
      }
    }
    return 0;
  });

  return (
    <>
      <div className="flex justify-center flex-wrap font-bold mt-10 gap-15 hover:cursor-pointer">
        <div className="bg-blue-400/70 py-3 px-11 rounded-lg text-white hover:bg-blue-500">
          Action
        </div>
        <div className="bg-gray-400/70 py-3 px-11 rounded-lg text-white hover:bg-blue-500">
          All genres
        </div>
        <div className="bg-gray-400/70 py-3 px-11 rounded-lg text-white hover:bg-blue-500">
          Action
        </div>
      </div>
      <div className="flex flex-col items-center mt-10">
        <input
          type="text"
          className="border-2 border-gray-300 p-4 rounded-lg w-[30%] font-bold outline-none"
          placeholder="Search your watchlist..."
          onChange={handleSearch}
          value={query}
        />
      </div>
      <div className="overflow-hidden border border-gray-300 rounded-lg m-10">
        <table className="w-full m-auto border-0 border-gray- text-gray-800 text-center">
          <thead className="border-b-3 border-gray-300">
            <tr className="bg-gray-200">
              <th
                className="border-0 border-gray-200 w-[50%] p-3 hover:cursor-pointer"
                onClick={handleSortByName}
              >
                Name{" "}
                {sortType === "name" ? (sortOrder === "asc" ? "↑" : "↓") : ""}
              </th>
              <th
                className="border-0 border-gray-200 p-3 hover:cursor-pointer"
                onClick={handleSortByRating}
              >
                Rating{" "}
                {sortType === "rating" ? (sortOrder === "asc" ? "↑" : "↓") : ""}
              </th>
              <th
                className="border-0 border-gray-200 p-3 hover:cursor-pointer"
                onClick={handleSortByPopularity}
              >
                Popularity {""}
                {sortType === "Popularity"
                  ? sortOrder === "asc"
                    ? "↑"
                    : "↓"
                  : ""}
              </th>
              <th className="border-0 border-gray-200 p-3">Genre</th>
              <th>
                <button
                  className="px-4 py-2 border-1 border-blue-300 rounded-full bg-blue-400/80 text-white hover:bg-blue-400 hover:cursor-pointer active:border-blue-300"
                  onClick={handleClearAll}
                >
                  Clear all
                </button>
              </th>
            </tr>
          </thead>
          <tbody>
            {watchlist.length === 0 ? (
              <tr>
                <td colSpan="5" className="text-center p-4 font-bold">
                  Your watchlist is empty. Add some movies.
                </td>
              </tr>
            ) : sortedMovies.length === 0 && query ? (
              <tr>
                <td colSpan="5" className="text-center p-4 font-bold">
                  No movies found matching your search.
                </td>
              </tr>
            ) : (
              sortedMovies.map((movie) => (
                <tr
                  className="border-b-2 border-gray-300 hover:bg-gray-100"
                  key={movie.id}
                >
                  <td className="border-0 border-gray-200 p-4 flex items-center">
                    <img
                      src={
                        movie.poster_path
                          ? `https://image.tmdb.org/t/p/original/${movie.poster_path}`
                          : "https://via.placeholder.com/128x64?text=No+Image"
                      }
                      alt="Movie"
                      className="w-[8rem] h-[4rem] object-contain rounded-sm ml-14"
                    />
                    <div className="mx-11">
                      {movie.title || movie.name || movie.original_name}
                    </div>
                  </td>
                  <td className="border-0 border-gray-200 p-3">
                    {movie.vote_average}
                  </td>
                  <td className="border-0 border-gray-200 p-3">
                    {movie.popularity}
                  </td>
                  <td className="border-0 border-gray-200 p-3">
                    {genres[movie.genre_ids[0]]}
                  </td>
                  <td className="p-2 text-lg text-red-400 hover:text-red-500 hover:cursor-pointer flex justify-center items-center mb-10">
                    <FaTrash onClick={() => handleRemoveFromWatchlist(movie)} />
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default WatchList;
