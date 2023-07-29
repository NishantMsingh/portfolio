import React from "react";

import "./Project.css";
import ProjectCard from "./ProjectCard";
const Project = () => {
  const projects = [
    { 
      date:"20th july to 25th july",
      title: "Mail Client Web Application",
      description: "Create mail client box using React Js and Firebase for backend where people can do sign up and login to the portal and send the mail and received from their colleagues.",
      cloneLink: "https://github.com/NishantMsingh/mailclientbox/archive/refs/heads/main.zip",
      repoLink: "https://github.com/NishantMsingh/mailclientbox",
      starLink: "https://github.com/NishantMsingh/mailclientbox",
      languages: [
        { name: "JavaScript", percentage: 69.5 },
        { name: "CSS", percentage: 26.7 },
        { name: "HTML", percentage: 3.8 }
      ]
    },
    { 
      date:"1st july to 14th july",
      title: "Ecommerce Web Application",
      description: "Here I tried to give all the features which we get in ecommerce portals like, Add to cart, checkout, see products.",
      cloneLink: "https://github.com/NishantMsingh/ecomerce/archive/refs/heads/main.zip",
      repoLink: "https://github.com/NishantMsingh/ecomerce",
      starLink: "https://github.com/NishantMsingh/ecomerce",
      languages: [
        { name: "JavaScript", percentage: 69.5 },
        { name: "CSS", percentage: 25.8 },
        { name: "HTML", percentage: 4.7 }
      ]
    },
    {
      date:"15th july to 20th july",
      title: "Expense Tracker Web Application",
      description: "Create Expense Tracker web application using React Js library and React Bootstrap and integrated Firebase for the backend database.",
      cloneLink: "https://github.com/NishantMsingh/expense/archive/refs/heads/main.zip",
      repoLink: "https://github.com/NishantMsingh/expense",
      starLink: "https://github.com/NishantMsingh/expense",
      languages: [
        { name: "JavaScript", percentage: 69.5 },
        { name: "CSS", percentage: 25.8 },
        { name: "HTML", percentage: 4.7 }
      ]
    },
    {
      date:"25th july to 30th july",
      title: "Portfolio Application",
      description: "The personal website/portfolio template by Nishant Kumar. Built using React and Bootstrap.",
      cloneLink: "https://github.com/NishantMsingh/portfolio/archive/refs/heads/main.zip",
      repoLink: "https://github.com/NishantMsingh/portfolio",
      starLink: "https://github.com/NishantMsingh/portfolio",
      languages: [
        { name: "JavaScript", percentage: 53.2 },
        { name: "CSS", percentage: 36.8 },
        { name: "HTML", percentage: 10.0 }
      ]
    }
  ];
  
  return (
    <div className="container-fluid project">
      <div className="container d-flex justify-content-center flex-column align-items-center">
      <h1 className='spaceX title'>Projects</h1> 
         <span className='spaceX light'>I love what I do. I take great pride in what I do.</span>
         <span className='line mb-4 '></span>
      </div>

     <div class=" container row justify-content-center align-items-center g-2">

     {projects.map((proj) => (
          <ProjectCard key={proj.title} project={proj} />
        ))}

     </div>
    </div>
  );
};

export default Project;
