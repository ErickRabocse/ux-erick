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
            <p className='message'>It's great to have you here.</p>
          </div>
        </div>
      </Parallax>
      <Parallax>
        <div className='about' id='about'>
          <div className='about_text'>
            <h1 className='about-header'>Hi there! I'm Erick</h1>
            <p>Currently, I wear two hats: an English teacher and an aspiring frontend developer.  My journey began with teaching, where I fostered communication skills and cultural understanding. Along the way, I’ve completed front-end courses, mastering HTML, CSS, and JavaScript. Now, I’m diving into React, eager to build dynamic web applications that resonate with users. </p>
            <p>My professional path has led me to collaborate with public institutions remotely. Working across geographical boundaries has taught me adaptability and the importance of teamwork. I’ve contributed to projects that impact education and community development.</p>
            <p>Clean layouts, intuitive navigation, and seamless interactions captivate me, I admire the fusion of aesthetics and functionality. Modern interfaces that prioritize user experience and accessibility inspire me to create digital experiences that leave a lasting impression. Whether it’s coding, designing, or problem-solving, I thrive on finding ways to create meaningful impact through technology.</p>
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
