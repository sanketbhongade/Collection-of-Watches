import React from 'react'
import './Navbar.css'
import {Link} from 'react-router-dom'


const Navbar = () => {
  return (
    <>
      <nav className='navbar navbar-expand-lg bg-dark'>

        <div className='container-fluid'>
            <a href='/' className='navbar-brand company-name' data-aos='flip-right'>
                WATCH COLLECTION
                <i className='bi bi-cart fs-2'></i>
                <img src='https://cdn-icons-png.flaticon.com/512/4388/4388230.png' className='watch-logo' alt="Not found"/>
            </a>
            <Link to="/cart">
            <a className='navbar-brand company-name'  data-aos='flip-right' href='/cart'>
              <i className='bi bi-cart fs-2'></i>
            </a>
            </Link>
            <button className='navbar-toggler navbar-icon' data-bs-toggle='collapse' data-bs-target='#navbarNav'
            aria-controls='navbarNav' aria-expanded='false' aria-label='Toggler navigation'>
              <span className='navbar-toggler-icon'></span>
            </button>
        </div>
      </nav>
    </>
  )
}

export default Navbar;
