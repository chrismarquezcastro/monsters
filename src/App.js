import React, { Component } from "react";

import CardList from "./components/CardList/CardList";

import "./App.css";
import SearchBox from "./components/SearchBox/SearchBox";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) =>
        this.setState(
          () => {
            return { monsters: users };
          },
          () => {}
        )
      );
  }

  onSearchChange = (event) => {
    const searchField = event.target.value.toLocaleLowerCase();
    this.setState(() => {
      return { searchField };
    });
  };

  render() {
    const { monsters, searchField } = this.state;
    const { onSearchChange } = this;

    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });

    return (
      <div className="App">
        <h1 className="appTitle">Monsters SA de CV</h1>
        <br></br>
        <SearchBox
          onChangeHandler={onSearchChange}
          placeholder="search monsters"
          className="monstersSearchBox"
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
