import React, { useEffect, useState } from "react";
import axios from "axios";
import MovieCards from "./MovieCards";
import { CiDeliveryTruck } from "react-icons/ci";

const Movies = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios
      .get(`https://api.themoviedb.org/3/trending/all/day?api_key=9c5a110ef3fd618e3157fe9991bb75bb&language=en-US`)
      .then((response) => {
        console.log(response.data.results);
        setMovies(response.data.results);
      });
  }, []);

  return (
    <>
      <div className="p-10">
        <h1 className="text-3xl font-semibold text-center mt-10">Trending Movies</h1>
      </div>
      <div className="flex flex-wrap justify-between m-3">
         {movies.map((movieObj) =>{
           return (
            <MovieCards
              key={movieObj.id}
              posterPath={movieObj}
              name={movieObj.title || movieObj.name || movieObj.original_name}
            />
           )
         })}

      </div>
    </>
  );
};

export default Movies;
//https://api.themoviedb.org/3/trending/all/day?api_key=9c5a110ef3fd618e3157fe9991bb75bb&language=en-US
