import React from 'react';
import Portfolio from './components/Portfolio/Portfolio';
import SkillsList from './components/SkillsList/SkillsList';
import About from './components/About/About';
import Contact from './components/Contact/Contact';

export default function Home() {
  return (
    <main>
      <Portfolio />
      <SkillsList />
      <div className="about--flex">
        <About />
        <Contact />
      </div>
    </main>
  );
}
