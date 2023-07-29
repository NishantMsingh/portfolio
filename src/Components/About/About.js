import React from "react";
import imag from "../Assets/Images/3426526.jpg";
import classes from "./Abou.css";
const About = () => {
  return (
    <div id="About" className="container-fluid about">
      <div className="container">
        <div class="row justify-content-center align-items-center g-2">
          <div className="col-lg-6 col-md-12 col-sm-12  pt-5 " data-aos="slide-down" >
            <h1 className="spaceX title">About <span className="text-dark">me</span></h1>
            <h6 className="spaceX mt-2">
              Web Designer & Front-End Developer
            </h6>
            <p className="mt-2 ddin title">Frontend Developer | Delhi, India</p>
            <p className="ddin title">
              Passionate about Crafting Engaging User Experiences
            </p>
            <p className="ddin">
              Highly skilled and motivated Frontend Developer based in Delhi
              with a focus on creating exceptional web applications and user
              interfaces. Proficient in leveraging the power of modern frontend
              technologies, including React and other cutting-edge tools, to
              deliver seamless and visually stunning user experiences.
            </p>
            <button className="hire">
              {" "}
              <span>
                <a href="mailto:nishantkumarsingh16019@gmail.com">HireMe</a>
              </span>
            </button>
            <button className="cv"> DownLaod my CV</button>
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12 ps-5 pe-5 pt-5 rounded " data-aos="slide-up">
            <img src={imag} className="img-fluid" alt="avatar" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;