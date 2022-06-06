import React from 'react'
import { FaFacebookF, FaInstagram, FaLinkedin } from "react-icons/fa"

function Footer() {
  return (
      <>
      
    <footer className="footer">
    <div className="footer-container">
        <div className="row">
            <div className="footer-col">
                <h4>Links</h4>
                <ul>
                    <li><a href="https://github.com/ThomasK97">GitHub</a></li>
                    <li><a href="https://www.linkedin.com/in/thomas-kildahl-51ab08213/">Linkedln</a></li>
                    
                </ul>
            </div>
            <div className="footer-col">
                <h4>Contact</h4>
                <ul>
                    <li><a href="#">Contact</a></li>
                    <li><a href="#"></a></li>
                </ul>
            </div>
            <div className="footer-col">
                <h4>Future Projects</h4>
                <ul>
                    <li><a href="#">Company</a></li>
                    <li><a href="#"></a></li>
                </ul>
            </div>
            <div className="footer-col">
                <h4>Follow Me</h4>
                <div class= "social-links">
                    <a href="https://www.facebook.com/thomas.kildahl"><FaFacebookF/></a>
                    <a href="https://www.instagram.com/thomas_kildahl97/"><FaInstagram/></a>
                    <a href="https://www.linkedin.com/in/thomas-kildahl-51ab08213/"><FaLinkedin/></a>
                    
                </div>
            </div>
        </div>
    </div>
</footer>
</>
  )
}

export default Footer