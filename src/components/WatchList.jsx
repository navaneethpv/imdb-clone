import React from "react";

const WatchList = () => {
  return (
    <>
      <div className="flex flex-col items-center mt-10">
        <input
          type="text"
          className="border-2 border-gray-300 p-4 rounded-lg w-[30%] font-bold outline-none"
          placeholder="Search your watchlist..."
        />
      </div>
      <div className="overflow-hidden border border-gray-300 rounded-lg m-10">
        <table className="w-full m-auto border-0 border-gray-300 text-gray-800 text-center">
          <thead className="border-b-3 border-gray-300">
            <tr className="bg-gray-200">
              <th className="border-0 border-gray-200 w-[50%] p-3">Name</th>
              <th className="border-0 border-gray-200 p-3">Rating</th>
              <th className="border-0 border-gray-200 p-3">Popularity</th>
              <th className="border-0 border-gray-200 ">Genre</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b-2 border-gray-300 hover:bg-gray-100">
              <td className="border-0 border-gray-200 p-3 flex items-center">
                <img
                  src={`https://img.freepik.com/premium-psd/movie-poster_1009850-314.jpg?w=2000`}
                  alt="Movie"
                  className="w-[8rem] h-[4rem] object-cover rounded-sm"
                />
                <div className="mx-11">Movie bot</div>
              </td>
              <td className="border-0 border-gray-200 p-3">8.5</td>
              <td className="border-0 border-gray-200 p-3">High</td>
              <td className="border-0 border-gray-200 p-3">Action</td>
            </tr>
            <tr className="border-b-2 border-gray-300 hover:bg-gray-100">
              <td className="border-0 border-gray-200 p-3">
                <img
                  src={`https://img.freepik.com/premium-psd/movie-poster_1009850-314.jpg?w=2000`}
                  alt="Movie"
                  className="w-[8rem] h-[4rem] object-cover rounded-sm"
                />
              </td>
              <td className="border-0 border-gray-200 p-3">8.5</td>
              <td className="border-0 border-gray-200 p-3">High</td>
              <td className="border-0 border-gray-200 p-3">Action</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default WatchList;
