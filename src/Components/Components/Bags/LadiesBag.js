import React from 'react';
import CategoryRow from '../BagsCategorys/CategoryRow';
import Navbar from '../Navbar/Navbar';
import './AllCardsData.css';
import Cards from './Cards';
import Footer from '../../../Pages/Footer/Footer';
import LadiesBagData from '../BagsData/LadiesBagData';

const LadiesBag = () => {
  return (
    <div>
      <Navbar /><br />
      <h3>Catagories</h3><br /><br /><br />

      <div className='catagories'>
        <CategoryRow /><br />
        <hr />
      </div><br />
      <h2>Girls Bags</h2>
      <div className="card-container"> {/* Added the card-container class */}
        {LadiesBagData.map((item) => (
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

export default LadiesBag;
