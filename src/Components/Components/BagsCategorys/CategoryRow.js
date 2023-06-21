import React from 'react';
import { Link } from 'react-router-dom';
import './CategoryRow.css';

const CategoryRow = () => {
  const categories = [
    { name: 'SchoolBag', icon: 'https://cdn-icons-png.flaticon.com/512/3429/3429142.png', path: '/schoolbag' },
    { name: 'CollageBag', icon: 'https://cdn0.iconfinder.com/data/icons/tutor-icon-set/512/Backpack_icon-512.png', path: '/collagebag' },
    { name: 'Lunch Bag', icon: 'https://e7.pngegg.com/pngimages/589/475/png-clipart-bento-cafe-bag-lunchbox-waterproof-bag-lunch-bags-blue-white-thumbnail.png', path: '/lunchbag' },
    { name: 'Girls Bag', icon: 'https://www.shutterstock.com/image-vector/girl-backpack-isolated-cartoon-school-260nw-1782064577.jpg', path: '/ladiesbag' },
    { name: 'TooristBag', icon: 'https://cdn-icons-png.flaticon.com/512/5333/5333722.png', path: '/tooristbag' },
    { name: 'Duffel Bag', icon: 'https://img.freepik.com/premium-vector/sport-bag-sportswear-equipment-travel-bag-sea-bag-icon-isolated-white-background-bag-training-fitness-duffel-bag-vector-illustration-flat-design-isolated-white_545793-1056.jpg?w=2000', path: '/breafcase' },
    { name: 'SeelingBag', icon: 'https://png.pngitem.com/pimgs/s/194-1942105_leather-crossbody-bags-for-girls-hd-png-download.png', path: '/seelingbag' },
    { name: 'LadiesPerse', icon: 'https://cdn-icons-png.flaticon.com/512/3050/3050177.png', path: '/ladiesperse' },
  ].slice(0, 8); // Limiting to a maximum of 8 categories

  return (
    <div className="category-row">
      {categories.map((category, index) => (
        <Link to={category.path} key={index} className="category-item">
          <img src={category.icon} alt={category.name} />
          <span>{category.name}</span>
        </Link>
      ))}
    </div>
  );
};

export default CategoryRow;