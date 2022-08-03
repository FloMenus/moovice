import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Card from "../components/Card";

function Popular() {
  // const params = useParams
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch(
      "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=1068f48961417d98e5c5673164bb2d37"
    );
    const data = await response.json();

    setMovies(data.results);
  };

  console.log(movies);

  return (
    <div>
      <header>
        <Link to="/">Home</Link>
        <Link to="/weekly">Weekly</Link>
        <Link to="/popular">Popular</Link>
        <Link to="/favorites">Favorites</Link>
      </header>
      <h1>Popular</h1>
      {movies &&
        movies.map((movie) => (
          <Card
            key={movie.id}
            title={movie.title}
            image={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
            release={movie.release_date}
            description={movie.overview}
          />
        ))}
    </div>
  );
}

export default Popular;
