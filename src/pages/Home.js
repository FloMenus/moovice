import React from 'react'
import { Link } from 'react-router-dom'


function Home() {
  return (
    <div>
      <header>
        <Link to="/">Home</Link>
        <Link to="/weekly">Weekly</Link>
        <Link to="/popular">Popular</Link>
        <Link to="/favorites">Favorites</Link>
      </header>
        <h1>Home</h1>
    </div>
  )
}

export default Home