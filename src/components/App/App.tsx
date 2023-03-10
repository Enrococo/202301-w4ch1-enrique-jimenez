import "./App.css";
import Card from "../Gentlemen/Gentlemen";
import { gentlemenList } from "../../data/gentlemen.info";

function App() {
  return (
    <div className="container">
      <header className="main-header">
        <h1 className="main-title">The pointing gentlemen</h1>
      </header>
      <section className="controls">
        <p className="info">
          {" "}
          {gentlemenList.length} gentlemen pointing at you
        </p>
        <button className="button button--select">Select all</button>
      </section>
      <ul>
        {gentlemenList.map((gentleman) => (
          <Card gentleman={gentleman} />
        ))}
      </ul>
    </div>
  );
}

export default App;
