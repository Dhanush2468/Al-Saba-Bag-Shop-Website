import React from 'react';
import './Cards.css';

const Cards = ({ rname, imgdata, address, delimg, somedata, price, rating, arrimg }) => {
  return (
    <div className="card">
      <div className="card-image">
        <img src={imgdata} alt={rname} />
      </div>
      <div className="card-details">
        <div className="restaurant-name">{rname}</div>
        <div className="restaurant-address">{address}</div>
        <div className="delivery-image">
          <img src={delimg} alt="Delivery" />
          <div className="order-count">{somedata}</div>
        </div>
        <div className="price">{price}</div>
        <div className="rating">
          <img src={arrimg} alt="Rating" />
          <div className="rating-value">{rating}</div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
