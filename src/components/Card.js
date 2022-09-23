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

  const width = window.innerWidth;
  const breakpoint = 768;

  return (
    <>
      {width < breakpoint ? (
        <div className="card card-compact w-96 bg-red-900 shadow-xl my-4">
          <figure>
            <img  src={
                !prop.movie.poster_path
                  ? "https://www.pngall.com/wp-content/uploads/1/Film-High-Quality-PNG.png"
                  : `https://image.tmdb.org/t/p/w300/${prop.movie.poster_path}`
              }
              className="w-full"
              alt={prop.movie.title} />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{prop.movie.title}</h2>
            <p className="card-overview">{prop.movie.overview}</p>
            <div className="card-actions">
            <button
                className="text-lg lg:text-sm font-bold py-2 px-4 rounded bg-orange-200 text-orange-700"
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
      ) : (
        <div className="w-full md:w-full lg:w-1/2 max-w-2xl rounded overflow-hidden shadow-lg m-4 flex justify-between">
          <div className="md:flex-shrink-0">
            <img
              className="md:w-56"
              src={
                !prop.movie.poster_path
                  ? "https://www.pngall.com/wp-content/uploads/1/Film-High-Quality-PNG.png"
                  : `https://image.tmdb.org/t/p/w300/${prop.movie.poster_path}`
              }
              alt={prop.movie.title}
            />
          </div>
          <div className="flex flex-col flex-grow px-8 py-4 bg-red-900">
            <h3 className="font-bold text-4xl md:text-2xl lg:text-2xl text-gray-200 movie--title">
              {prop.movie.title}
            </h3>
            <span className="movie--year text-xl lg:text-sm lg:mb-4 text-white">
              {prop.movie.release_date}
            </span>
            <div className="flex-grow">
              <p className="text-xl md:text-base w-48 h-36 lg:text-base text-gray-100 overflow-clip overflow-hidden ...">
                {prop.movie.overview}
              </p>
            </div>
            <div className="button-container flex justify-between mb-2">
              {/* <button className="text-lg mr-4 lg:text-sm text-gray-200">More Info</button> */}
              <button
                className="text-lg lg:text-sm font-bold py-2 px-4 rounded bg-orange-200 text-orange-700"
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
      )}
    </>
  );
};

export default Card;
