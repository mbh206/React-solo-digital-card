import './App.css';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'

export default function Header() {
    return (
        <header className="header">
          <div className="main-content-info">
            <h1 className="main-content-name">Mark Harris</h1>
            <div className="main-content-desc">
              <h4 className="main-content-title">Frontend Developer</h4>
              <a  href="https://www.markbenjaminharris.com">
              <h5 className="main-content-site">www.markbenjaminharris.com</h5></a>
            </div>
          </div>
          <div className="btn-container">
            <a href="mailto:mark@renovejapan.com">
            <div href="#" className="btn-email btn">
              <FontAwesomeIcon icon={faEnvelope} className="icons" />
              <h2 className="btn-email-text">Email</h2>
            </div></a>
            <a href="https://www.linkedin.com/in/mark-harris/">
            <div href="#" className="btn-linkedin btn">
              <FontAwesomeIcon icon={faLinkedin} className="icons" />
              <h2 className="btn-linkedin-text">LinkedIn</h2>
            </div>
            </a>
          </div>
        </header>
    )
}