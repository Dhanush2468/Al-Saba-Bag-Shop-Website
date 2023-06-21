import React from 'react';
import CategoryRow from '../BagsCategorys/CategoryRow';
import Navbar from '../Navbar/Navbar';
import './AllCardsData.css';
import CollageBagData from '../BagsData/CollageBagData';
import Cards from './Cards';
import Footer from '../../../Pages/Footer/Footer';

const Collagebag = () => {
  return (
    <div>
      <Navbar /><br />
      <h3>Catagories</h3><br /><br /><br />

      <div className='catagories'>
        <CategoryRow /><br />
        <hr />
      </div><br />
      <h2>Collage Bags</h2>
      <div className="card-container"> {/* Added the card-container class */}
        {CollageBagData.map((item) => (
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
      <Footer />
    </div>
  );
};

export default Collagebag;
