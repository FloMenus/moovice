import React from 'react'
import { Link } from 'react-router-dom'

function Popular() {
  const fetchData = async () => {
    const response = await fetch('https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=1068f48961417d98e5c5673164bb2d37')
    const data = await response.json()
    console.log(data)
  }

  fetchData()
  return (
    <div>
      <header>
        <Link to="/">Home</Link>
        <Link to="/weekly">Weekly</Link>
        <Link to="/popular">Popular</Link>
        <Link to="/favorites">Favorites</Link>
      </header>
        <h1>Popular</h1>
    </div>
  )
}

export default Popular