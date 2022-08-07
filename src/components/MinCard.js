
const MinCard = (prop) => {
  return (
    <div>
      <img
        src={!prop.movie.poster_path ? 'https://www.pngall.com/wp-content/uploads/1/Film-High-Quality-PNG.png'
        :
        `https://image.tmdb.org/t/p/w300/${prop.movie.poster_path}`}
        alt={prop.movie.title}
      />
      <h3>{prop.movie.title}</h3>
    </div>
  );
};

export default MinCard;
