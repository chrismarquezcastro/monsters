import "./Card.css";

const Card = ({ monster }) => {
  const { id, name, email } = monster;
  return (
    <div className="cardContainer" key={id}>
      <img
        key={id}
        alt={`monster ${name}`}
        src={`https://robohash.org/${id}?set=set2&size=240x240`}
      />
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  );
};

export default Card;
