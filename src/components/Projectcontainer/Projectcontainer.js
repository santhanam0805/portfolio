import React from 'react'
import { Element } from 'react-scroll';


const Projectcontainer = () => {
    const project=[ 
        {
        img:":/https://media.geeksforgeeks.org/wp-content/cdn-uploads/20211203233223/Top-7-Image-Processing-Project-Ideas-For-Beginners.jpg",
        title:"Communication management",
        Dec:
            "Every communication involves (at least) one sender, a message and a recipient. This may sound simple, but communication is actually a very complex subject.",
        link:"www.google.com", 
    },
    {   
        img:"/https://media.geeksforgeeks.org/wp-content/cdn-uploads/20211203233223/Top-7-Image-Processing-Project-Ideas-For-Beginners.jpg",
        title:"Communication management",
        Dec:
            "Every communication involves (at least) one sender, a message and a recipient. This may sound simple, but communication is actually a very complex subject.",
        link:"www.google.com", 
    },
    { 
        img:"https://media.geeksforgeeks.org/wp-content/cdn-uploads/20211203233223/Top-7-Image-Processing-Project-Ideas-For-Beginners.jpg",
        title:"Communication management",
        Dec:
            "Every communication involves (at least) one sender, a message and a recipient. This may sound simple, but communication is actually a very complex subject.",
        link:"www.google.com", 
    },
    {
        img:"https://media.geeksforgeeks.org/wp-content/cdn-uploads/20211203233223/Top-7-Image-Processing-Project-Ideas-For-Beginners.jpg",
        title:"Communication management",
        Dec:
            "Every communication involves (at least) one sender, a message and a recipient. This may sound simple, but communication is actually a very complex subject.",
        link:"www.google.com", 
    },
    {
        img:"https://media.geeksforgeeks.org/wp-content/cdn-uploads/20211203233223/Top-7-Image-Processing-Project-Ideas-For-Beginners.jpg",
        title:"Communication management",
        Dec:
            "Every communication involves (at least) one sender, a message and a recipient. This may sound simple, but communication is actually a very complex subject.",
        link:"www.google.com", 
    },
    {
        img:"https://media.geeksforgeeks.org/wp-content/cdn-uploads/20211203233223/Top-7-Image-Processing-Project-Ideas-For-Beginners.jpg",
        title:"Communication management",
        Dec:
            "Every communication involves (at least) one sender, a message and a recipient. This may sound simple, but communication is actually a very complex subject.",
        link:"www.google.com", 
    },
    ]
  return (
    <Element className='projectcontainer' id='project'>
        <h1>Project</h1>
        <p>This is my projects which i done making lives of people easy.</p>
        <div className='projectcontainer-project'>
            {
                project.map((project,index)=>{
                    return(
                        <project 
                        key={index} 
                        img={project.img} 
                        title={project.title} 
                        desc={project.desc} 
                        link={project.link} />);}
                )
            }        
            
            
        </div>
          
    </Element>
 
  )
}

export default Projectcontainer
