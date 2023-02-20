import React from 'react';
import {BsLinkedin} from 'react-icons/bs';
import {FaGithub} from 'react-icons/fa';
import {BsFacebook} from 'react-icons/bs';

const HeaderSocial = () => {
  return (
    <div className='header__socials'>
<a href="linkedin.com/in/iamravimangal" target='_blank'><BsLinkedin /></a>
<a href="github.com/mangalravi" target='_blank'><FaGithub /></a>
<a href="https://www.naukri.com/mnjuser/profile?id=&altresid" target='_blank'><BsFacebook /></a>
    </div>
  )
}

export default HeaderSocial