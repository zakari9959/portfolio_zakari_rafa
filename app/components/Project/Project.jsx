'use client';
import React, { useState, useEffect } from 'react';
import './Project.css';
import Image from 'next/image';

const Project = ({project}) => {
  const [imagesIndex] = useState(project.pictures);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slideDirection, setSlideDirection] = useState('slide-left');
  const [carouselIntervalTime] = useState(5000);
  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % imagesIndex.length);
    setSlideDirection('slide-left');
  };

  const goToPrevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + imagesIndex.length) % imagesIndex.length
    );
    setSlideDirection('slide-right');
  };


  const currentImageIndex = imagesIndex[currentIndex];

  return (
    <li className="project">
      <div className="carousel">
        <Image
          src={currentImageIndex}
          alt="Capture d'écran du projet dans un carousel"
          className={`carousel__image ${slideDirection}`}
          width={500}
          height={100}
          quality={100}
        />
        {imagesIndex.length > 1 && (
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
              {currentIndex + 1}/{imagesIndex.length}
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
            <a href={project.link} className="liengit">
              Lien vers le répo Github
            </a>
          </div>
        </div>
      </div>
    </li>
  );
};

export default Project;
