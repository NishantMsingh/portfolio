import React from 'react';
import { BsGithub } from "react-icons/bs";
import { CgCalendarDates } from "react-icons/cg";
import "./Project.css"

const ProjectCard = (props) => {
  const { title, description, cloneLink, repoLink, starLink, languages,dataLink,date } = props.project;

  return (
    <div className="col-lg-5 col-md-5 col-sm-8 card m-2 p-2 custom-card text-white">
      <div className="card-body">
        <h4 className='ddin title'>{title}</h4>
        <p className='mt-1 ddin'>{description}</p>
        <div className="row mt-3">
          <div className="col">
            <a target='blank' className='rounded bg-light title p-2 me-2 ddin' href={cloneLink}>Clone Project <BsGithub/></a>
            <a target='blank'  className='rounded bg-light title p-2 me-2 ddin' href={repoLink}>Git Repo.. <BsGithub/></a>
          </div>
          <hr className='mt-3'></hr>
          <div className="col">
            <span>Languages:-</span>
            {languages.map((lang) => (
              <a target='blank' key={lang.name} className='me-2 ddin' href={lang.link}>{lang.name}</a>
            ))}
          </div>
        </div>
        <div className="col mt-3">
          <a target='blank' className='rounded bg-light title p-2 me-2 ddin' href={starLink}>Star <BsGithub/></a>
          <a target='blank' className='rounded text-light p-2 me-2 ddin' href={dataLink}>{date} <CgCalendarDates/></a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
