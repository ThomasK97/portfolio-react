import React from "react";
import aboutimg from "../media/about-img.png";
import CV from "/Users/thomaskildahl/Desktop/It2/portfolio-react/src/cv/CvTK2.docx.pdf";
function AboutSection() {
  return (
    <>
    <h1 id="nav-about"></h1>
    <br/>
    <br/>
    <section className="about-section padding">
      

      <div className="container">
        <div className="row">
          <div class="section-title">
            <h2>About Me</h2>
          </div>
        </div>
        <div className="row">
          <div className="about-img">
            <div className="img-box">
              <img src={aboutimg} alt="aboutimg" />
            </div>
          </div>
          <div className="about-text">
            <p>
              Hi, my name is Thomas Kildahl. Im a 24 year old man who studies
              Front-end Development at Noroff, Bergen in Norway. Im a creative
              soul with the eye of details. I have been working with web design
              for over a year now, and made lots of projects throughout my
              study. Im a fast learner, hard working and a creative frontender.
              Please check out my reecent projects. Cant wait to make your next
              website!
            </p>
            <h3>My Expert Fields</h3>
            <div class="hashtags">
              <div class="hashtags-item">Html</div>
              <div class="hashtags-item">Sass</div>
              <div class="hashtags-item">React</div>
              <div class="hashtags-item">Next</div>
            </div>

            <h3>Extra Links</h3>

            <div className="general-info">
              <ul>
                <li>
                  LinkedIn -{" "}
                  <span>
                    <a
                      href="https://www.linkedin.com/in/thomas-kildahl-51ab08213/"
                      target="_blank"
                    >
                      https://www.linkedin.com/in/thomas-kildahl-51ab08213/
                    </a>
                  </span>
                </li>
                <li>
                  GitHub -{" "}
                  <span>
                    <a href="https://github.com/ThomasK97" target="_blank">
                      https://github.com/ThomasK97
                    </a>
                  </span>
                </li>
              </ul>
            </div>

            <h3>Download my Resume</h3>

            <a href={CV} download="" class="btn">
              CV
            </a>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}

export default AboutSection;
