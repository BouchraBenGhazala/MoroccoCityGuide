// Navbar.js
import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from './Images/jj.png';
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
    <nav className={`navbar navbar-expand-lg fixed-top ${scrolling ? 'custom-nav' : 'custom-nav2'}`}>
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
                    <ul className="navbar-nav mx-auto h4 ">
                      <li className="nav-item mr-4">
                        <NavLink to="/" className={`nav-link ${scrolling ? 'custom-color' : 'custom-color2'}`}>
                          Home
                        </NavLink>
                      </li>
                      <li className="nav-item mr-4">
                        <NavLink to="/stadiums" className={`nav-link ${scrolling ? 'custom-color' : 'custom-color2'}`}>
                          Stadiums
                        </NavLink>
                      </li>
                      <li className="nav-item mr-4">
                        <NavLink to="/histories" className={`nav-link ${scrolling ? 'custom-color' : 'custom-color2'}`}>
                          Histories
                        </NavLink>
                      </li>
                      <li>
                      <NavLink to="/" className="navbar-brand"><img src={logo} alt="Logo" className="logo ml-4 mr-3" width="100" /></NavLink>

                      </li>

                      <li className="nav-item mr-4">
                        <NavLink to="/hotels" className={`nav-link ${scrolling ? 'custom-color' : 'custom-color2'}`}>
                          Hotels
                        </NavLink>
                      </li>
                      <li className="nav-item mr-4">
                        <NavLink to="/traditions" className={`nav-link ${scrolling ? 'custom-color' : 'custom-color2'}`}>
                          Traditions
                        </NavLink>
                      </li>
                      <li className="nav-item mr-4">
                        <NavLink to="/popular-places" className={`nav-link ${scrolling ? 'custom-color' : 'custom-color2'}`}>
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
                    .custom-nav {
                      background-color: #991a2d; /* Your preferred shade of green */
                      padding-top: 0px; /* Adjust the top padding as needed */
                      padding-bottom: 0px; /* Adjust the bottom padding as needed */
                      color:rgba(240,235,229,255);
                    }
                    .custom-nav2 {
                      background-color: ; /* Your preferred shade of green */
                      padding-top: 0px; /* Adjust the top padding as needed */
                      padding-bottom: 0px; /* Adjust the bottom padding as needed */
                      
                    }
                    .custom-color{
                      color:white;
                    }
                    .custom-color2{
                      color:#991a2d;
                    }
                    .nav-link{
                      font-weight: bold;
                      margin-top:30px;
                      

                    }
                    .nav-link:hover{
                      color:red;
                      font-size:25px;
                    }
                    .nav-link.active{
                      color:red;
                      
                    }
                    .navbar{
                      font-family: 'Amiri', sans-serif;
                      
                    }
                    .container-fluid{
                      height:70px;
                      margin-top:5px;
                      justify-content: space-between;
                     
                    }
                    `
                  }
                </style>
              </nav>
            );
          };

          export default Navbar;
