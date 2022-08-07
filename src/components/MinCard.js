
const MinCard = (prop) => {
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
