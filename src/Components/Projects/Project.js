import React from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { AiOutlineLink } from "react-icons/ai";
import portfolio from "../Assets/Images/porfolio.png";
import school from "../Assets/Images/school.png";
import expense from "../Assets/Images/expense.png";
import rims from "../Assets/Images/rims.png";
import barber from "../Assets/Images/barber.png";

import picka from "../Assets/Images/picka.png";
import snap from "../Assets/Images/snapdeal.png";
import "./Project.css";
const Project = () => {
  return (
    <div className="container-fluid project">
      <div className="container text-center pt-5  text-black project">
        <h1 className="spaceX title">My Projects</h1>
        <span className="spaceX">
          I love what I do. I take great pride in what I do.
        </span>
        <span className="line"></span>
       

        <div className="row justify-content-center align-items-center pt-4 pb-4">
          <div className="col-lg-3 col-md-4 col-sm-6 project-card m-1">
            <img src={portfolio} alt="portfolio" className="img-portfolio" />
            <p className="p-2 text-justify">
              You are correct; my apologies for the oversight. The width and
              height of the card are not
            </p>
            <div class="project-card-overlays">
              <span className="title spaceX">React App</span>
              <div className="project-links-overlays">
                <button className="project-btn-icons">
                  <a href="#links">
                    <AiOutlineHeart />
                  </a>
                </button>
                <button className="project-btn-icons">
                  <a href="#links">
                    <AiOutlineLink />
                  </a>
                </button>
              </div>
            </div>
          </div>  <div className="col-lg-3 col-md-4 col-sm-6 project-card mar">
            <img src={picka} alt="portfolio" className="img-portfolio" />
            <p className="p-2 text-justify">
              You are correct; my apologies for the oversight. The width and
              height of the card are not
            </p>
            <div class="project-card-overlays">
              <span className="title spaceX">React App</span>
              <div className="project-links-overlays">
                <button className="project-btn-icons">
                  <a href="#links">
                    <AiOutlineHeart />
                  </a>
                </button>
                <button className="project-btn-icons">
                  <a href="#links">
                    <AiOutlineLink />
                  </a>
                </button>
              </div>
            </div>
          </div> 
           <div className="col-lg-3 col-md-4 col-sm-6 project-card mar">
            <img src={expense} alt="portfolio" className="img-portfolio" />
            <p className="p-2 text-justify">
              You are correct; my apologies for the oversight. The width and
              height of the card are not
            </p>
            <div class="project-card-overlays">
              <span className="title spaceX">React App</span>
              <div className="project-links-overlays">
                <button className="project-btn-icons">
                  <a href="#links">
                    <AiOutlineHeart />
                  </a>
                </button>
                <button className="project-btn-icons">
                  <a href="#links">
                    <AiOutlineLink />
                  </a>
                </button>
              </div>
            </div>
          </div>  <div className="col-lg-3 col-md-4 col-sm-6 project-card mar">
            <img src={snap} alt="portfolio" className="img-portfolio" />
            <p className="p-2 text-justify">
              You are correct my apologies for the oversight. The width and
              height of the card are not
            </p>
            <div class="project-card-overlays">
              <span className="title spaceX">React App</span>
              <div className="project-links-overlays">
                <button className="project-btn-icons">
                  <a href="#links">
                    <AiOutlineHeart />
                  </a>
                </button>
                <button className="project-btn-icons">
                  <a href="#links">
                    <AiOutlineLink />
                  </a>
                </button>
              </div>
            </div>
          </div>  <div className="col-lg-3 col-md-4 col-sm-6 project-card mar">
            <img src={rims} alt="portfolio" className="img-portfolio" />
            <p className="p-2 text-justify">
              You are correct; my apologies for the oversight. The width and
              height of the card are not
            </p>
            <div class="project-card-overlays">
              <span className="title spaceX">Web Design</span>
              <div className="project-links-overlays">
                <button className="project-btn-icons">
                  <a href="#links">
                    <AiOutlineHeart />
                  </a>
                </button>
                <button className="project-btn-icons">
                  <a href="#links">
                    <AiOutlineLink />
                  </a>
                </button>
              </div>
            </div>
          </div>  <div className="col-lg-3 col-md-4 col-sm-6 project-card mar">
            <img src={school} alt="portfolio" className="img-portfolio" />
            <p className="p-2 text-justify">
              You are correct; my apologies for the oversight. The width and
              height of the card are not
            </p>
            <div class="project-card-overlays">
              <span className="title spaceX">Web Design</span>
              <div className="project-links-overlays">
                <button className="project-btn-icons">
                  <a href="#links">
                    <AiOutlineHeart />
                  </a>
                </button>
                <button className="project-btn-icons">
                  <a href="#links">
                    <AiOutlineLink />
                  </a>
                </button>
              </div>
            </div>
          </div>  <div className="col-lg-3 col-md-4 col-sm-6 project-card mar">
            <img src={barber} alt="portfolio" className="img-portfolio" />
            <p className="p-2 text-justify">
              You are correct; my apologies for the oversight. The width and
              height of the card are not
            </p>
            <div class="project-card-overlays">
              <span className="title spaceX">Wix Design</span>
              <div className="project-links-overlays">
                <button className="project-btn-icons">
                  <a href="#links">
                    <AiOutlineHeart />
                  </a>
                </button>
                <button className="project-btn-icons">
                  <a href="#links">
                    <AiOutlineLink />
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
