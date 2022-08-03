import React from "react";
import { Link } from 'react-router-dom'

function Weekly() {
  return (
    <div>
      <header>
        <Link to="/">Home</Link>
        <Link to="/weekly">Weekly</Link>
        <Link to="/popular">Popular</Link>
        <Link to="/favorites">Favorites</Link>
      </header>
      <h1>Weekly</h1>
    </div>
  );
}

export default Weekly;
