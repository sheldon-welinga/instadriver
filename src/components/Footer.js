import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div>
          <img src="/images/logo.svg" alt="logo" />
          <div className="footer-brand">
            <p>
              Insta<span>driver</span>
            </p>
            <p>&copy;2019.&nbsp;All rights reserved.</p>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div>
          <h3>Useful links</h3>
          <p>About InstaDriver</p>
          <p>Verified Search (For Employees &amp; Drivers)</p>
          <p>Top Ad Feature (For Drivers)</p>
        </div>
        <div>
          <h3>Useful links</h3>
          <p>Driver Sign In</p>
          <p>Driver Sign Up</p>
        </div>
        <div>
          <h3>Useful links</h3>
          <p>FAQS</p>
          <p>Contact Us</p>
          <p>Terms &amp; Conditions</p>
        </div>
        <div>
          <h3>Social Media</h3>
          <p className="social-icons">
            <span className="fa fa-facebook"></span>
            <span className="fa fa-twitter"></span>
            <span className="fa fa-youtube-play"></span>
            <span className="fa fa-instagram"></span>
          </p>
        </div>
        <div>
          <h3>Contact Info</h3>
          <p>saysomething@instadriver.co</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
