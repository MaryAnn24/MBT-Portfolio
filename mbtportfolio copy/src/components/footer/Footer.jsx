import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <footer className='footer'>
        <div className="footer__container container">
            <h1 className="footer__title">MBTapiru</h1>

            <ul className="footer__list">
                <li>
                    <a href="#about" className="footer__link">About</a>
                </li>

                <li>
                    <a href="#portfolio" className="footer__link">Project</a>
                </li>

                <li>
                    <a href="#skills" className="footer__link">Skills</a>
                </li>
            </ul>

            <div className="footer__social">
                <a href="https://www.facebook.com/BaricanteSexy/" className="footer__social-link" target="__blank">
                <i className="bx bxl-facebook"></i>
                </a>
                <a href="https://instagram.com/baricantemaryann" className="footer__social-link" target="__blank">
                <i className="bx bxl-instagram"></i>
                </a>
                <a href="linkedin.com/in/me-ann-tapiru" className="footer__social-link" target="__blank">
                <i className="bx bxl-linkedin"></i>
                </a>
            </div>
            <span className="footer__copy">
                &#169; MBTapiru. All rights reserved
            </span>
        </div>
    </footer>
  );
};

export default Footer