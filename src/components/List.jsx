import React, { Component } from "react";
import Cards from "./Cards";

export default class List extends Component {
  constructor() {
    super();
    this.state = {
      personajes: [],
    };
  }

  componentDidMount() {
    this.getPersonajes();
  }

  getPersonajes = async () => {
    const API_URL = "https://rickandmortyapi.com/api/character/";
    const resp = await fetch(API_URL);
    const data = await resp.json();
    const { results } = data;
    this.setState({ personajes: results });
  };

  render() {
    return (
      <>
        <header>
          <h3>Personajes Rick and Morty</h3>
        </header>
        <div id="main">
          {this.state.personajes.map((personaje, index) => (
            <Cards personaje={personaje} key={index} />
          ))}
        </div>
      </>
    );
  }
}
