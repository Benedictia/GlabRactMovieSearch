import { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";

import MovieDisplay from "./components/MovieDisplay";
import Form from "./components/Form";
const apiKey = "98e3fb1f";


export default function App() {
  const [movie, setMovie] = useState(null);

  // The getMovie function that fetches movie data from OMDB API
  const getMovie = async (searchTerm) => {
    try {
      const response = await fetch(
        `http://www.omdbapi.com/?apikey=${apiKey}&t=${searchTerm}`
      );
      const data = await response.json();

      setMovie(data);
    } catch (e) {
      console.error("Error fetching movie:", e);
    }
  };

  // This will run on the first render but not on subsequent renders
  useEffect(() => {
    getMovie("Clueless"); // Default movie search
  }, []); // Empty dependency array ensures it runs only once on component mount

  return (
    <div className="App">
      <Form moviesearch={getMovie} /> {/* Form component that triggers search */}
      <MovieDisplay movie={movie} />  {/* Movie display component to show movie data */}
    </div>
  );
}





















