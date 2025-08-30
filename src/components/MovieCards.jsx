import React, { useState } from "react";
const MovieCards = ({ posterPath, name ,handleAddtoWatchlist}) => {
  return (
    <>
      <div
        className="h-110   w-[290px] bg-contain bg-center rounded-xl mb-10 hover:cursor-pointer hover:scale-108 transition-all duration-160"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original/${posterPath.poster_path})`,
        }}
      >
        <div className="flex justify-end  p-2">
          <div className="text-lg bg-black/60 w-10 h-10 flex items-center justify-center m-2 rounded-xl hover:bg-cyan-600 transition-all duration-150" onClick={handleAddtoWatchlist}>
          </div>
        </div>
        <div className="flex justify-center items-end h-full mt-[-4.5rem]">
          <div className="bg-black/50 flex justify-center items-center rounded-lg text-gray-200 h-contain p-2 w-full font-bold">
            {name}
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieCards;
