import React from "react";
import { useEffect, useState } from "react";

import MinCard from "../components/MinCard";

import "../style/App.css";

const Home = () => {
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


  return (
    <>
    {console.log(latest)}
        <h2 className="category-title no-bar">Latest</h2>
      <div className="latest-container">
        <MinCard movie={latest} key={latest.id} adult={latest.adult}/>
      </div>
      <h2 className="category-title">Top Rated</h2>
      <div className="top-container">
        <div className="top-wrapper">
          {!topRated ? (
            <p>Loading..</p>
          ) : (
            topRated.map((movie) => {
              return <MinCard movie={movie} key={movie.id} />;
            })
          )}
        </div>

      </div>
      <h2 className="category-title">Now Playing</h2>
      <div className="now-container">
        <div className="now-wrapper">
          {!nowPlaying ? (
            <p>Loading..</p>
          ) : (
            nowPlaying.map((movie) => {
              return <MinCard movie={movie} key={movie.id} />;
            })
          )}
        </div>
      </div>

      <div>
        <h2 className="category-title">Upcoming</h2>
        <div className="upcoming-container">
          <div className="upcoming-wrapper">
        {!upcoming ? (
          <p>Loading..</p>
        ) : (
          upcoming.map((movie) => {
            return <MinCard movie={movie} key={movie.id} />;
          })
        )}
      </div>
    </div>
    </div>
    </>

  );
}

export default Home;
