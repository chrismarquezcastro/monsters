import { Component } from "react";
import "./CardList.css";
import Card from "../Card/Card";

class CardList extends Component {
  render() {
    const { monsters } = this.props;

    return (
      <div className="cardList">
        {monsters.map((monster) => {
          return <Card monster={monster} />;
        })}
      </div>
    );
  }
}

export default CardList;
