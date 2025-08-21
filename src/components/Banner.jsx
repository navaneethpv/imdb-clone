import React from 'react'
import bannerImage from '../assets/banner2.jpg'

const Banner = () => {
  return (
    <div className='flex flex-col justify-end text-white h-[70vh] bg-no-repeat bg-center bg-cover' style={{backgroundImage: `url(${bannerImage})`}}>
        <div className='p-1 bg-violet-900/89 flex justify-center items-center'> 
           <h1 className='font-bold text-xl'>The Avengers</h1>
        </div>
    </div>
  )
}

export default Banner
