import React from 'react';
import Contact from './components/Contact/Contact';
import ExperienceContainer from './components/ExperienceContainer/ExperienceContainer';
import Header from "./components/Header/Header";
import Projectcontainer from './components/Projectcontainer/Projectcontainer';
import SkillContainer from './components/SkillContainer/SkillContainer';
import Topcontainer from './components/Top-container/Topcontainer';

function App() {
  return (
    <div>
      <Header/>
      <Topcontainer/>
      <SkillContainer/>
      <Projectcontainer/>
      <ExperienceContainer/>
      <Contact/>
    </div>
  )
}

export default App;