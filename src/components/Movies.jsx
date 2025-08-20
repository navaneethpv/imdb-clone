import React from "react";
import MovieCards from "./MovieCards";

const Movies = () => {
  return (
    <>
      <div className="p-10">
        <h1 className="text-3xl font-semibold text-center mt-10">Trending Movies</h1>
      </div>
      <div className="flex flex-wrap justify-between m-3">
        <MovieCards />
        <MovieCards />
        <MovieCards />
        <MovieCards />
        <MovieCards />
        <MovieCards />
        <MovieCards />
        <MovieCards />
        <MovieCards />
        <MovieCards />
        <MovieCards />
        <MovieCards />
      </div>
    </>
  );
};

export default Movies;
