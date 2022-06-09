import React from 'react'
import projectimg from "../media/Decor-website.png";
import projectimg2 from "../media/jsframeworks.png";
import projectimg3 from "../media/Booking-Website.png";
import { Link } from 'react-router-dom';


function ProjectSection() {
  return (
   
<>

    <h1 id="nav-projects"></h1>
  
    <div className="container">

  
<div className="row">
    <div className="section-title">
    
        <h2>Latest Projects</h2>
    </div>
</div>
<div className="row">
    <div className="portofolio-item">
        <div className="portofolio-thumbnail">
        <img src={projectimg}alt="Semester-project2"/>
        </div>
        <h3 className="portofolio-title">Home Decor </h3>
       
        <Link to="/decorweb" className="btn">
            View More
          </Link>
        <div className="portofolio-item-details">
           
            <div className="general-info">
                <ul>
                    <li>Published - <span>Nov 24, 2021 </span></li>
                    <li>Framework - <span>Html, Css and Js</span></li>
                    <li>View online - <span><a href="#" target="_blank">https://objective-murdock-0891f6.netlify.app</a></span></li>
                </ul>
            </div>
        </div>
    </div>
    <div className="portofolio-item">
        <div className="portofolio-thumbnail">
        <img src={projectimg2}alt="Science-project"/>
        </div>
        <h3 className="portofolio-title">Js Frameworks</h3>
        <Link to="/jsframeworks" className="btn">
            View More
          </Link>
        <div className="portofolio-item-details">
            <div className=" description">
                <p>Lorem ipsum dolor sit amet consectetur 
                    adipisicing elit. Quos facilis animi ipsam 
                    doloribus! Adipisci deleniti optio perspiciatis 
                    vel? Eveniet velit beatae repudiandae. Consectetur, 
                    aliquam! Assumenda ea ullam reiciendis dolorem illum!</p>
            </div>
            <div className="general-info">
                <ul>
                    <li>Published - <span>Not Published</span></li>
                    <li>Framework - <span>Next, sass</span></li>
                    
                </ul>
            </div>
        </div>
    </div>
    <div className="portofolio-item">
        <div className="portofolio-thumbnail">
        <img src={projectimg3}alt="Watchblog-project"/>
        </div>
        <h3 className="portofolio-title">Holidaze Booking Website</h3>
        <Link to="/projectexam" className="btn">
            View More
          </Link>
        <div className="portofolio-item-details">
            <div className=" description">
                <p>Lorem ipsum dolor sit amet consectetur 
                    adipisicing elit. Quos facilis animi ipsam 
                    doloribus! Adipisci deleniti optio perspiciatis 
                    vel? Eveniet velit beatae repudiandae. Consectetur, 
                    aliquam! Assumenda ea ullam reiciendis dolorem illum!</p>
            </div>
            <div className="general-info">
                <ul>
                    <li>Published - <span>May 29, 2022 </span></li>
                    <li>Framework - <span>React, Sass</span></li>
                    <li>View online - <span><a href="#" target="_blank">cool-cupcake-afb22c.netlify.app</a></span></li>
                </ul>
            </div>
        </div>
    </div>
    
</div>
</div>
</>
  )
}

export default ProjectSection