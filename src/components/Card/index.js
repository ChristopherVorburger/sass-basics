import React from "react";
import image from "../../images/sunset.jpg";

const Card = () => {
  return (
    <div className="card">
      <h1 className="card__title">Sunset 🌞</h1>
      <img className="card__image" src={image} alt="sunset" />
      <p className="card__comment">
        Beautiful sunset at{" "}
        <a className="card__comment--link" href="https://bakonationalpark.com">
          Bako national Park
        </a>
      </p>
    </div>
  );
};

export default Card;
