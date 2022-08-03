import React from 'react'
import { Link } from 'react-router-dom'

function Favorites() {
  return (
    <div>
      <header>
        <Link to="/">Home</Link>
        <Link to="/weekly">Weekly</Link>
        <Link to="/popular">Popular</Link>
        <Link to="/favorites">Favorites</Link>
      </header>
        <h1>Favorites</h1>
        
    </div>
  )
}

export default Favorites