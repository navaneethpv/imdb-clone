import React, { useState, useEffect } from 'react'
import bannerImage from '../assets/banner2.jpg'
import { fetchTrendingMovies } from "../services/movieService";

const Banner = () => {
  const [bannerData, setBannerData] = useState({
    backgroundImage: bannerImage,
    title: 'The Avengers'
  });

  useEffect(() => {
    const interval = setInterval(() => {
      fetchTrendingMovies().then((res) => {
        const movies = res.data.results;
        if (movies && movies.length > 0) {
          const randomIndex = Math.floor(Math.random() * movies.length);
          const randomMovie = movies[randomIndex];
          
          // Use the movie's backdrop image if available, otherwise use poster
          const imageUrl = randomMovie.backdrop_path 
            ? `https://image.tmdb.org/t/p/original${randomMovie.backdrop_path}`
            : randomMovie.poster_path 
              ? `https://image.tmdb.org/t/p/original${randomMovie.poster_path}`
              : bannerImage;
              
          setBannerData({
            backgroundImage: imageUrl,
            title: randomMovie.title || randomMovie.name || 'Movie'
          });
        }
      }).catch((err) => {
        console.error("Error fetching data:", err);
      });
    }, 7000);

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <div className='flex flex-col justify-end text-white h-[70vh] bg-no-repeat bg-center bg-cover' 
         style={{backgroundImage: `url(${bannerData.backgroundImage})`}}>
        <div className='p-1 bg-violet-900/89 flex justify-center items-center'> 
           <h1 className='font-bold text-xl'>{bannerData.title}</h1>
        </div>
    </div>
  )
}

export default Banner
