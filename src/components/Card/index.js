import React from "react";
import fakeData from "../../fakeData";

const Card = () => {
  // Using function .map to create componants Card with fakeData
  return fakeData.map((card) => {
    return (
      <div className="card">
        <h1 className="card__title">
          {card.title} {card.emoji}
        </h1>
        <img className="card__image" src={card.picture_path} alt="sunset" />
        <p className="card__comment">
          <a
            className="card__comment--link"
            href={card.link}
            target="_blank"
            rel="noreferrer"
          >
            {card.comment}
          </a>
        </p>
      </div>
    );
  });
};

export default Card;
