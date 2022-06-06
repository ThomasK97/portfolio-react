import React from 'react'

import profileimg from "../media/imageProfile.png";


function HomeSection() {
  return (
  
    
    
    <div className='main'>

  





    <section className="frontpage-section align-items-center">
        <div className="container">
            <div className="row align-items-center">
                <div className="frontpage-text">
                    <p>Hi, My Name is</p>
                    <h1>Thomas Kildahl</h1>
                    <h2>Frontend developer</h2>
                    <a href="#nav-projects" class="btn">Projects</a>
                    <a href="#nav-about" class="btn">About Me</a>
                    

                </div>
                <div className="frontpage-img">
                  <div className="img-box">
                  <img src={profileimg}alt="profile-img"/>
                  </div>
                </div>
             </div>
            
          </div>
          
      </section>
      <br/>
<br/>
<br/>
<br/>
<br/>
<br/>
</div>
   
           


  )
}

export default HomeSection