import React from 'react';
import './AllCardsData.css';
import Cards from './Cards';
import CollageBagData1 from '../BagsData/CollageBagData1';

const Collagebag1 = () => {
  return (
    <div>
      <div className="card-container"> {/* Added the card-container class */}
        {CollageBagData1.map((item) => (
          <Cards
            key={item.id}
            rname={item.rname}
            imgdata={item.imgdata}
            address={item.address}
            delimg={item.delimg}
            somedata={item.somedata}
            // price={item.price}
            rating={item.rating}
            arrimg={item.arrimg}
          />
        ))}
      </div><br />
      {/* slider */}
    </div>
  );
};

export default Collagebag1;
