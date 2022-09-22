import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Card from "../components/Card";
import PageTitle from "../components/PageTitle";

const Favorites = () => {
  const [favoriteMovies, setFavoriteMovies] = useState([]);

  useEffect(() => {
    let favoriteIdsArray;

    if (localStorage.favoriteIds) {
      const localStorageIds = localStorage.getItem("favoriteIds");
      favoriteIdsArray = JSON.parse(localStorageIds);
      fetchFavorites(favoriteIdsArray);
    }
    // eslint-disable-next-line
  }, []);

  const fetchMovie = async (id) => {
    const request = await fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=1068f48961417d98e5c5673164bb2d37`
    );
    const response = await request.json();
    return response;
  };

  const fetchFavorites = async (idsArray) => {
    const promises = idsArray.map((id) => {
      return fetchMovie(id);
    });

    const promiseAll = await Promise.all(promises);
    setFavoriteMovies(promiseAll);
  };

  if (!favoriteMovies) {
    return <p>Loading..</p>;
  }

  return (
    <div>
      <PageTitle title="Favorites" />
      <div className="page-main-container">
        {favoriteMovies.map((movie) => {
          return (
            <Card
              key={movie.title}
              movie={movie}
              favorite={"Remove"}
              fetchFav={fetchFavorites}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Favorites;
