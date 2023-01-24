import React from "react";
import { Component } from "react";
import "./HomeCont.css";
import { TabTitle } from "../GeneralFunction";
import HomeKet from "../../component/HomeComp/HomeKet";
import HomeTailed from "../../component/HomeComp/HomeTailed";
import HomeButton from "../../component/HomeComp/HomeButton";

class HomeCont extends Component {
  render() {
    TabTitle("Ninja Bocil | Home");

    return (
        <div className="container-home">
          <div className="content-home-1"></div>

          <div className="content-home-2">
            <HomeButton />
          </div>

          <div className="content-home-3">
            <HomeTailed/>
            <HomeKet />
          </div>
        </div>
    );
  }
}

export default HomeCont;
