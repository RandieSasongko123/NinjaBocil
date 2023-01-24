import React, { Component } from "react";
import "./TailedBeast.css";
import { TabTitle } from "../../container/GeneralFunction";
import CardTailedComp from "../CardTailedComp/CardTailedComp";
// import { tailedData } from "../../database/tailedData";
import axios from "axios";

class TailedBeast extends Component {
  state = {
    post: [],
  };

  componentDidMount() {
    axios
      .get("https://publicapininjaheroes.vercel.app/tailed")
      .then((result) => {
        this.setState({
          post: result.data,
        });
      });
  }

  render() {
    TabTitle("Ninja Bocil | Tailed Beast");

    return (
      <div className="container-tailed-beast">
        <h1 className="judul-tailed">Tailed Beast</h1>
        <div className="content-tailed-beast">
          {/* {tailedData.map((item) => (
            <CardTailedComp
              namaTailed={item.nama}
              logoTailed={item.fototailed}
              skill1={item.skill[0]}
              skill2={item.skill[1]}
              skill3={item.skill[2]}
              skill4={item.skill[3]}
            />
          ))} */}
          {this.state.post.map((post) => {
            return <CardTailedComp
            key={post._id}
            namaTailed={post.nama}
            logoTailed={post.fototailed}
            skill1={post.skill[0]}
            skill2={post.skill[1]}
            skill3={post.skill[2]}
            skill4={post.skill[3]} />
          })}
        </div>
      </div>
    );
  }
}

export default TailedBeast;
