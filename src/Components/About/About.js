import React from "react";
import imag from "../Assets/Images/apporoach_man_img.0f15c002.png";
import classes from "./About.module.css"
const About = () => {
  return (
    <div id="About" className="container-fluid bg-light about">
      <div className="container">
        <div class="row justify-content-center align-items-center g-2">
          <div className="col-lg-6 col-md-12 col-sm-12  pt-5">
            <h1 className="spaceX title">About</h1>
            <h6 className="spaceX mt-2">
              Visual Designer & Front-End Developer
            </h6>
            <p className="mt-2">
              I am Jhone Deo Lorem Ipsum is simply dummy text of the printing
              and typesetting industry. Lorem Ipsum has been the industry's
              standard dummy text ever It has survived not only five centuries,
              but also the leap into electronic but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing
            </p>
            <button className={classes.hire}>  <span><a href='mailto:nishantkumarsingh16019@gmail.com'>HireMe</a></span></button>
            <button className={classes.cv}> DownLaod my CV</button>
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12 ps-5 pe-5 pt-5">
            <img src={imag} className="img-fluid" alt="avatar"/>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
