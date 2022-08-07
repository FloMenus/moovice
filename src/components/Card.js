import React from "react";

const Card = (prop) => {
  const handleClickAddFavorites = () => {
    let favorites = [];

    if (localStorage.favoriteIds) {
      const localStorageIds = localStorage.getItem("favoriteIds");
      favorites = JSON.parse(localStorageIds);
    }

    const checkId = favorites.find((id) => {
      return id === prop.movie.id;
    });

    if (!checkId) {
      favorites.push(prop.movie.id);
    }

    const stringifiedIds = JSON.stringify(favorites);
    localStorage.setItem("favoriteIds", stringifiedIds);
  };

  const handleClickRemoveFavorites = () => {
    let favorites = [];

    const localStorageIds = localStorage.getItem("favoriteIds");
    favorites = JSON.parse(localStorageIds);
    favorites.splice(favorites.indexOf(prop.movie.id), 1);

    const stringifiedIds = JSON.stringify(favorites);
    localStorage.setItem("favoriteIds", stringifiedIds);
    prop.fetchFav(favorites);
  };

  return (
    <div>
      <img
        src={!prop.movie.poster_path ? 'https://www.pngall.com/wp-content/uploads/1/Film-High-Quality-PNG.png'
        :
        `https://image.tmdb.org/t/p/w300/${prop.movie.poster_path}`}
        alt={prop.movie.title}
      />
      <h3>{prop.movie.title}</h3>
      <h4>Release: {prop.movie.release_date}</h4>
      <p>{prop.movie.overview}</p>
      <button
        onClick={() =>
          prop.favorite === "Add"
            ? handleClickAddFavorites()
            : handleClickRemoveFavorites()
        }
      >
        Favorite
      </button>
    </div>
  );
};

export default Card;
