import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import MinCard from "../components/MinCard";
import ActorCard from "../components/ActorCard";

import placeholder from "../images/placeholder.png";

import "../style/App.css";
import "../style/Movie.css";

const Home = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState([]);
  const [cast, setCast] = useState([]);
  const [similars, setSimilars] = useState([]);

  useEffect(() => {
    fetchData();
    fetchCast();
    fetchSimilars();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchData = async () => {
    const requestMovie = await fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=1068f48961417d98e5c5673164bb2d37&language=en-US`
    );
    const responseMovie = await requestMovie.json();
    setMovie(responseMovie);
  };
  const fetchCast = async () => {
    const requestCast = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/credits?api_key=1068f48961417d98e5c5673164bb2d37&language=en-US`
    );
    const responseCast = await requestCast.json();
    setCast(responseCast.cast);
  };
  const fetchSimilars = async () => {
    const requestSimilars = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/similar?api_key=1068f48961417d98e5c5673164bb2d37&language=en-US&page=1`
    );
    const responseSimilars = await requestSimilars.json();
    setSimilars(responseSimilars.results);
  };

  

  return (
    <>
      <div className="movie-container">
        <div className="movie-main-info">
          <img
            className="movie-poster"
            src={
              movie.poster_path
                ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                : placeholder
            }
            alt={movie.title}
          />
          <div className="movie-info-text">
            <h2 className="movie-title">{movie.title}</h2>
            <div className="movie-genres">
            {movie.genres
              ? movie.genres.map((genre) => {
                  return (
                    <button className="genre" key={genre.id}>
                      {genre.name}
                    </button>
                  );
                })
              : null}
            </div>
            <h4 className="movie-info movie-release">
              Release: {movie.release_date}
            </h4>
            {movie.production_companies ? (
              <div className="production-companies-wrapper ">
                <h4 className="movie-info movie-production">Production: </h4>
                <div className="production-companies-names">
                  {movie.production_companies.map((company) => {
                    // Si c'est la dernière company, on ne met pas de virgule, sinon on met une virgule
                    if (company !== movie.production_companies.slice(-1)[0]) {
                      return `${company.name}, `;
                    } else {
                      return <p>{` ${company.name}`}</p>;
                    }
                  })}
                </div>
              </div>
            ) : null}
          </div>
        </div>
        <div className="movie-overview-container">
          <h3 className="movie-overview-title">Overview</h3>
          <p className="movie-overview">{movie.overview}</p>
        </div>
        <div className="movie-cast-main-container">
      <h2 className="cast-title">Casting</h2>
      <div className="movie-cast-container">
        <div className="movie-cast-wrapper">
          {!cast ? (
            <p>Loading..</p>
          ) : (
            cast.map((actor) => {
             return <ActorCard actor={actor} />;
            })
          )}
        </div>
      </div>
      </div>
      </div>
      <h2 className="similar-title">Similar movies</h2>
      <div className="movie-similars-container">
        <div className="movie-similars-wrapper">
          {!similars ? (
            <p>Loading..</p>
          ) : (
            similars.map((movie) => {
              return <MinCard movie={movie} />;
            })
          )}
        </div>
      </div>
    </>
  );
};
export default Home;
