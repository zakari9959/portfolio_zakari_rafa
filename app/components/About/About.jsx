import React from 'react';
import aboutData from '../../data/aboutData.json';
import './About.css';
const About = () => {
  return (
    <section id="about">
      <h2>À Propos</h2>
      <p>
        <strong>Localisation:</strong> {aboutData.location}
      </p>
      <p>
        <strong>Âge:</strong> {aboutData.age}ans
      </p>
      <p>
        <strong>Langues:</strong> {aboutData.langage}
      </p>
      <p>
        <strong>Disponibilité:</strong> {aboutData.availablity}
      </p>
      <p>
        <strong>{aboutData.permis}</strong>
      </p>
      <div>
        <strong>Études:</strong>
        <ul className="formations">
          {aboutData.formations.map((f, index) => (
            <li key={index}>{f}</li>
          ))}
        </ul>
      </div>
      <a href='https://zakarirafa.notion.site/Zakari-RAFA-037a24f3e01046f5bb91c940179f2e11?pvs=4' target="_blank" className='lien__notion'>Ma page Notion avec une desctiption complète et détaillée</a>
    </section>
  );
  
};

export default About;
