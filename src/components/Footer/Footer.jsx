import React from 'react'
import './Footer.css'
const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer__container container">
            <h1 className="footer__title">Vikas Chaudhary</h1>
            <ul className="footer__list">
                <li>
                    <a href="#about" className="footer__link">About</a>
                </li>
                <li>
                    <a href="/" className="footer__link">Portfolio</a>
                </li>
                <li>
                    <a href="#contact" className="footer__link">Contact</a>
                </li>
            </ul>
            <div className="footer__social">
            <a href="https://www.linkedin.com/in/vikas-chaudhary-3142ba186/" className="footer__social-link" target='blank'>
            <i className="uil uil-linkedin-alt"></i>
            
                </a>
                <a href="https://github.com/2211Vikas" className="footer__social-link" target='blank'>
            <i className="uil  uil-github-alt"></i>
            </a>
            <a href="/" className="footer__social-link" target='blank'>
            <i className="uil uil-instagram-alt"></i>
            </a>
            </div>
            <span className="footer__copy">
                &#169; Vikas Chaudhary All Rights Reserved
            </span>
        </div>
    </footer>
  )
}

export default Footer