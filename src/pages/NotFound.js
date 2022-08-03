import React from 'react'
import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <div>
      <header>
        <Link to="/">Home</Link>
        <Link to="/weekly">Weekly</Link>
        <Link to="/popular">Popular</Link>
        <Link to="/favorites">Favorites</Link>
      </header>
        <h1>NotFound</h1>
    </div>
  )
}

export default NotFound