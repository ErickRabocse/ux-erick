import logo from '../assets/logo_3.png'

const NavBar = () => {
  return (

    <nav className='navbar navbar-expand-lg bg-body-tertiary'>
      <div className='container-fluid d-flex'>
        <a className='navbar-brand' href='#'>
          <img src={logo} alt='Logo' height='24' className='d-inline-block align-text-top  mx-2' />
          Erick Chávez Escobar
        </a>
        <div className='buttons'>
          <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarNav' aria-controls='navbarNav' aria-expanded='false' aria-label='Toggle navigation'>
            <span className='navbar-toggler-icon' />
          </button>
          <div className='collapse navbar-collapse' id='navbarNav'>
            <ul className='navbar-nav'>
              <li className='nav-item'>
                <a className='nav-link active' aria-current='page' href='#'>About me</a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='#'>Projects</a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='#'>Contact</a>
              </li>
            </ul>
          </div>
        </div>

      </div>
    </nav>

  )
}
export default NavBar
