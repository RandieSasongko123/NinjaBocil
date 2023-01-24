import React from "react";
import "./Navbar.css";
import Logo from "../../image/Logo.jpeg";
import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  // const navRef = useRef;

  // const showNavbar = () => {
  //     navRef.current.classList.toggle("responsive_nav");
  // }

  const[show, setShow]=useState(true);

  return (
    <div className="container-navBar">
      <div className="navBar">
        <div className="nav_kiri">
          <a href="#">
            <img src={Logo} alt="" />
          </a>
          <h1>NinjaBocil</h1>
        </div>

        <ul className="nav_kanan_web">
            <li>
              <Link to="/">Home</Link>
            </li>
  
            <li>
              <Link to="/Karakter">Character</Link>
            </li>
  
            <li>
              <Link to="/Skill">Skill</Link>
            </li>
  
            <li>
              <Link to="/Tailed">Tailed Beast</Link>
            </li>
  
            <li>
              <Link to="/Tier">Tier List</Link>
            </li>
          </ul>

        {
            !show?<ul className="nav_kanan_mobile">
            <li>
              <Link to="/">Home</Link>
            </li>
  
            <li>
              <Link to="/Karakter">Character</Link>
            </li>
  
            <li>
              <Link to="/Skill">Skill</Link>
            </li>
  
            <li>
              <Link to="/Tailed">Tailed Beast</Link>
            </li>
  
            <li>
              <Link to="/Tier">Tier List</Link>
            </li>
          </ul>:null
        }

        <div class="menu-toggle">
          <input type="checkbox" onClick={() =>setShow(!show)}/>
          <span></span>
          <span></span>
          <span></span>
        </div>

      </div>
    </div>
  );
};

export default Navbar;
