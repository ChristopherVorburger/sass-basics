import React from 'react';
import image from '../../images/sunset.jpg'

const Card = () => {
 return (
    <div className="card">
      <h1>Card title</h1>
      <img src={image} alt="sunset" width="300" />
      <p>Card comment</p>
    </div>
  );
};

export default Card;
