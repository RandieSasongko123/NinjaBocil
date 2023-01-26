import React from "react";
import "./Navbar.css";
import Logo from "../../image/Logo.jpeg";
import { NavLink } from "react-router-dom";
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
          {/* <a href="#"> */}
            <img src={Logo} alt="" />
          {/* </a> */}
          <h1>NinjaBocil</h1>
        </div>

        <ul className="nav_kanan_web">
            <li>
              <NavLink to="/NinjaBocil" exact activeClassName="active">Home</NavLink>
            </li>
  
            <li>
              <NavLink to="/Karakter" exact activeClassName="active">Character</NavLink>
            </li>
  
            <li>
              <NavLink to="/Skill" exact activeClassName="active">Skill</NavLink>
            </li>
  
            <li>
              <NavLink to="/Tailed" exact activeClassName="active">Tailed Beast</NavLink>
            </li>
  
            <li>
              <NavLink to="/Tier" exact activeClassName="active">Tier List</NavLink>
            </li>
          </ul>

        {
            !show?<ul className="nav_kanan_mobile">
            <li>
              <NavLink to="/NinjaBocil" exact activeClassName="active">Home</NavLink>
            </li>
  
            <li>
              <NavLink to="/Karakter" exact activeClassName="active">Character</NavLink>
            </li>
  
            <li>
              <NavLink to="/Skill" exact activeClassName="active">Skill</NavLink>
            </li>
  
            <li>
              <NavLink to="/Tailed" exact activeClassName="active">Tailed Beast</NavLink>
            </li>
  
            <li>
              <NavLink to="/Tier" exact activeClassName="active">Tier List</NavLink>
            </li>
          </ul>:null
        }

        <div className="menu-toggle">
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
