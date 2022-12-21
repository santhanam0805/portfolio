import React from 'react'
import { Element } from 'react-scroll'
import skilling from '../image/skill.jpg'
import LinearProgress from "@material-ui/core/LinearProgress";
import './SkillContainer.css'

const SkillContainer = () =>{
  return (
    <Element className='skillContainer' id="skill">
        <div className='skillContainer-image'>
       <img src={skilling} alt=''/>
       </div>
       <div className='skill-text'>
        <h2>
            SkillSet
        </h2>
       <div className='skill-set'>
         <h5>React</h5>
         <div className='skill-slider skill-slider1'>
            <LinearProgress variant='determinate' value={80}/>
         </div>
       
        <h5>javascript</h5>
        <div className='skill-slider skill-slider2'>
            <LinearProgress variant='determinate' value={90}/>
         </div>
        <h5>CSS</h5>
        <div className='skill-slider skill-slider3'>
            <LinearProgress variant='determinate' value={97}/>
         </div>
        <h5>HTML</h5>
        <div className='skill-slider skill-slider4'>
            <LinearProgress variant='determinate' value={70}/>
         </div>
        <h5>Java</h5>
        <div className='skill-slider skill-slider5'>
            <LinearProgress variant='determinate' value={45}/>
         </div>
       </div>
       </div>
    </Element>
    
  )
}

export default SkillContainer
