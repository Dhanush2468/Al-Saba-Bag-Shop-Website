import React from 'react'
import CategoryRow from '../BagsCategorys/CategoryRow';
import Navbar from '../Navbar/Navbar';
import './AllCardsData.css'

const RucksackBag = () => {
  return (
    <div>
    <Navbar /><br />
    <h3>Catagories</h3><br /><br /><br />

    <div className='catagories'>
        <CategoryRow /><br />
        <hr />
    </div><br />
    <h2>Cards</h2>
    <div className="schoolbag">
        <h1 className="title">
            RuckSackBag Crds
        </h1>
    </div>
   </div>
  )
}

export default RucksackBag