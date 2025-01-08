import React from "react";
import { Link } from "react-router-dom";

function Card({ title, description, link }) {
  return (
    <div className="card">
      <h2>{title}</h2>
      <p>{description}</p>
      <Link to={link}>
        <button className="primary">Learn More</button>
      </Link>
    </div>
  );
}

export default Card;
