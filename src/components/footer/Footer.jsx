import React from 'react'
import './footer.css'
import {FiLinkedin} from 'react-icons/fi'
import {VscGithub} from 'react-icons/vsc'
import {SiFacebook} from 'react-icons/si'
import {RiInstagramFill} from 'react-icons/ri'
import {FaTwitter} from 'react-icons/fa'

const Footer = () => {
  return (
    <footer id='footer'>
      <a href="#" className="footer__logo">MISTER_M</a>

      <ul className="premalinks">
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#experience'>Experience</a></li>
        <li><a href='#skills'>Skills</a></li>
        <li><a href='#projects'>Projects</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://facebook.com/mistermeet" target="_blank" rel='noreferrer'><SiFacebook/></a>
        <a href="https://instagram.com/mister_meet/" target="_blank" rel='noreferrer'><RiInstagramFill/></a>
        <a href="https://twitter.com/mister_meet" target="_blank" rel='noreferrer'><FaTwitter/></a>
        <a href="https://www.linkedin.com/in/meet-upadhyay-7258a21a5" target="_blank" rel='noreferrer'><FiLinkedin/></a>
        <a href="https://github.com/noobcoder-7" target="_blank" rel='noreferrer'><VscGithub/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Mister_M Tutorials. All rights reserved. </small>
      </div>
    </footer>
  )
}

export default Footer