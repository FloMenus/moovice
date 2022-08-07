import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Card from "../components/Card";

function Popular() {
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const request = await fetch(
      `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=1068f48961417d98e5c5673164bb2d37`
    );
    const response = await request.json();
    setMovies(response);
  };
  if (!movies) {
    return <div>Loading ...</div>;
  }
  console.log(movies)

  return (
    <div>
      <header>
        <Link to="/">Home</Link>
        <Link to="/weekly">Weekly</Link>
        <Link to="/popular">Popular</Link>
        <Link to="/favorites">Favorites</Link>
      </header>
      <h1>Popular</h1>
      {movies.results.map((movie) => (
      <Card key={movie.title} movie={movie} favorite={"Add"} />
      ))}
    </div>
  );
}

export default Popular;

// const handleClickFavorite = (id) => {
//   if (localStorage.favoriteIds === undefined) {
//     const array = [];
//     array.push(id);
//     console.log(array);
//     const stringify = JSON.stringify(array);
//     localStorage.setItem("favoriteIds", stringify);
//   } else {
//     const localStorageIds = localStorage.getItem("favoriteIds");
//     const favoriteIds = JSON.parse(localStorageIds);
//     const isInclude = favoriteIds.includes(id);
//     if (isInclude) {
//       const stringify = JSON.stringify(favoriteIds);
//       localStorage.setItem("favoriteIds", stringify);
//     }
//   }
// };
