import React from 'react'
import bannerImage from '../assets/banner1.png'

const Banner = () => {
  return (
    <div className='flex flex-col justify-end text-white h-[600px] bg-no-repeat bg-center bg-cover' style={{backgroundImage: `url(${bannerImage})`}}>
        <div className='h-7 bg-violet-800 flex justify-center items-center'> 
           <h1 className='font-bold text-xl'>Avengers</h1>
        </div>
    </div>
  )
}

export default Banner
