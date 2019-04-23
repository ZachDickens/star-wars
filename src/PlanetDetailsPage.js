import React, { Component } from "react";

class PlanetDetailsPage extends Component {
  constructor() {
    super();
    this.state = { planet: {} };
  }
  componentDidMount() {
    const id = this.props.match.params.planetId;
    fetch(`https://swapi.co/api/planets/${id}`)
      .then(res => res.json())
      .then(json =>
        this.setState({
          planet: json,
          loading: false
        })
      );
  }
  render() {
    const planetId = this.props.match.params.planetId;
    return (
      <div>
        <h1>Planet Details For {this.state.planet.name}</h1>
        <p>ToDo: Put Planet Details Here.</p>
      </div>
    );
  }
}

export default PlanetDetailsPage;
