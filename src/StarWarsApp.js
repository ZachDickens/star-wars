import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./StarWarsApp.css";
import PlanetsListPage from "./PlanetsListPage";
import PlanetDetailsPage from "./PlanetDetailsPage";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <nav>
            <Link to="/planet">Home</Link>
            <Link to="/planet/4">Details</Link>
            <a href="https://www.google.com">Google</a>
          </nav>

          <Route path="/" exact component={PlanetsListPage} />
          <Route path="/planet" exact component={PlanetsListPage} />
          <Route path="/planet/:planetId" component={PlanetDetailsPage} />
        </Router>
      </div>
    );
  }
}

export default App;
