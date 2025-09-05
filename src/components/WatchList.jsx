import React, { useEffect, useState } from "react";
import { FaTrash } from "react-icons/fa";
import genres from "../Utilities/genre";

const WatchList = ({
  watchlist,
  handleRemoveFromWatchlist,
  handleClearAll,
}) => {
  const [query, setQuery] = useState("");
  const [sortType, setSortType] = useState("name");
  const [sortOrder, setSortOrder] = useState("asc");
  const [genreList, setGenreList] = useState([""]);
  const [selectedGenre, setSelectedGenre] = useState("All genres");
  const handleSearch = (e) => {
    setQuery(e.target.value);
  };
  const filteredMovies = watchlist.filter((movieObj) =>{
    const matchesQuery = (movieObj.title || movieObj.name || movieObj.original_name)
      ?.toLowerCase()
      .includes(query.toLowerCase())
      const matchesGenre = () =>{
        if (selectedGenre === "All genres"){
          return true;
        }
        else {
          return movieObj.genre_ids && movieObj.genre_ids.length > 0 && genres[movieObj.genre_ids[0]] === selectedGenre;
        }
      }
      return matchesQuery && matchesGenre();
});
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
    if (sortType === "popularity") {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortType("popularity");
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
    } else if (sortType === "popularity") {
      if (sortOrder === "asc") {
        return movieA.popularity - movieB.popularity;
      } else if (sortOrder === "desc") {
        return movieB.popularity - movieA.popularity;
      }
    }
    return 0;
  });

  useEffect(() => {
    let temp = watchlist.map((movieObj) => {
      return genres[movieObj.genre_ids[0]];
    });
    temp = new Set(temp);
    setGenreList(["All genres",...temp])
    console.log(temp);
  }, [watchlist]);

  const handleGenreClick = (genre) => {
    setSelectedGenre(genre);
    console.log(genre);
  };

  return (
    <>
      <div className="flex justify-center">
        <div className="flex justify-center max-w-250 flex-wrap font-bold mt-10 gap-4 hover:cursor-pointer">
          {genreList.map((genre) => {
            return (
              <div
                className={
                  selectedGenre === genre
                    ? "bg-blue-500/70 py-3 px-11 rounded-lg text-white"
                    : "bg-gray-500/70 py-3 px-11 rounded-lg text-white"
                }
                onClick={() => handleGenreClick(genre)}
                key={genre}
              >
                {genre}
              </div>
            );
          })}
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
        <table className="w-full m-auto border-0 border-gray-300 text-gray-800 text-center">
          <thead className="border-b border-gray-300">
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
                {sortType === "popularity"
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
                    {movie.genre_ids && movie.genre_ids.length > 0
                      ? genres[movie.genre_ids[0]]
                      : "N/A"}
                  </td>
                  <td className="p-2 text-lg text-red-400 hover:text-red-500 hover:cursor-pointer flex justify-center items-center">
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
