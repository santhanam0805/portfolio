import React from 'react';
import "./Project.css";

const Project = ({img,title,desc,link}) => {
    const [Show, setShow] = useState(false);
  return (
    <a href={link}>

        <div 
             className="project" const setShow 
             onMouseEnter={()=>setShow(true)} 
             onMouseLeave={()=>setShow(false)}
             >
          { Show ? (
                 <div>
                    
                    <h4> {title}</h4>
                    <p>{desc}</p>
                 </div>
            ) : (
                <img src={img} alt=''/>
            )
          }  
           
        </div>
    </a>
    
  );
};

export default Project
