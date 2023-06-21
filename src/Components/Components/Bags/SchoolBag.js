import React from 'react'
import CategoryRow from '../BagsCategorys/CategoryRow';
import Navbar from '../Navbar/Navbar';
import './AllCardsData.css'
import Collagebag1 from './Collagebag1';
import Footer from '../../../Pages/Footer/Footer';
const SchoolBag = () => {
  return (
    <div>
    <Navbar /><br />
    <h3>Catagories</h3><br /><br /><br />

    <div className='catagories'>
        <CategoryRow /><br />
        <hr />
    </div><br />
    <h2>School Bags</h2>
    <Collagebag1 />
    <Footer />
   </div>
   
  )
}

export default SchoolBag;