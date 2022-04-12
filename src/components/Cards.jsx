import React, { Component } from "react";

export default class Cards extends Component {
  render() {
    const { name, status, species, image, origin, location } =
      this.props.personaje;
    return (
      <>
        <div className="card">
          <div className="card-img">
            <img src={image} alt="" />
          </div>
          <div className="card-info">
            <h2>{name}</h2>
            <p>
              <span>{status}</span> - {species}
            </p>
            <br />
            <p className="subtitle">Last Known location: </p>
            <p>{origin.name}</p>
            <br />
            <p className="subtitle">First seen in: </p>
            <p>{location.name}</p>
          </div>
        </div>
      </>
    );
  }
}
