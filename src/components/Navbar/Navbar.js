import React, { useState } from 'react'
import './Navbar.css'
import { Link } from 'react-scroll'

import Logo from '../../assets/images/logo1.png'
import Bars from '../../assets/images/bars.png'

const Navbar = () => {
  const mobile = window.innerWidth <= 813 ? true : false
  const [menuOpened, setMenuOpened] = useState(false)

  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <Link to="home" spy={true} smooth={true}>
            <img src={Logo} alt="" className="logo-icon" />
          </Link>

          {menuOpened === false && mobile === true ? (
            <div
              className="bars-icon"
              style={{
                backgroundColor: 'gray',
                padding: '0.5rem',
                borderRadius: '5px',
                alignSelf: 'center',
              }}
              onClick={() => setMenuOpened(true)}
            >
              <img
                src={Bars}
                alt=""
                style={{ width: '1.5rem', height: '1.5rem' }}
              />
            </div>
          ) : (
            <div className="right-s">
              <ul className="navbar-menu">
                <li>
                  <Link
                    onClick={() => setMenuOpened(false)}
                    to="home"
                    spy={true}
                    smooth={true}
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    onClick={() => setMenuOpened(false)}
                    to="search-exercises"
                    spy={true}
                    smooth={true}
                  >
                    Exercise
                  </Link>
                </li>
                <li>
                  <Link
                    onClick={() => setMenuOpened(false)}
                    to="plans"
                    spy={true}
                    smooth={true}
                  >
                    Plans
                  </Link>
                </li>
                <li>
                  <Link
                    onClick={() => setMenuOpened(false)}
                    to="whyus"
                    spy={true}
                    smooth={true}
                  >
                    Why Us
                  </Link>
                </li>
              </ul>
            </div>
          )}
          <button className="btn">Join Us</button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
