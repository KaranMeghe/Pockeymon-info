const ProfileCard = ({ number, name, description, image }) => {
  return (
    <div className="card">
      <div className="card-image">
        <figure className="image is-1by1">
          <img src={image} alt="Personal digital assistance logo" />
        </figure>
      </div>

      <div className="card-content">
        <div className="media-content">
          <p className="title is-4">{name}</p>
          <p className="subtitle is-6">{number}</p>
        </div>

        <div className="content">
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
