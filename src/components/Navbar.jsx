import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import "./Navbar.css";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  

  return (
    <div>
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                    VISIT ARARAT
                </Link>
                <div className="menu-icon" onClick={handleClick}>
                  <i className={click ? "fas fa-times" : "fas fa-bars"} />
                </div>
                <ul className={click ? "nav-menu active" : "nav-menu"}>
                  <li className="nav-item">
                    <Link to="/" className='nav-links' onClick={closeMobileMenu}>
                      Home
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/attractions" className='nav-links' onClick={closeMobileMenu}>
                      Attractions
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/food" className='nav-links' onClick={closeMobileMenu}>
                      Food & Drink
                    </Link>
                  </li>
                  {/* <li className="nav-item">
                    <Link to="/whats-on" className='nav-links' onClick={closeMobileMenu}>
                      What's On
                    </Link>
                  </li> */}

                </ul>
                {/* {button && <Link to="/sign-up"><Button buttonStyle='btn--outline' className='nav-links-moible' onClick={closeMobileMenu}>SIGN UP</Button></Link>} */}
            </div>
        </nav>
    </div>
  )
}

export default Navbar