import axios from 'axios';


const API_KEY = '9c5a110ef3fd618e3157fe9991bb75bb';
const BASE_URL = 'https://api.themoviedb.org/3';

/**
 * Fetches trending movies for a specific page
 * @param {number} pageNo - The page number to fetch
 * @returns {Promise} Promise that resolves with movie data or rejects with error
 */
export const fetchTrendingMovies = (pageNo = 1) => {
  return axios.get(
    `${BASE_URL}/trending/all/day?api_key=${API_KEY}&language=en-US&page=${pageNo}`
  );
};

// You can add more movie-related API functions here as needed
// Example:
// export const fetchMovieDetails = (movieId) => {
//   return axios.get(`${BASE_URL}/movie/${movieId}?api_key=${API_KEY}`);
// };