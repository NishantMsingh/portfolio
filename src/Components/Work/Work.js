import React from 'react';
import {RiComputerLine} from "react-icons/ri"

import "./Work.css"
const Work = () => {
  return (
    <div id='work' className='container text-center pt-5  text-black work'>
         <h1 className='spaceX title'>What I'm Doing</h1> 
         <span className='spaceX'>I love what I do. I take great pride in what I do.</span>
         <span className='line'></span>

         <div class="row justify-content-center align-items-center pt-4 pb-4">
  <div class=" max-w work-card col-lg-3 col-md-4 col-sm-6 ms-1 me-1 text-light mt-3 d-flex flex-column align-items-center justify-content-center border-0 pt-5 pb-5 rounded" data-aos="fade-in">
     <span className='work-card-icons'> <RiComputerLine fontSize={"3rem"}/></span>
    <h4 class="pt-3 spaceX title">App Dev..</h4>
    <p class="pt-3 ddin">
      We are enthuistic developers, we develop applicaion/website and software in varius languages like React,React Native, Java, PHP.
      So if you are looking for developer you can contact us via a mail.</p>
  </div>
  <div class=" max-w work-card col-lg-3 col-md-4 col-sm-6 ms-1 me-1 text-light mt-3 d-flex flex-column align-items-center justify-content-center border-0 pt-5 pb-5 rounded" data-aos="fade-in">
  <span className='work-card-icons'> <RiComputerLine fontSize={"3rem"}/></span>
    <h4 class="pt-3 spaceX title">Web Dev..</h4>
    <p class="pt-3 ddin">  We are enthuistic developers, we develop applicaion/website and software in varius languages like React,React Native, Java, PHP.
      So if you are looking for developer you can contact us via a mail.</p>
  </div>
 
  <div class=" max-w work-card col-lg-3 col-md-4 col-sm-6  ms-1 me-1 text-light mt-3 d-flex flex-column align-items-center justify-content-center border-0 pt-5 pb-5 rounded" data-aos="fade-in">
  <span className='work-card-icons'> <RiComputerLine fontSize={"3rem"}/></span>
    <h4 class="pt-3 spaceX title">Java</h4>
    <p class="pt-3 ddin">  We are enthuistic developers, we develop applicaion/website and software in varius languages like React,React Native, Java, PHP.
      So if you are looking for developer you can contact us via a mail.</p>
  </div>
  
</div>

    </div>
  )
}

export default Work
