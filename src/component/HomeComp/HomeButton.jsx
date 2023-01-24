import React from "react";
import "./HomeButton.css";
import { Link } from "react-router-dom";

const HomeButton = () => {
  return (
    <div className="button-home">
      <ul>
        <li>
          {/* <a href="">Senin</a> */}
          <Link to="/#senin">Senin</Link>
        </li>
        <li>
          {/* <a href="">Selasa</a> */}
          <Link to="/#selasa">Selasa</Link>
        </li>
        <li>
          {/* <a href="">Rabu</a> */}
          <Link to="/#rabu">Rabu</Link>
        </li>
        <li>
          {/* <a href="">Kamis</a> */}
          <Link to="/#kamis">Kamis</Link>
        </li>
        <li>
          {/* <a href="">Jumat</a> */}
          <Link to="/#jumat">Jumat</Link>
        </li>
        <li>
          {/* <a href="">Sabtu</a> */}
          <Link to="/#sabtu">Sabtu</Link>
        </li>
        <li>
          {/* <a href="">Minggu</a> */}
          <Link to="/#minggu">Minggu</Link>
        </li>
      </ul>
    </div>
  );
};

export default HomeButton;
