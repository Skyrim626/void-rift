import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Button from "../Button";
import "./Navbar.css";

const Navbar = () => {
  // Use State
  const [click, setClick] = useState<boolean>(false);
  const [button, setButton] = useState<boolean>(true);

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

  // Close Mobile
  const closeMobileMenu = () => setClick(false);

  window.addEventListener("resize", showButton);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
          VoidRift <i className="fas fa-meteor"></i>
        </Link>
        <div className="menu-icon" onClick={() => setClick(!click)}>
          <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
        </div>

        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/" className="nav-links" onClick={() => setClick(false)}>
              Services
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/" className="nav-links" onClick={() => setClick(false)}>
              Products
            </Link>
          </li>

          <li className="nav-item">
            <Link
              to="/"
              className="nav-links-mobile"
              onClick={() => setClick(false)}
            >
              Sign Up
            </Link>
          </li>
        </ul>

        {button && <Button buttonStyle="btn--outline">SIGN UP</Button>}
      </div>
    </nav>
  );
};

export default Navbar;
