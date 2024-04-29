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
            <p>I am an aspiring <strong>front-end developer</strong> and <strong>UX designer</strong>.  My journey began with teaching, where I fostered communication skills, cultural understanding, adaptability, and the importance of teamwork contributing to projects that made an impact in education and community development.
            </p>
            <p>
              Along the way, I’ve completed front-end courses, learning <strong>HTML</strong> , <strong>CSS</strong> , and <strong>JavaScript</strong> . Now, I’m diving into <strong>React</strong> and <strong>UX design</strong>, eager to build dynamic web applications that resonate with users.
            </p>
            <p>Modern interfaces that fuse aesthetics and functionality prioritizing <strong>user accessibility</strong>  inspire me to create digital experiences that leave a lasting impression. Whether it’s <strong>coding</strong> , <strong>designing</strong> , or <strong>problem-solving</strong> , I thrive on finding ways to create a meaningful impact through technology.</p>
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
