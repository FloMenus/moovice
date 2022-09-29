import placeholder from "../images/placeholder.png";
import { Link } from "react-router-dom";

const MinCard = (prop) => {
  return (

    <Link to = {`/movie/${prop.movie.id}`}>
    <div className="min-card">
      <img
        src={
          !prop.movie.poster_path
            ? placeholder
            : `https://image.tmdb.org/t/p/w300/${prop.movie.poster_path}`
        }
        alt={prop.movie.title}
        className="min-card-image" {...prop.movie.adult ? "adult" : ""}
      />
    </div>
    </Link>
  );
};

export default MinCard;
