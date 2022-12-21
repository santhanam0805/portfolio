import React from 'react';
import './Header.css';
import { Link } from 'react-scroll'
function header() {
  return (
    <div className='header'>
        <div className='header-left'>
            <h1>Develop<span>er</span></h1>
        </div>
        <div className='header-right'>
          <Link to='about' smooth={true} duration={500}>
            <h5>About me</h5>
          </Link>
          <Link to='skill' smooth={true} duration={500}>
            <h5>skill</h5>
          </Link>
          <Link to='project' smooth={true} duration={500}>
            <h5>project</h5>
          </Link>
          <Link to='experience' smooth={true} duration={500}>
            <h5>experience</h5>
          </Link>
          <Link to='contact' smooth={true} duration={500}>
            <h5>contact</h5>
          </Link>
          <button className='Heater-rightbtn'>joinme</button>
         </div>
    </div>
  )
}

export default header
