import React from "react";

const MovieCards = ({posterPath}) => {
  return (
    <>
      <div
        className="h-100 w-[270px] bg-contain bg-center rounded-xl mb-10 hover:cursor-pointer hover:scale-108 transition-all duration-160"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original/${posterPath.poster_path})`,
        }}
      ></div>
    </>
  );
};

export default MovieCards;
