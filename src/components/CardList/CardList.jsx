import "./CardList.css";
import Card from "../Card/Card";

const CardList = ({ monsters }) => (
  <div className="cardList">
    {monsters.map((monster) => {
      return <Card monster={monster} />;
    })}
  </div>
);

export default CardList;
