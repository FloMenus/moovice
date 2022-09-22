import placeholder from "../images/placeholder.png";

const MinCard = (prop) => {
  return (
    <div className="min-card">
      {/* <h3 className="min-card-title">{prop.movie.title}</h3> */}
      <img
        src={
          !prop.movie.poster_path
            ? placeholder
            : `https://image.tmdb.org/t/p/w300/${prop.movie.poster_path}`
        }
        alt={prop.movie.title}
        className="min-card-image"
      />
    </div>
  );
};

export default MinCard;
