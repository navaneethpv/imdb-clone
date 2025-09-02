import React from "react";
const MovieCards = ({ movieObj,posterPath, name, handleAddtoWatchlist , handleRemoveFromWatchlist,watchlist}) => {
  const isInwatchlist = (movieObj) => {
      for (let i = 0; i < watchlist.length; i++) {
        if (watchlist[i].id === movieObj.id) return true;
  }
    return false;
}
  return (
    <>
      <div
        className="h-110 w-[290px] bg-contain bg-center rounded-xl mb-10 hover:cursor-pointer hover:scale-108 transition-all duration-160"
        style={{
          backgroundImage: posterPath.poster_path ? `url(https://image.tmdb.org/t/p/original/${posterPath.poster_path})` : `url(https://via.placeholder.com/290x400?text=No+Image)`,
        }}
      >
        <div className="flex justify-end  p-2">
          {isInwatchlist(movieObj) ? <div
            className="text-lg bg-black/60 w-10 h-10 flex items-center justify-center m-2 rounded-xl hover:bg-cyan-600 transition-all duration-150"
            onClick={()=>handleRemoveFromWatchlist(movieObj)}
          >❌</div>:<div
            className="text-lg bg-black/60 w-10 h-10 flex items-center justify-center m-2 rounded-xl hover:bg-cyan-600 transition-all duration-150"
            onClick={()=>handleAddtoWatchlist(movieObj)}
          >😍</div>}
          
        </div>
        <div className="flex justify-center items-end h-full mt-[-4.5rem]">
          <div className="bg-black/50 flex justify-center items-center rounded-lg text-gray-200 h-contain p-2 w-full font-bold">
            {movieObj.title || movieObj.name || movieObj.original_name}
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieCards;
