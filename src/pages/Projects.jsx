import React from 'react'
import one from '../img/one.jpg'
import two from '../img/two.jpg'
import three from '../img/three.jpg'
import './pages.css'

const Projects = () => {
  return (
    <div className='projects_parent'>
      <div className='project_container'>
        <div className='project_img_container'>
          <img src={one} alt='' className='project_img' />
        </div>
        <div className='project_description'>
          <h2>Project Name</h2>
          <p>Project description ...</p>
        </div>
      </div>

      <div className='project_container'>
        <div className='project_img_container'>
          <img src={two} alt='' className='project_img' />
        </div>
        <div className='project_description'>
          <h2>Project Name</h2>
          <p>Project description ...</p>
        </div>
      </div>

      <div className='project_container'>
        <div className='project_img_container'>
          <img src={three} alt='' className='project_img' />
        </div>
        <div className='project_description'>
          <h2>Project Name</h2>
          <p>Project description ...</p>
        </div>
      </div>
    </div>
  )
}

export default Projects
