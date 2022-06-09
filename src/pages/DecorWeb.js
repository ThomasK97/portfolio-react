import React from 'react'
import decorimg from "../media/Decor-website.png"
import { Link } from 'react-router-dom';

function DecorWeb() {
  return (
    
    <div class="portofolio-specific">
    <div class="pp-inner">
        <div class="pp-content">
            <div class="pp-header">
            <Link to="/" className="btn">
            X
          </Link>
                <div class="pp-thumbnail">
                <img src={decorimg}alt="pp-thumbnail"/>
                </div>
                <h3>Home Decor</h3>
            </div>
            <div class="pp-body">
                <div class=" description">
                    <p> This is my Semester Project 2. This was a home decor website where you could buy 
                        decor for your home. 
                        <br/>
                        
                        
                    </p>
                </div>
                <div class="general-info">
                    <ul>
                        <li>Last Published - <span> 1 Nov 2020</span></li>
                        <li>Framework - <span>Html, Css and Js</span></li>
                        <li>GitHub - <span><a href="https://github.com/ThomasK97/Semester-Project2.git" target="_blank">https://github.com/ThomasK97/Semester-Project2.git
                            Master</a></span></li>
                        <li>View online - <span><a href="https://objective-murdock-0891f6.netlify.app" target="_blank">https://objective-murdock-0891f6.netlify.app</a></span></li> 
                    </ul>
                </div>
            </div>
        </div>

            </div>
        </div>



  )
}

export default DecorWeb;