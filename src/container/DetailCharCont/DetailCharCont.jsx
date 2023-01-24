import React from "react";
import { Component } from "react";
import "./DetailCharCont.css";
import RecomComp from "../../component/DetailCharComp/RecomComp";
import DetailComp from "../../component/DetailCharComp/DetailComp";
import axios from "axios";
import CardCharComp from "../../component/CardCharComp/CardCharComp";
import { useParams } from "react-router-dom";

class DetailCharCont extends Component {
  state = {
    post: [],
  };

  componentDidMount(id) {
    console.log(id);
    axios
      .get("https://publicapininjaheroes.vercel.app/ninja/?id=63a2623a333ab08787a882a2")
      .then((result) => {
        this.setState({
          post: result.data,
        });
      });
  }


  render() {
    return (
      <div className="container-detail-char">
        <div className="content-atas-char">
            {
                this.state.post.map(post => {
                    return <DetailComp 
                    key = {post._id}
                    logoChar={post.fotohero}
                    namaChar={post.nama}
                    grade ={post.grade}
                    quality ={post.quality}
                    point  ={post.point}
                    chakra ={post.chakra}
                    />
                })
            }
          {/* <DetailComp 
          logoChar 
          namaChar
          grade 
          quality 
          point 
          chakra /> */}
        </div>
        <div className="content-bawah-char">
            {
                this.state.post.map((item) =>{
                    return <RecomComp
                    skill1={item.skill[0]}
                    skill2={item.skill[1]}
                    skill3={item.skill[2]}
                    skill4={item.skill[3]}
                    skill5={item.skill[4]}
                    summon1={item.summon[0]}
                    summon2={item.summon[1]}
                    summon3={item.summon[2]}
                    tailed1={item.tailed[0]}
                    tailed2={item.tailed[1]}
                  />
                })
            }
        </div>
      </div>
    );
  }
}

export default DetailCharCont;
