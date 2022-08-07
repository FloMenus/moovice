import React from "react";
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import moment from "moment"
import Card from "../components/Card";

function Weekly() {
  const [movies, setMovies] = useState(null)

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    const request = await fetch(`http://api.themoviedb.org/3/discover/movie?primary_release_date.gte=${moment().subtract(7, 'd').format("YYYY-MM-DD")}&primary_release_date.lte=${moment().format("YYYY-MM-DD")}&api_key=1068f48961417d98e5c5673164bb2d37`)

    const response = await request.json()
    setMovies(response.results)
  }

  if(!movies){
    return(
      <p>Loading...</p>
    )
  }
  return (
    <div>
      <header>
        <Link to="/">Home</Link>
        <Link to="/weekly">Weekly</Link>
        <Link to="/popular">Popular</Link>
        <Link to="/favorites">Favorites</Link>
      </header>
      <h1>Weekly</h1>

      {movies.map((movie) => {
        return (
          <Card
            key={movie.title}
            movie={movie}
            favorite={"Remove"}
          />
        );
      })}

    </div>
  );
}

export default Weekly;
