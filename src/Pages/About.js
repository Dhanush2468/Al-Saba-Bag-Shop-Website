import React from 'react';
import './About.css';
import Navbar from '../Pages/Navbar/Navbar';

const About = () => {
  return (
    <div>
      <Navbar />
      <h1 className='aboutme'>About Us</h1><br />
      <div className="allcontent">

      
      <section id="about-section">
        <div className="about-left">

          <img className='img1' src="https://images.jdmagicbox.com/comp/hyderabad/h6/040pxx40.xx40.140418190038.i6h6/catalogue/al-saba-leather-luggage-new-mallepally-hyderabad-bag-dealers-1xkeosq.jpg?temp=1" alt="About Img" />
          
          <img className='img1'  src="https://media.gettyimages.com/id/1327585786/photo/young-craftsman-fixing-strap-on-womens-purse-on-sewing-machine.jpg?s=2048x2048&w=gi&k=20&c=cf1BBOlvxRZHJmi20i7IKNBIn2AGwJO4SrMTe2nEGqI=" alt="About Img" />
        </div><br /><br />
        <div className="about-right">
          
           
        </div><br />
        <p className='matter'>
              AL-Saba Leather Luggage Bag Shop is a premier destination for high-quality leather luggage bags. With a strong emphasis on craftsmanship and attention to detail, we take pride in offering a wide range of stylish and durable bags for the modern traveler. Our journey began over a decade ago when our founder, Mr. Ahmed Saeed, a passionate leather craftsman, established the shop with a vision to provide customers with exquisite leather bags that blend timeless design with functionality. At AL-Saba, we source only the finest leather materials from reputable suppliers to ensure the utmost quality and longevity of our products. Each bag is meticulously handcrafted by our skilled artisans, who have honed their skills over years of experience. This dedication to craftsmanship is what sets us apart, allowing us to create bags that not only look elegant but also withstand the test of time. We offer a diverse collection of luggage bags, ranging from classic briefcases and travel duffels to sleek backpacks and weekenders. Whether you're a business professional, an avid traveler, or someone who appreciates fine leather goods, we have the perfect bag to suit your style and needs. Customer satisfaction is at the core of our business philosophy. We strive to provide exceptional service and ensure that every customer has a seamless shopping experience. Our knowledgeable team is always ready to assist you in finding the ideal bag and answer any queries you may have. Thank you for choosing AL-Saba Leather Luggage Bag Shop. We look forward to helping you embark on your journeys with style and confidence.
            </p>
          
        
      </section>
    </div>
    </div>
  );
};

export default About;
