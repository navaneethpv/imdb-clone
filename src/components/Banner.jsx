import React, { useState, useEffect } from "react";
import bannerImage from "../assets/banner2.jpg";
import { fetchTrendingMovies } from "../services/movieService";

const Banner = () => {
  const [bannerData, setBannerData] = useState({
    backgroundImage: bannerImage,
    title: "The Avengers",
  });
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      
      setTimeout(() => {
        fetchTrendingMovies()
          .then((res) => {
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
                title: randomMovie.title || randomMovie.name || "Movie",
              });
              
              setTimeout(() => setIsTransitioning(false), 100);
            }
          })
          .catch((err) => {
            console.error("Error fetching data:", err);
            setIsTransitioning(false);
          });
      }, 500);
    }, 7000);

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full overflow-hidden">
        <div
          className={`flex flex-col justify-end bg-no-repeat h-[87vh] bg-center bg-cover bg-violet-200/70 transition-all duration-700 ease-in-out ${
            isTransitioning ? "opacity-0 translate-x-full" : "opacity-100 translate-x-0"
          }`}
          style={{ backgroundImage: `url(${bannerData.backgroundImage})` }}
        >
          <div className="p-1 bg-violet-900/89 flex w-full justify-center items-end text-white">
            <h1 className="font-bold text-xl">{bannerData.title}</h1>
          </div>
        </div>
      </div>
  );
};
export default Banner;
