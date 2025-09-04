# Movie Watchlist App

A modern React-based movie discovery and watchlist management application that allows users to browse trending movies, search for specific films, and maintain a personal watchlist with advanced filtering and sorting capabilities.

## Features

### 🎬 Movie Discovery
- Browse trending movies from TMDB (The Movie Database)
- Search movies by title
- View movie details including poster, rating, popularity, and genre
- Pagination support for browsing more movies

### 📋 Watchlist Management
- Add movies to personal watchlist
- Remove individual movies from watchlist
- Clear entire watchlist
- Persistent storage using localStorage

### 🔍 Advanced Filtering & Sorting
- Filter watchlist by genre (Action, Comedy, Drama, etc.)
- Sort watchlist by:
  - Name (alphabetical)
  - Rating (highest/lowest)
  - Popularity (most/least popular)
- Search within watchlist

### 🎨 User Interface
- Responsive design with Tailwind CSS
- Clean, modern UI with intuitive navigation
- Visual feedback for user interactions
- Mobile-friendly layout

## Tech Stack

- **Frontend Framework:** React 19
- **Build Tool:** Vite
- **Styling:** Tailwind CSS
- **Routing:** React Router DOM
- **HTTP Client:** Axios
- **Icons:** React Icons
- **API:** The Movie Database (TMDB) API

## Installation

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd ibm-clone
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up environment variables:**
   - The app uses TMDB API key which is already configured in `src/services/movieService.js`
   - For production deployment, consider moving the API key to environment variables

4. **Start the development server:**
   ```bash
   npm run dev
   ```

5. **Open your browser:**
   - Navigate to `http://localhost:5173` (default Vite port)

## Usage

### Browsing Movies
- On the home page, view trending movies
- Use the search bar in the navbar to find specific movies
- Click "Add to Watchlist" to save movies for later

### Managing Watchlist
- Navigate to the "Watchlist" page
- Use genre buttons to filter movies by category
- Click table headers to sort by name, rating, or popularity
- Use the search bar to find movies within your watchlist
- Click the trash icon to remove individual movies
- Use "Clear all" to remove all movies from watchlist

### Navigation
- **Home:** Browse and search movies
- **Watchlist:** View and manage your saved movies
- **About:** Learn more about the application

## Project Structure

```
src/
├── components/
│   ├── About.jsx          # About page component
│   ├── Banner.jsx         # Hero banner component
│   ├── MovieCards.jsx     # Individual movie card component
│   ├── Movies.jsx         # Movies listing page
│   ├── Navbar.jsx         # Navigation bar
│   ├── Pagination.jsx     # Pagination component
│   └── WatchList.jsx      # Watchlist management page
├── services/
│   └── movieService.js    # TMDB API service functions
├── Utilities/
│   └── genre.js           # Genre mapping utility
├── App.jsx                # Main application component
└── main.jsx               # Application entry point
```

## API Integration

The app integrates with The Movie Database (TMDB) API:

- **Trending Movies:** Fetches daily trending movies
- **Search Movies:** Searches movies by query
- **Genre Mapping:** Maps genre IDs to readable names

API endpoints used:
- `GET /trending/all/day` - Get trending movies
- `GET /search/movie` - Search for movies

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is for educational purposes and is not affiliated with IBM or TMDB.

## Acknowledgments

- [The Movie Database (TMDB)](https://www.themoviedb.org/) for providing the movie data API
- [React](https://reactjs.org/) for the frontend framework
- [Tailwind CSS](https://tailwindcss.com/) for styling
- [Vite](https://vitejs.dev/) for the build tool
