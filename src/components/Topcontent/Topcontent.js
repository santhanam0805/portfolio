import React from 'react'
import { Link } from 'react-scroll'
import './Topcontent.css'
function Topcontent() {
  return (
    <div className='Content'>
      <div className='Top-content'>
        <h2>Mr.Santhanam.,BE</h2>
        <p> Professional Web and App Developer</p>
        <a href='www.google.com'> 
            <Link to='project' smooth={true} duration={500}></Link>
            <button className='btn2'>See My CV</button>
            <button className='btn3'>My Work</button>


        </a>
        
      </div>
      
    </div>
  )
}

export default Topcontent
