import React from "react";

const MovieCards = ({ posterPath, name }) => {
  return (
    <>
      <div
        className="h-105   w-[290px] bg-contain bg-center rounded-xl mb-10 hover:cursor-pointer hover:scale-108 transition-all duration-160"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original/${posterPath.poster_path})`,
        }}
      >
        <div className="flex justify-center items-end h-full">
          <div className="bg-black/50 flex justify-center items-end rounded-lg text-gray-200 h-contain p-2 w-full font-bold">
            {name}
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieCards;
