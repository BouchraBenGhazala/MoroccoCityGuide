// Navbar.js
import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from './Images/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <nav className={`navbar navbar-expand-lg fixed-top ${scrolling ? 'custom-green-bg' : 'custom-green-bg2'}`}>
      <div className="container-fluid">
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
                    <ul className="navbar-nav mr-auto h5">
                      <li className="nav-item mr-5">
                        <Link to="/" className="nav-link">
                          Home
                        </Link>
                      </li>
                      <li className="nav-item mr-5">
                        <NavLink to="/stadiums" className="nav-link ">
                          Stadiums
                        </NavLink>
                      </li>
                      <li className="nav-item mr-5">
                        <NavLink to="/histories" className="nav-link ">
                          Histories
                        </NavLink>
                      </li>
                      <li>
                      <NavLink to="/" className="navbar-brand"><img src={logo} alt="Logo" className="logo mr-5" width="90" /></NavLink>

                      </li>

                      <li className="nav-item mr-5">
                        <NavLink to="/hotels" className="nav-link ">
                          Hotels
                        </NavLink>
                      </li>
                      <li className="nav-item mr-5">
                        <NavLink to="/traditions" className="nav-link ">
                          Traditions
                        </NavLink>
                      </li>
                      <li className="nav-item mr-5 ">
                        <NavLink to="/popular-places" className="nav-link ">
                          Popular Places
                        </NavLink>
                      </li>
                    </ul>
                  </div>
                </div>
                <style>
                  {
                    `
                    @import url('https://fonts.googleapis.com/css2?family=Tajawal:wght@300&display=swap');
                    @import url('https://fonts.googleapis.com/css2?family=Amiri&display=swap');
                    .custom-green-bg {
                      background-color: #781322; /* Your preferred shade of green */
                      padding-top: 0px; /* Adjust the top padding as needed */
                      padding-bottom: 0px; /* Adjust the bottom padding as needed */
                    }
                    .custom-green-bg2 {
                      background-color: #991a2d; /* Your preferred shade of green */
                      padding-top: 0px; /* Adjust the top padding as needed */
                      padding-bottom: 0px; /* Adjust the bottom padding as needed */
                      
                    }
                    .nav-link{
                      color: rgba(240,235,229,255);
                      font-weight: bold;
                      margin-left:35px;
                      margin-top:30px;

                    }
                    .nav-link:hover{
                      color:red;
                      text-decoration:underline;
                    }
                    .nav-link.active{
                      color:red;
                      text-decoration:underline;
                    }
                    .navbar{
                      font-family: 'Amiri', sans-serif;
                      
                    }
                    `
                  }
                </style>
              </nav>
            );
          };

          export default Navbar;
