import React from 'react';
import './ProjectModal.css';

const ProjectModal = ({ project, onClose }) => {
    console.log(onClose)
  return (
    <div className="project-modal-overlay" onClick={() => onClose()}>
      <div className="project-modal"onClick={() => onClose()}>
        <span className="close-button" onClick={() => onClose()}>
          &times;
        </span>
        <div className="project-content">
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <div className="usedskills--flex">
            <h3>Technologies utilisées</h3>
            <ul className="usedskills">
              {project.usedSkills.map((usedSkill, index) => (
                <li key={index}>{usedSkill}</li>
              ))}
            </ul>
          </div>
          {/* Ajoutez d'autres détails de projet ici */}
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
