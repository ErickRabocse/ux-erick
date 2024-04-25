import React from 'react'
import { Parallax } from 'react-parallax'
import me from '../img/me_comp.png'
import Projects from './Projects'
import './parallexComp.css'
import Contact from './Contact'

const ParallexComp = () => {
  return (
    <div>
      {/* Parallax tutorial: https://www.youtube.com/watch?v=XUmq3B7Iugw */}
      <Parallax strength={-600} className='hero'>
        <div className='content' id='hero'>
          <div className='content_text'>
            <p className='welcome'>WELCOME</p>
            <p className='message'>Thanks for your visit</p>
          </div>
        </div>
      </Parallax>
      <Parallax>
        <div className='about' id='about'>
          <div className='about_text'>
            <h1 className='about-header'>Hi there! I'm Erick</h1>
            <p>I am interested in timeless designs that capture the essence of emotions, bring joy to those who see it and inevitably create an experience.</p>
            <p>I am currently taking a UX Design course at Google and I am countinously learning about front end technologies since I enjoy bringing to life anything that I can picture in my mind.</p>
            <p>The technologies I am familiar with are: HTML, CSS, JS, Typescript, Bootstrap, GitHub, React, Figma & Adobe Illustrator.</p>
          </div>
          <div className='about_img'>
            <img src={me} alt='profile photo of Erick' className='me' />
          </div>
        </div>
      </Parallax>
      <Parallax>
        <Projects />
      </Parallax>
      <Parallax>
        <Contact />
      </Parallax>
    </div>
  )
}

export default ParallexComp
