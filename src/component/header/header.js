import React from 'react';
import './header.css';
import CTA from "./CTA";
import ME from '../../assest/me.png';
import HeaderSocial from './HeaderSocial';

const header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Ravi Mangal</h1>
        <h5 className="text-light">Fullstack Developer</h5>
           <CTA />
   
              <HeaderSocial />

           <div className="me">
    <img src={ME} alt="ME" />
</div>
<a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default header