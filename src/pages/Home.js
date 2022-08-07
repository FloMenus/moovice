import React from "react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import MinCard from "../components/MinCard";

function Home() {
  const [latest, setLatest] = useState([]);
  const [topRated, setTopRated] = useState(null);
  const [nowPlaying, setNowPlaying] = useState(null);
  const [upcoming, setUpcoming] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const requestLatest = await fetch(
      `https://api.themoviedb.org/3/movie/latest?api_key=1068f48961417d98e5c5673164bb2d37&language=en-US`
    );
    const responseLatest = await requestLatest.json();
    setLatest(responseLatest);

    const requestTopRated = await fetch(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=1068f48961417d98e5c5673164bb2d37&page=1`
    );
    const responseTopRated = await requestTopRated.json();
    setTopRated(responseTopRated.results);

    const requestNowPlaying = await fetch(
      `https://api.themoviedb.org/3/movie/now_playing?api_key=1068f48961417d98e5c5673164bb2d37&page=1`
    );
    const responseNowPlaying = await requestNowPlaying.json();
    setNowPlaying(responseNowPlaying.results);

    const requestUpcoming = await fetch(
      `https://api.themoviedb.org/3/movie/upcoming?api_key=1068f48961417d98e5c5673164bb2d37&page=1`
    );
    const responseUpcoming = await requestUpcoming.json();
    setUpcoming(responseUpcoming.results);
  };

  console.log(latest);
  return (
    <div>
      <header>
        <Link to="/">Home</Link>
        <Link to="/weekly">Weekly</Link>
        <Link to="/popular">Popular</Link>
        <Link to="/favorites">Favorites</Link>
      </header>

      <h1>Home</h1>
      <div>
        <h2>Latest</h2>
        <MinCard movie={latest} key={latest.id} />
      </div>
      <div>
        <h2>Top Rated</h2>
        {!topRated ? (
          <p>Loading..</p>
        ) : (
          topRated.map((movie) => {
            return <MinCard movie={movie} key={movie.id} />;
          })
        )}
      </div>
      <div>
        <h2>Now Playing</h2>
        {!nowPlaying ? (
          <p>Loading..</p>
        ) : (
          nowPlaying.map((movie) => {
            return <MinCard movie={movie} key={movie.id} />;
          })
        )}
      </div>
      <div>
        <h2>Upcoming</h2>
        {!upcoming ? (
          <p>Loading..</p>
        ) : (
          upcoming.map((movie) => {
            return <MinCard movie={movie} key={movie.id} />;
          })
        )}
      </div>
    </div>
  );
}

export default Home;
