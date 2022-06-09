import React from 'react'
import { Link } from 'react-router-dom'
import projectimg3 from '../media/Booking-Website.png'
function ProjectExam() {
  return (
    <div class="portofolio-specific">
    <div class="pp-inner">
        <div class="pp-content">
            <div class="pp-header">
            <Link to="/" className="btn">
            X
          </Link>
                <div class="pp-thumbnail">
                <img src={projectimg3}alt="pp-thumbnail"/>
                </div>
                <h3>Holidaze Booking Website</h3>
            </div>
            <div class="pp-body">
                <div class=" description">
                    <p> This is my Project Exam 2. This was a hotel booking website.
                        <br/>
                        
                        
                    </p>
                </div>
                <div class="general-info">
                    <ul>
                        <li>Last Published - <span> 29 May 2022</span></li>
                        <li>Framework - <span>Html, Css and Js</span></li>
                        <li>GitHub - <span><a href="https://github.com/Noroff-FEU-Assignments/project-exam-2-ThomasK97.git" target="_blank">https://github.com/Noroff-FEU-Assignments/project-exam-2-ThomasK97.git</a></span></li>
                        <li>View online - <span><a href="https://cool-cupcake-afb22c.netlify.app" target="_blank">https://cool-cupcake-afb22c.netlify.app</a></span></li> 
                    </ul>
                </div>
            </div>
        </div>

            </div>
        </div>

    
  )
}

export default ProjectExam