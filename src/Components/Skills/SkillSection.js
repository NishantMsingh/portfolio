import React, { useState } from 'react';
import Skills from './Skills';
import './Skills.css'
const SkillSection = () => {

    const [tech,setTect]=useState(false);
    const SkillsHandler=(value)=>{
       if(value==="Tech")
       {
        setTect(true);
       }
       else
       {
        setTect(false);
       }
    }
  return (
    <div className='container-fluid pt-5 pb-5 bg-dark'>
      <div className='d-flex align-items-center justify-content-center mb-3 mt-2 flex-column'>
        <h1 className='spaceX title'>Skills</h1>
        <span className='line mb-4 bg-light'></span>
      </div>

       <div className='container'>
        <div className='d-flex align-items-center justify-content-evenly flex-row mb-3'> 
          <h2 className={tech?'active light ddin pointer':'light ddin pointer mb-4'} onClick={()=>{SkillsHandler("Tech")}}>Technical Skills</h2>
          <h2 className={tech?' light ddin pointer':'active light ddin pointer mb-4'} onClick={()=>{SkillsHandler("NonTech")}}>Soft Skills</h2>
        
        </div>
       <div className="row justify-content-center">
       
       {tech && <div className="col-lg-8 col-sm-8 col-md-8 bg-secondary d-flex justify-content-center flex-column">
         <Skills skillName="HTML" percentage={75} />
         <Skills skillName="CSS" percentage={85} />
         <Skills skillName="JavaScript" percentage={30} />
         <Skills skillName="React JS" percentage={50} />
         <Skills skillName="BootStrap" percentage={60} />
         <Skills skillName="Saas" percentage={20} />
         <Skills skillName="C++" percentage={50} />
         <Skills skillName="Java" percentage={55} />
         <Skills skillName="SQL" percentage={45} />
         <Skills skillName="PhotoShop" percentage={35} />
         <Skills skillName="Responsive" percentage={95} />
       </div>}
      {!tech && <div className="col-lg-8 col-sm-8 col-md-8 bg-secondary d-flex justify-content-center flex-column">
         <Skills skillName="Problem Solving

" percentage={75} />
         <Skills skillName="Goal-Oriented

" percentage={75} />
         <Skills skillName="Empathy" percentage={85} />
         <Skills skillName="Positivity" percentage={60} />
         <Skills skillName="Adaptability" percentage={90} />
         <Skills skillName="Collaboration" percentage={95} />
       </div>}
     </div>
       </div>
    </div>
  );
};

export default SkillSection;
