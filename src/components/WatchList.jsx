import React from 'react'

const WatchList = () => {
  return (
    <>
        <div className="flex flex-col items-center mt-10">
          <input type="text" className="border-2 border-gray-300 p-4 rounded-lg w-[30%] font-bold outline-none" placeholder="Search your watchlist..."/>
        </div>
        <div>
          <table className="w-[90%] m-auto mt-10 border-0 border-gray-300 text-center rounded-lg"> 
            <thead className="">
              <tr className='bg-gray-200'>
                <th className="border-0 border-gray-200 w-[50%] p-4 rounded-tl-lg">Name</th>
                <th className="border-0 border-gray-200 p-4">Rating</th>
                <th className="border-0 border-gray-200 p-4">Popularity</th>
                <th className="border-0 border-gray-200 p-4 rounded-tr-lg">Genre</th>
              </tr> 

              
            </thead>
            <tbody>

            </tbody>
          </table>
        </div>
    </>
  )
}

export default WatchList  