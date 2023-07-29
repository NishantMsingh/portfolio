import React from 'react';
import {RiComputerLine} from "react-icons/ri"
import {BsPencilSquare} from "react-icons/bs"
import {BiSupport} from "react-icons/bi"
import "./Work.css"
const Work = () => {
  return (
    <div className='container text-center pt-5  text-black work'>
         <h1 className='spaceX title'>What I'm Doing</h1>
         <span className='spaceX'>I love what I do. I take great pride in what I do.</span>
         <span className='line'></span>

         <div class="row justify-content-center align-items-center pt-4 pb-4">
  <div class=" max-w work-card col-lg-3 col-md-4 col-sm-6 ms-1 me-1 text-light mt-3 d-flex flex-column align-items-center justify-content-center border-0 pt-5 pb-5 rounded" data-aos="fade-in">
     <span className='work-card-icons'> <RiComputerLine fontSize={"3rem"}/></span>
    <h4 class="pt-3 spaceX title">PHP Dev..</h4>
    <p class="pt-3">There are many variations of passages of Lorem Ipsum available, but in some form, Lorem Ipsum is simply dummy text.</p>
  </div>
  <div class=" max-w work-card col-lg-3 col-md-4 col-sm-6 ms-1 me-1 text-light mt-3 d-flex flex-column align-items-center justify-content-center border-0 pt-5 pb-5 rounded" data-aos="fade-in">
  <span className='work-card-icons'> <BsPencilSquare fontSize={"3rem"}/></span>
    <h4 class="pt-3 spaceX title">Web Dev..</h4>
    <p class="pt-3">There are many variations of passages of Lorem Ipsum available, but in some form, Lorem Ipsum is simply dummy text.</p>
  </div>
  <div class=" max-w work-card col-lg-3 col-md-4 col-sm-6  ms-1 me-1 text-light mt-3 d-flex flex-column align-items-center justify-content-center border-0 pt-5 pb-5 rounded" data-aos="fade-in">
  <span className='work-card-icons'> <BiSupport fontSize={"3rem"}/></span>
    <h4 class="pt-3 spaceX title">Support</h4>
    <p class="pt-3">There are many variations of passages of Lorem Ipsum available, but in some form, Lorem Ipsum is simply dummy text.</p>
  </div>
   <div class=" max-w work-card col-lg-3 col-md-4 col-sm-6  ms-1 me-1 text-light mt-3 d-flex flex-column align-items-center justify-content-center border-0 pt-5 pb-5 rounded" data-aos="fade-in">
  <span className='work-card-icons'> <BiSupport fontSize={"3rem"}/></span>
    <h4 class="pt-3 spaceX title">SEO</h4>
    <p class="pt-3">There are many variations of passages of Lorem Ipsum available, but in some form, Lorem Ipsum is simply dummy text.</p>
  </div>
  <div class=" max-w work-card col-lg-3 col-md-4 col-sm-6  ms-1 me-1 text-light mt-3 d-flex flex-column align-items-center justify-content-center border-0 pt-5 pb-5 rounded" data-aos="fade-in">
  <span className='work-card-icons'> <BiSupport fontSize={"3rem"}/></span>
    <h4 class="pt-3 spaceX title">Java</h4>
    <p class="pt-3">There are many variations of passages of Lorem Ipsum available, but in some form, Lorem Ipsum is simply dummy text.</p>
  </div>
   <div class=" max-w work-card col-lg-3 col-md-4 col-sm-6  ms-1 me-1 text-light mt-3 d-flex flex-column align-items-center justify-content-center border-0 pt-5 pb-5 rounded" data-aos="fade-in">
  <span className='work-card-icons'> <BiSupport fontSize={"3rem"}/></span>
    <h4 class="pt-3 spaceX title">Web App</h4>
    <p class="pt-3">There are many variations of passages of Lorem Ipsum available, but in some form, Lorem Ipsum is simply dummy text.</p>
  </div>
</div>

    </div>
  )
}

export default Work
