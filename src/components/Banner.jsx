import React from 'react'
import bannerImage from '../assets/banner1.png'

const Banner = () => {
  return (
    <div className='flex flex-col justify-end text-white h-[600px] bg-no-repeat bg-center bg-cover' style={{backgroundImage: `url(${bannerImage})`}}>
        <div className='h-10 bg-blue-400 flex justify-center items-center mb-1'> 
           <h1 className='font-bold text-2xl'>Avengers</h1>
        </div>
    </div>
  )
}

export default Banner
