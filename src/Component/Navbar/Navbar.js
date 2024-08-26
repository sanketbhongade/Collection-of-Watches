import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <>
      <nav className='navbar navbar-expand-lg bg-dark'>

        <div className='container-fluid'>
            <a href='/' className='navbar-brand company-name' data-aos='flip-right'>
                WATCH COLLECTION
                <img src='https://cdn-icons-png.flaticon.com/512/4388/4388230.png' className='watch-logo' alt="Not found"/>
            </a>
            <button className='navbar-toggler navbar-icon' data-bs-toggle='collapse' data-bs-target='#navbarNav'
            aria-controls='navbarNav' aria-expanded='false' aria-label='Toggler navigation'>
                <span className='navbar-toggler-icon'></span>
            </button>
        </div>

        <div className='collapse collapse navbar-collapse'>
            <ul className='navbar-nav'>
                <li className='nav-items'>

                </li>
            </ul>
        </div>
      </nav>
    </>
  )
}

export default Navbar
