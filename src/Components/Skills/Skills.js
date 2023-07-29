import React from 'react';
import './Skills.css'
const Skills = ({ skillName, percentage }) => {
  return (
    <div className="skill-section">
      <div className="skill-name ddin light text-start">{skillName}</div>
      <div className="progress-bar">
        <div className="progress ddin" style={{ width: `${percentage}%` }}>
          {percentage}%
        </div>
      </div>
    </div>
  );
};

export default Skills;
