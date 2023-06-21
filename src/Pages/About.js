import React from 'react';
import './About.css';
import Navbar from '../Pages/Navbar/Navbar';
const About = () => {
  return (
    <div>
      <Navbar />
    <section id="about-section">
    <div className="about-left">
      <img src="https://images.unsplash.com/photo-1622560481156-01fc7e1693e6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c2Nob29sJTIwYmFnc3xlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80" alt="About Img" />
    </div>
    <div className="about-right">
      <h1 className='aboutme'>About Us</h1>
      <p>AL-Saba Leather Luggage Bag Shop is a premier destination for high-quality leather luggage bags. With a strong emphasis on craftsmanship and attention to detail, we take pride in offering a wide range of stylish and durable bags for the modern traveler.Our journey began over a decade ago when our founder, Mr. Ahmed Saeed, a passionate leather craftsman, established the shop with a vision to provide customers with exquisite leather bags that blend timeless design with functionality. At AL-Saba, we source only the finest leather materials from reputable suppliers to ensure the utmost quality and longevity of our products. Each bag is meticulously handcrafted by our skilled artisans, who have honed their skills over years of experience. This dedication to craftsmanship is what sets us apart, allowing us to create bags that not only look elegant but also withstand the test of time. We offer a diverse collection of luggage bags, ranging from classic briefcases and travel duffels to sleek backpacks and weekenders. Whether you're a business professional, an avid traveler, or someone who appreciates fine leather goods, we have the perfect bag to suit your style and needs. Customer satisfaction is at the core of our business philosophy. We strive to provide exceptional service and ensure that every customer has a seamless shopping experience. Our knowledgeable team is always ready to assist you in finding the ideal bag and answer any queries you may have. Thank you for choosing AL-Saba Leather Luggage Bag Shop. We look forward to helping you embark on your journeys with style and confidence.</p>
      <div className="address">
      </div>
    </div>

  </section>
  </div>
  );
};

export default About;
