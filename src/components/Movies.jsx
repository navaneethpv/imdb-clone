import React, { useEffect, useState } from "react";
import axios from "axios";
import MovieCards from "./MovieCards";
import Pagination from "./Pagination";

const Movies = () => {
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
    axios
      .get(
        `https://api.themoviedb.org/3/trending/all/day?api_key=9c5a110ef3fd618e3157fe9991bb75bb&language=en-US&page=${pageNo}`
      )
      .then((response) => {
        console.log(response.data.results);
        setMovies(response.data.results);
      })
      .catch((error) => {
        console.log(error);
        setError(true);
      }
      )
  }, [pageNo]);

  return (
    <>
      <div className="p-14">
        { error ? <h1 className="text-3xl font-semibold text-center mt-10">Error fetching data</h1> : <h1 className="text-3xl font-semibold text-center mt-10">Trending Movies</h1>}
          
      </div>
      <div className="flex flex-wrap m-3 justify-center md:grid md:grid-cols-5 md:m-3 md:ml-14">
        {movies.map((movieObj) => {
          return (
            <MovieCards
              key={movieObj.id}
              posterPath={movieObj}
              name={movieObj.title || movieObj.name || movieObj.original_name}
            />
          );
        })}
      </div>
      <Pagination handlePrevPage = {handlePrevPage} handleNextPage = {handleNextPage} pageNo = {pageNo}/>
    </>
  );
};

export default Movies;
