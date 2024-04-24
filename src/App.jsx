import './App.css'
import ParallexComp from './pages/ParallexComp'
// import FullPageScroll from './pages/FullPageScroll'
import { BrowserRouter } from 'react-router-dom'
import NavBar from './components/NavBar'

function App () {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <ParallexComp />
      </BrowserRouter>
    </>
  )
}

export default App
