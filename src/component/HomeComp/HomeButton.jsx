import React from "react";
import "./HomeButton.css";
import { Link } from "react-router-dom";

const HomeButton = () => {
  return (
    <div className="button-home">
      <ul>
        <li>
          {/* <a href="">Senin</a> */}
          <Link to="">Senin</Link>
        </li>
        <li>
          {/* <a href="">Selasa</a> */}
          <Link to="">Selasa</Link>
        </li>
        <li>
          {/* <a href="">Rabu</a> */}
          <Link to="">Rabu</Link>
        </li>
        <li>
          {/* <a href="">Kamis</a> */}
          <Link to="">Kamis</Link>
        </li>
        <li>
          {/* <a href="">Jumat</a> */}
          <Link to="">Jumat</Link>
        </li>
        <li>
          {/* <a href="">Sabtu</a> */}
          <Link to="">Sabtu</Link>
        </li>
        <li>
          {/* <a href="">Minggu</a> */}
          <Link to="">Minggu</Link>
        </li>
      </ul>
    </div>
  );
};

export default HomeButton;
