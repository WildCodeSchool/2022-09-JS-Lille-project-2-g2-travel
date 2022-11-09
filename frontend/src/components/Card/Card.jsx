import React from "react";
import "./card.css";
import PropTypes from "prop-types";

function Card({ Title, ImageUrl, Body }) {
  return (
    <div className="card-container">
      <div className="image-container">
        <img src={ImageUrl} alt="travelpicture" />
      </div>
      <div className="card-content">
        <div className="card-title">
          <h3>{Title}</h3>
        </div>
        <div className="card-body">
          <p>{Body}</p>
        </div>
      </div>
    </div>
  );
}

Card.propTypes = {
  Title: PropTypes.string.isRequired,
  ImageUrl: PropTypes.string.isRequired,
  Body: PropTypes.string.isRequired,
};
export default Card;
