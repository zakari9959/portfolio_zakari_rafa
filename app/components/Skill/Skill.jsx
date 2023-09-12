import React from 'react';
import '../Skill/Skill.css';
import Image from 'next/image';

const Skill = ({ name, description, symbolUrl }) => {
  return (
    <li className="skill">
      <h3>{name}</h3>
      <Image
        src={symbolUrl}
        alt="symbole de la compétences"
        width={64}
        height={64}
        quality={100}
       />
      <ul className="skill__description">
        {description.map((desc, index) => (
          <li key={index} className="skill__description__desc">
            {desc}
          </li>
        ))}
      </ul>
    </li>
  );
};

export default Skill;
