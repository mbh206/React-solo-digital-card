import React from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'

export default function Footer() {
    return (
<footer className="footer">
        <FontAwesomeIcon icon={faGithub} className="social-icon" href="https://github.com/mbh206/" />
        <FontAwesomeIcon icon={faYoutube} className="social-icon" href="https://www.youtube.com/c/AsthmaticInJapan" />
        <FontAwesomeIcon icon={faTwitter} className="social-icon" href="https://twitter.com/Markbh13" />
      </footer>)}