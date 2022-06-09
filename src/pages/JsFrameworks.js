import React from 'react'
import projectimg2 from '../media/jsframeworks.png';
import { Link } from 'react-router-dom';

function JsFrameworks() {
  return (
    <div class="portofolio-specific">
    <div class="pp-inner">
        <div class="pp-content">
            <div class="pp-header">
            <Link to="/" className="btn">
            X
          </Link>
                <div class="pp-thumbnail">
                <img src={projectimg2}alt="pp-thumbnail"/>
                </div>
                <h3>Js-Framework Course Assignment</h3>
            </div>
            <div class="pp-body">
                <div class=" description">
                    <p> This is my Js-Frameworks Course Assignment submission. 
                        <br/>
                        
                        
                    </p>
                </div>
                <div class="general-info">
                    <ul>
                        <li>Last Published Git - <span> 9 June 2022</span></li>
                        <li>Framework - <span>Next, sass</span></li>
                        <li>GitHub - <span><a href="https://github.com/Noroff-FEU-Assignments/js-frameworks-course-assignment-ThomasK97.git" target="_blank">https://github.com/Noroff-FEU-Assignments/js-frameworks-course-assignment-ThomasK97.git</a></span></li>
                        
                    </ul>
                </div>
            </div>
        </div>

            </div>
        </div>

    
  )
}

export default JsFrameworks