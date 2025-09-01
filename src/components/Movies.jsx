import React, { useEffect, useState } from "react";
import MovieCards from "./MovieCards";
import Pagination from "./Pagination";
import { fetchTrendingMovies } from "../services/movieService";

const Movies = ({ handleAddtoWatchlist, handleRemoveFromWatchlist, watchlist }) => {
  const [movies, setMovies] = useState([]);
  const [pageNo, setPageNo] = useState(1);
  const [error, setError] = useState(false);

  const handlePrevPage = () => {
    if (pageNo > 1) {
      setPageNo(pageNo - 1);
    }
  };

  const handleNextPage = () => {
    setPageNo(pageNo + 1);
  };
  useEffect(() => {
    {
      fetchTrendingMovies(pageNo)
        .then((res) => {
          setMovies(res.data.results);
          setError(false);
        })
        .catch((err) => {
          console.error("Error fetching data:", err);
          setError(true);
        });
    }
  }, [pageNo]);
  return (
    <>
      <div className="p-14">
        {error ? (
          <h1 className="text-3xl font-semibold text-center mt-10">
            Error fetching data
          </h1>
        ) : (
          <h1 className="text-3xl font-semibold text-center mt-10">
            Trending Movies
          </h1>
        )}
      </div>
      <div className="flex flex-wrap m-3 justify-center md:grid md:grid-cols-5 md:m-3 md:ml-14">
        {movies.map((movieObj) => {
          return (
            <MovieCards
              key={movieObj.id}
              posterPath={movieObj}
              name={movieObj.title || movieObj.name || movieObj.original_name}
              handleAddtoWatchlist={handleAddtoWatchlist}
              movieObj={movieObj}
              handleRemoveFromWatchlist={handleRemoveFromWatchlist}
              watchlist={watchlist}
            />
          );
        })}
      </div>
      <Pagination
        handlePrevPage={handlePrevPage}
        handleNextPage={handleNextPage}
        pageNo={pageNo}
      />
    </>
  );
};

export default Movies;
