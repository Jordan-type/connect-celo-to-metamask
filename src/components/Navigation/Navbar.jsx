import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg sticky-top">
        <a className="navbar-brand" href="/">Connecting Celo to MetaMask</a>
        {/* <NavLink className="navbar-brand" to="/">Client</NavLink> */}
        <button className="navbar-toggler" type="button" data-toggle="collapse" 
        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
        aria-label="Toggle navigation">
            <i className="fa fa-bars" aria-hidden="true"></i>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            {/* <ul className="navbar-nav mr-auto">
            <li className="nav-item dropdown">
            <a href={'/'} className="nav-link dropdown-toggle" id="navbarDropdown" role="button" 
                  data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Category
            </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                    All Courses
                </div>
            </li>
            </ul> */}
            {/* {search} */}
        </div>
    </nav>
  )
}

export default Navbar