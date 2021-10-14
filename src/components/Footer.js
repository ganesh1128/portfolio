import React from 'react'; 
import '../App.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faTwitter, faGithub, faInstagram } from "@fortawesome/free-brands-svg-icons";

function Footer() 
{ 
        return <div className='icons-list'>
        <a
          className="faLinkedin app-link social-media-list"
          href="https://www.linkedin.com/in/gollavilli-ganesh-249309211/"
          target="_blank"
          rel="noopener noreferrer"
        >
         <FontAwesomeIcon icon={faLinkedin} size="2x" />
        </a>
        <a
          className="faGithub app-link social-media-list"
          href="https://github.com/ganesh2328"
          target="_blank"
          rel="noopener noreferrer"
        >
           <FontAwesomeIcon icon={faGithub} size="2x" />
        </a>
        <a
          className="fatwitter app-link social-media-list"
          href="https://www.instagram.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faInstagram} size="2x" />
        </a>
</div>  }

export default Footer;