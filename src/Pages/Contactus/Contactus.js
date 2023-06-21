import React from 'react'
import './Contactus.css'
import Navbar from '../Navbar/Navbar'
const Contactus = () => {
  return (
    <div>
        <Navbar /><br />
        <h1 className='Contact-Us'>Contact Us</h1><br /><hr />
    <div className="contact_us_6">
    <div className="responsive-container-block container">
      <form className="form-box">
        <div className="container-block form-wrapper">
          <div className="mob-text">
            <p className="text-blk contactus-head">
              Get in Touch
            </p>
            <p className="text-blk contactus-subhead">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Felis diam lectus sapien.
            </p>
          </div>
          <div className="responsive-container-block" id="i2cbk">
            <div className="responsive-cell-block wk-tab-12 wk-mobile-12 wk-desk-12 wk-ipadp-12" id="i10mt-3">
              <p className="text-blk input-title">
                FIRST NAME
              </p>
              <input className="input" id="ijowk-3" name="FirstName" placeholder="Please enter first name..." />
            </div>
            <div className="responsive-cell-block wk-tab-12 wk-mobile-12 wk-desk-12 wk-ipadp-12" id="ip1yp">
              <p className="text-blk input-title">
                EMAIL
              </p>
              <input className="input" id="ipmgh-3" name="Email" placeholder="Please enter email..." />
            </div>
            <div className="responsive-cell-block wk-tab-12 wk-mobile-12 wk-desk-12 wk-ipadp-12" id="ih9wi">
              <p className="text-blk input-title">
                PHONE NUMBER
              </p>
              <input className="input" id="imgis-3" name="PhoneNumber" placeholder="Please enter phone number..." />
            </div>
            <div className="responsive-cell-block wk-tab-12 wk-mobile-12 wk-desk-12 wk-ipadp-12" id="i634i-3">
              <p className="text-blk input-title">
                WHAT DO YOU HAVE IN MIND ?
              </p>
              <textarea className="textinput" id="i5vyy-3" placeholder="Please enter query..."></textarea>
            </div>
          </div>
          <button className="submit-btn" id="w-c-s-bgc_p-1-dm-id-2">
            Submit
          </button>
        </div>
      </form>
      <div className="responsive-cell-block wk-desk-7 wk-ipadp-12 wk-tab-12 wk-mobile-12" id="i772w">
        <div className="map-part">
          <p className="text-blk map-contactus-head" id="w-c-s-fc_p-1-dm-id">
            Reach us at
          </p>
          <p className="text-blk map-contactus-subhead forcolor">
          11-3-89/1/b,Opp,Anwar-Ul-Uloom Degree College Girls Gate,, New Mallepally,, Hyderabad, Telangana 500001
          </p>

          <div className="map-box container-block">
  {/* Add your map component or content here */}
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15229.086589414857!2d78.44477762867876!3d17.39874645914751!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb976d8a07591d%3A0xa7ba8db595c9e07a!2sAl%20saba%20leather%20luggage!5e0!3m2!1sen!2sin!4v1687356341611!5m2!1sen!2sin"
    width="600"
    height="450"
    style={{ border: 0 }}
    allowFullScreen=""
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  ></iframe>
</div>
        </div>
      </div>
    </div>
  </div>
  </div>
  )
}

export default Contactus