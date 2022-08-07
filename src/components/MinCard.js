import { Link } from "react-router-dom";

const MinCard = (prop) => {
  const handleClickFavorites = () => {
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
  return (
    <div>
      <img
        src={`https://image.tmdb.org/t/p/w300/${prop.movie.poster_path}`}
        alt={prop.movie.title}
      />
      <h3>{prop.movie.title}</h3>
    </div>
  );
};

export default MinCard;
