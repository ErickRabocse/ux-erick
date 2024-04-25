import logo from '../assets/logo_3.png'
import '../pages/pages.css'
import { HashLink as Link } from 'react-router-hash-link'

const NavBar = () => {
  return (

    <nav className='navbar navbar-expand-lg bg-body-tertiary position-fixed'>
      <div className='container-fluid'>
        <Link className='navbar-brand' to='#hero'>
          <img src={logo} alt='Logo' height='30' className='d-inline-block align-text-top  mx-2' />
          Erick Chávez Escobar
        </Link>
        <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarNav' aria-controls='navbarNav' aria-expanded='false' aria-label='Toggle navigation'>
          <span className='navbar-toggler-icon' />
        </button>
        <div className='collapse navbar-collapse' id='navbarNav'>
          <ul className='navbar-nav'>
            <li className='nav-item'>
              <Link className='nav-link active' aria-current='page' to='#about'>About me</Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to='#projects'>Projects</Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to='#contact' smooth>Contact</Link>
            </li>
          </ul>
        </div>

      </div>
    </nav>

  )
}
export default NavBar
