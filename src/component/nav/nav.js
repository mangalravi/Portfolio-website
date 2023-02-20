import React from 'react';
import './nav.css';
import {AiOutlineHome} from 'react-icons/ai';
import {AiOutlineUsergroupAdd } from 'react-icons/ai';
import {BsBookHalf} from 'react-icons/bs';
import {RiServiceLine } from 'react-icons/ri';
import {RiContactsFill } from 'react-icons/ri';

const nav = () => {
  return (
   <nav>
    <a href="#" className='active'><AiOutlineHome /></a>
    <a href="#about"><AiOutlineUsergroupAdd /></a>
    <a href="#experience"><BsBookHalf /></a>
    <a href="#services"><RiServiceLine /></a>
    <a href="#contact"><RiContactsFill /></a>
   </nav>
  )
}

export default nav