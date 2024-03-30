import './App.css'
import NavBar from './components/NavBar'
// import FullPageScroll from './pages/FullPageScroll'
import { Parallax } from 'react-parallax'
import woods from './img/woods.jpeg'
import fog from './img/fog.jpg'

function App () {
  return (
    <>
      <NavBar />
      {/* <FullPageScroll /> */}
      <Parallax strength={600} bgImage={woods}>
        <div className='hero--content'>
          <div className='hero--content_text'>
            <p className='welcome'>WELCOME</p>
            <p className='message'>Thanks for your visit</p>
          </div>
        </div>
      </Parallax>
    </>
  )
}

export default App
