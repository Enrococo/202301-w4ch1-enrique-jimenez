import React from "react";
import "./App.css";
import Card from "../Gentlemen/Gentlemen";
import { gentlemenList } from "../../data/gentlemen.info";

function App() {
  return (
    <div className="App">
      {gentlemenList.map((gentleman) => (
        <Card gentleman={gentleman} />
      ))}
    </div>
  );
}

export default App;
