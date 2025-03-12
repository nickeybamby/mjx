import React, { useEffect, useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import logo from '../../assets/images/mjxLogo.svg'
import "./navbar.css";

const Menu = () => (
  <>
    <p>
      <a href="#home">Home</a>
    </p>
    <p>
      <a href="#services">Services</a>
    </p>
    <p>
      <a href="#about">About</a>
    </p>
    <p>
      <a href="#contact">Contact</a>
    </p>
  </>
);

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    });
  }, []);

  return (
    <div className={`gpt3__navbar ${sticky ? "dark-nav" : ""}`}>
      <div className="gpt3__navbar-links ">
        <div className="gpt3__navbar-links_logo">
          <img src={logo} alt="website logo" />
        </div>
        <div className="gpt3__navbar-links_container">
          <Menu />
        </div>
      </div>

      <div className="gpt3__navbar-menu">
        {toggleMenu ? (
          <RiCloseLine
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className="gpt3__navbar-menu_container scale-up-center">
            <div className="gpt3__navbar-menu_container-links">
              <Menu />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
