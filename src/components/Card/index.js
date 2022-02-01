import React from "react";
import fakeData from "../../fakeData";
// Import icons from react-icons
import { FcLike } from "react-icons/fc";
import { BsFillShareFill } from "react-icons/bs";

const Card = () => {
  return fakeData.map((card) => {
    return (
      <div className="card" key={card.title}>
        {/* Using icons with a suitable size*/}
        <FcLike className="card__like" size={30} />
        <BsFillShareFill className="card__share" size={30} />
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
