import React from 'react'

const Pagination = ({handlePrevPage,handleNextPage,pageNo}) => {
    
  return (
    <div className='bg-gray-400/90 p-2 flex justify-center font-bold gap-14 text-xl'>
        <div className='hover:cursor-pointer hover:scale-120 transition-all duration-300' onClick={handlePrevPage}><i class="fa-solid fa-arrow-left"></i></div>
        <div>{pageNo}</div>
        <div className='hover:cursor-pointer hover:scale-120 transition-all duration-300' onClick={handleNextPage}><i class="fa-solid fa-arrow-right"></i></div>
    </div>
  )
}

export default Pagination