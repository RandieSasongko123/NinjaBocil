import React from "react";
import { Link } from "react-router-dom";
import "./FooterComp.css";

const FooterComp = () => {
  return (
    <div className="container-footer">
      <div className="content-footer">
        <div className="content-footer-1">
          <h1>Ninja Bocil</h1>
          <ul>
            <li>
              <Link to="/Privacy">Privacy Policy</Link>
            </li>
            <li>
              <Link to="/Contact">Contact</Link>
            </li>
          </ul>
        </div>

        <div className="content-footer-2">
          <ul>
            <li>
              <a href="">English</a>
            </li>
            <li>
              <a href="">Español</a>
            </li>
            <li>
              <a href="">日本語</a>
            </li>
            <li>
              <a href="">中文（繁體）</a>
            </li>
            <li>
              <a href="">Deutsch</a>
            </li>
            <li>
              <a href="">Français</a>
            </li>
            <li>
              <a href="">Italiano</a>
            </li>
          </ul>
        </div>

        <div className="content-footer-3">
          <ul>
            <li>
              <a href="">Indonesia</a>
            </li>
            <li>
              <a href="">한국어</a>
            </li>
            <li>
              <a href="">Português</a>
            </li>
            <li>
              <a href="">Pусский</a>
            </li>
            <li>
              <a href="">ภาษาไทย</a>
            </li>
            <li>
              <a href="">Türkçe</a>
            </li>
            <li>
              <a href="">Tiếng Việt</a>
            </li>
          </ul>
        </div>

        <div className="content-footer-4">
          <p>
            Ninja Bocil adalah Database, Tier List, dan Guide untuk Ninja Heroes
            Mobile dan emulator.
            <br />
            <br />
            Ninja Bocil tidak di endorse oleh Ninja Heroes langsung serta untuk
            API yang digunakan dibuat sendiri, web ini tidak resmi atau official
            dari Ninja Heroes
          </p>
        </div>
      </div>

      <center>
        <p>
          Design inspired from{" "}
          <a className="linkgenshin" href="https://genshin-builds.com/" target="_blank">
            https://genshin-builds.com/
          </a>
        </p>
      </center>
    </div>
  );
};

export default FooterComp;
