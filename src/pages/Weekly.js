import React from "react";
import { useEffect, useState } from "react";
import moment from "moment";
import Card from "../components/Card";
import PageTitle from "../components/PageTitle";

import "../style/App.css";
import "../style/Weekly.css";

const Weekly = () => {
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line
  }, []);

  const fetchData = async () => {
    const request = await fetch(`http://api.themoviedb.org/3/discover/movie?primary_release_date.gte=${moment().subtract(7, 'd').format("YYYY-MM-DD")}&primary_release_date.lte=${moment().format("YYYY-MM-DD")}&api_key=1068f48961417d98e5c5673164bb2d37`);
    const response = await request.json();
    setMovies(response.results);
  };

  if (!movies) {
    return <p>Loading...</p>;
  }
  return (
    <div>
      <PageTitle title="Weekly" />
      <div className="page-main-container">
        {movies.map((movie) => {
          return <Card key={movie.title} movie={movie} favorite={"Add"} />;
        })}
      </div>
    </div>
  );
}

export default Weekly;
