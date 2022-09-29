import placeholder from "../images/placeholder.png";

const ActorCard = (prop) => {
  return (
    <div className="min-card-actor">
      <img
        src={
          !prop.actor.profile_path
            ? placeholder
            : `https://image.tmdb.org/t/p/w300/${prop.actor.profile_path}`
        }
        alt={prop.actor.character}
        className="min-card-actor-image"
      />
      <h4>{`${prop.actor.name} (${prop.actor.character})`}</h4>
    </div>
  );
};

export default ActorCard;
