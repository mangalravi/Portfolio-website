import React from 'react';
import './footer.css';
import { BsFacebook } from 'react-icons/bs';
import { BsInstagram } from 'react-icons/bs';
import { BsTwitter } from 'react-icons/bs';

const footer = () => {
  return (
    <footer id='footer'>
    <a href="#" className='footer__logo'>Ravi Mangal</a>

    <ul className='permalinks'>
      <li><a href="#">Home</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#experience">Experience</a></li>
      <li><a href="#services">Services</a></li>
      <li><a href="#portfolio">Portfolio</a></li>
      <li><a href="#testimonials">Testimonials</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>

    <div className="footer__socials">
      <a href="https://facebook.com"><BsFacebook /></a>
      <a href="https://instagram.com"><BsInstagram /></a>
      <a href="https://twitter.com"><BsTwitter /></a>
    </div>

    <div className="footer__copyright">
      <small>&copy; All Rights are reserved.</small>
    </div>
    </footer>

  )
}

export default footer