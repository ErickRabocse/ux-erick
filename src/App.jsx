import './App.css'
import NavBar from './components/NavBar'
// import FullPageScroll from './pages/FullPageScroll'
import { Parallax } from 'react-parallax'
import woods from './img/woods.jpeg'
import me from './img/me_comp.png'
// import p0 from './img/p0.webp'

function App () {
  return (
    <>
      <NavBar />
      {/* <FullPageScroll /> */}
      {/* Parallax tutorial: https://www.youtube.com/watch?v=XUmq3B7Iugw */}
      <Parallax strength={-600} bgImage={woods}>
        <div className='content'>
          <div className='content_text'>
            <p className='welcome'>WELCOME</p>
            <p className='message'>Thanks for your visit</p>
          </div>
        </div>
      </Parallax>
      <Parallax>
        <div className='about'>
          <div className='about_text'>
            <h1 className='about-header'>About me</h1>
            <p>I am interested in timeless designs that capture the essence of emotions, bring joy to those who see it and inevitably create an experience.</p>
            <p>I am currently taking a UX Design course at Google and I am countinously learning about front end technologies since I enjoy bringing to life anything that I can picture in my mind.</p>
            <p>The technologies I am familiar with are: HTML, CSS, JS, Typescript, Bootstrap, GitHub, React, Figma & Adobe Illustrator.</p>
          </div>
          <img src={me} alt='profile photo of Erick' className='me' />
        </div>
      </Parallax>
      <Parallax>
        <div className='projects'>
          <div className='projects_text'>
            <p className='projects-welcome'>PROJECTS</p>
          </div>
        </div>
      </Parallax>
      <Parallax>
        <div className='contact'>
          <div className='contact_text'>
            <h1 className='about-header'>Contact</h1>
            <p>LinkedIn</p>
            <p>Mail</p>
            <p>Phone</p>
            <p>WhatsApp</p>
          </div>

        </div>
      </Parallax>
    </>
  )
}

export default App
