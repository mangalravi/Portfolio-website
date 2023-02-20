import React from 'react';
import './About.css';
import ME from '../../assest/me-about.jpg';
import { FaAward } from 'react-icons/fa';
import { FaUser } from 'react-icons/fa';
import { AiTwotoneFolderOpen } from 'react-icons/ai';

const about = () => {
  return (
    <section id='about'>
    <h5>Get To Know</h5>
    <h2>About Me</h2> 


    <div className="container about__container" >
      <div className="about__me">
        <div className="about__me-image">
          <img src={ME} alt="About Image" />
        </div>
      </div>
      <div className="about__content">
      <div className="about__cards">
        <article className="about__card">
        <FaAward className='about__icon'/>
          <h5>Experience</h5>
          <small>3+ Years Working</small>
        </article>

        <article className="about__card">
        <FaUser className='about__icon'/>
          <h5>Clients</h5>
          <small>300+ WorldWide</small>
        </article>

        <article className="about__card">
        <AiTwotoneFolderOpen className='about__icon'/>
          <h5>Projects</h5>
          <small>100+ Completed</small>
        </article>
      </div>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
      Itaque, error ea. Culpa fuga optio, sint sit cupiditate pos
      simus repellat, quidem dolores vero laudantium, labore accus
      amus in porro atque dolore autem!</p>
      <a href="#contact" className='btn btn-primary'>Let's Talk</a>
      </div>
    </div>
    </section>
  )
}

export default about