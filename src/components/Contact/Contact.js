import React from 'react'
import { Element } from 'react-scroll'
import{IconButton} from "@material-ui/core"
import{Facebook,Instagram,LinkedIn } from "@material-ui/icons"
import "./Contact.css";

const Contact = () => {
  return (
    <Element className="contact" id="contact">
    <div className='main'> <h1>Contact</h1>
        <div className='contact-container'>
        
        <p>
            Email:<span>santhanam@gmail.com</span>
        </p>
        <p>
            Github:<span>@santhanam</span>
        </p>
        <div className='contact-icon'>
            <a href='www.google.com'>
                <IconButton><LinkedIn/></IconButton>
            </a>
            <a href='www.google.com'>
                <IconButton><Facebook/></IconButton>
            </a>
            <a href='www.google.com'>
                <IconButton><Instagram/></IconButton>
            </a>
            </div>
        </div>
        </div>
    </Element>
    
  )
}

export default Contact
