import { useState, useEffect } from "react";

import CardList from "./components/CardList/CardList";

import "./App.css";
import SearchBox from "./components/SearchBox/SearchBox";

const App = () => {
  const [searchField, setSearchField] = useState("");
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => setMonsters(users));
  }, []);

  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });

    setFilteredMonsters(newFilteredMonsters);
  }, [monsters, searchField]);

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  };

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
};

export default App;
