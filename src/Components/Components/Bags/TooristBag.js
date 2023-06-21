import React from 'react';
import CategoryRow from '../BagsCategorys/CategoryRow';
import Navbar from '../Navbar/Navbar';
import './AllCardsData.css';
import Cards from './Cards';
import TrollyBagData from '../BagsData/TrollyBagData';
import Footer from '../../../Pages/Footer/Footer';

const TooristBag = () => {
  return (
    <div>
      <Navbar /><br />
      <h3>Catagories</h3><br /><br /><br />

      <div className='catagories'>
        <CategoryRow /><br />
        <hr />
      </div><br />
      <h2>Toorist Bags</h2>
      <div className="card-container"> {/* Added the card-container class */}
        {TrollyBagData.map((item) => (
          <Cards
            key={item.id}
            rname={item.rname}
            imgdata={item.imgdata}
            address={item.address}
            delimg={item.delimg}
            somedata={item.somedata}
            rating={item.rating}
            arrimg={item.arrimg}
          />
        ))}
      </div><br />
      <Footer />
    </div>
  );
};

export default TooristBag;
