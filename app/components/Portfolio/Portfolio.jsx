import React from 'react';
import Project from '../Project/Project';
import projectsData from '../../data/projectsData.json';
import './Portfolio.css';

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h2>Projets réalisés</h2>
      <ul className="projectlist">
        {projectsData.map((project, index) => (
          <Project
            key={index}
            project={project}
          />
        ))}
      </ul>
    </section>
  );
};

export default Portfolio;
