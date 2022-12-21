import React from 'react'
import Experience from '../ExperienceBox/Experience'
import { Element } from 'react-scroll'
import './ExperienceContainer.css';

const ExperienceContainer = () => {
  return (
    <Element className='experienceContainer' id='experience'>
        <h1>Experience</h1>
        <div className='experiencecontainer-info'>
            <Experience number="+10" title="client"/>
            <Experience number="6+" title="project" style={{backgroundColor:"red"}}r/>
            <Experience number="5+" title="years"/>
            <Experience number="10+" title="trained"/>
        </div>


    </Element>
    
  )
}

export default ExperienceContainer
