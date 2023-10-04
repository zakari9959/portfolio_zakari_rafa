'use client';
import React, { useState } from 'react';
import './Project.css';
import Image from 'next/image';
import ProjectModal from '../ProjectModal/ProjectModal';

const Project = ({project}) => {

  const [images] = useState(project.pictures);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedProject, setSelectedProject] = useState(null);


const goToNextSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex + 1 + images.length) % images.length
    );
  };
  const goToPrevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };
  const openModal = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };
  const currentImage = images[currentIndex];
 console.log(selectedProject)
  return (
    <li className={`project ${selectedProject ? 'modal-open' : ''}`} /* onClick={() => openModal(project)} */>
       {/* {selectedProject !== null && (
      <ProjectModal project={selectedProject} onClose={closeModal} />
    )} */}
      <div className="carousel">
        <Image
          src={currentImage}
          alt="Capture d'écran du projet dans un carousel"
          className={`carousel__image `}
          width={500}
          height={280}
          quality={100}
          priority={true}
          />
        {images.length > 1 && (
          <div>
            <Image
              src={'/docs/assets/fleche--droite.svg'} //Gauche
              alt="Cliquer sur le bouton précédent"
              className="carousel__button carousel__button--left"
              onClick={() => {
                goToPrevSlide();
              }}
              width={100}
              height={100}
            />
            <p className="carousel__count">
              {currentIndex + 1}/{images.length}
            </p>
            <Image
              src={'/docs/assets/fleche--droite.svg'}
              alt="Cliquer sur le bouton suivant"
              className="carousel__button carousel__button--right"
              onClick={() => {
                goToNextSlide();
              }}
              width={100}
              height={100}
            />
          </div>
        )}
      </div>
      <div className="project__text">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className="project__text--flex">
          <div className="usedskills--flex">
            <h3>Technologies utilisées</h3>
            <ul className="usedskills">
              {project.usedSkills.map((usedSkill, index) => (
                <li key={index}>{usedSkill}</li>
              ))}
            </ul>
          </div>
          <div className="liengit--flex">
            <a href={project.link} target="_blank" className="liengit">
              Lien vers le répo Github
            </a>
            {project.demo &&
            <a href={project.demo} target="_blank" className="liengit">
              Lien vers le site live
            </a>}
          </div>
        </div>
      </div>
     
    </li>
  );
};

export default Project;
