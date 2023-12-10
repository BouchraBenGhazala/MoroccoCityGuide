// Navbar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from './Images/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar navbar-expand-lg bg-white ">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">
                    <img src={logo} alt="Logo" className="logo mr-5" width="185px" />
                  </Link>
                  <button
                    className="navbar-toggler"
                    type="button"
                    onClick={toggleMenu}
                  >
                    <FontAwesomeIcon icon={faBars} />
                  </button>
                  <div
                    className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`}
                  >
                    <ul className="navbar-nav mr-auto h5 ">
                      <li className="nav-item mr-5 ">
                        <Link to="/" className="nav-link text-muted">
                          Home
                        </Link>
                      </li>
                      <li className="nav-item mr-5">
                        <Link to="/stadiums" className="nav-link text-muted">
                          Stadiums
                        </Link>
                      </li>
                      <li className="nav-item mr-5">
                        <Link to="/histories" className="nav-link text-muted">
                          Histories
                        </Link>
                      </li>
                      <li className="nav-item mr-5">
                        <Link to="/hotels" className="nav-link text-muted">
                          Hotels
                        </Link>
                      </li>
                      <li className="nav-item mr-5">
                        <Link to="/traditions" className="nav-link text-muted">
                          Traditions
                        </Link>
                      </li>
                      <li className="nav-item mr-5">
                        <Link to="/popular-places" className="nav-link text-muted">
                          Popular Places
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </nav>
            );
          };

          export default Navbar;
