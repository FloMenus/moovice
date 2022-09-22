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
    <>
      {/* <div>
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
    </div> */}
      <div class="w-full md:w-full lg:w-1/2 max-w-2xl rounded overflow-hidden shadow-lg m-4 flex justify-between">
        <div class="md:flex-shrink-0">
          <img
            class="md:w-56"
            src={
              !prop.movie.poster_path
                ? "https://www.pngall.com/wp-content/uploads/1/Film-High-Quality-PNG.png"
                : `https://image.tmdb.org/t/p/w300/${prop.movie.poster_path}`
            }
            alt={prop.movie.title}
          />
        </div>
        <div class="flex flex-col flex-grow px-8 py-4 bg-red-900">
          <h3 class="font-bold text-4xl md:text-2xl lg:text-2xl text-gray-200 movie--title">
            {prop.movie.title}
          </h3>
          <span class="movie--year text-xl lg:text-sm lg:mb-4 text-white">
            {prop.movie.release_date}
          </span>
          <div class="flex-grow">
            <p class="text-xl md:text-base lg:text-base text-gray-100 leading-snug truncate-overflow">
              A family is forced to live in silence while hiding from creatures
              that hunt by sound.
            </p>
          </div>
          <div class="button-container flex justify-between mb-2">
            {/* <button class="text-lg mr-4 lg:text-sm text-gray-200">More Info</button> */}
            <button
              class="text-lg lg:text-sm font-bold py-2 px-4 rounded bg-orange-200 text-orange-700"
              onClick={() =>
                prop.favorite === "Add"
                  ? handleClickAddFavorites()
                  : handleClickRemoveFavorites()
              }
            >
              Favorite
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
