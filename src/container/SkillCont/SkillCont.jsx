import { Component } from "react";
import { TabTitle } from "../GeneralFunction";
import "./SkillCont.css";
import CardSkillComp from "../../component/CardSkillComp/CardSkillComp";
// import { skillData } from "../../database/skillData";
// import { useEffect, useState } from "react";
import axios from "axios";
// import useAxios from "axios-hooks";

class SkillCont extends Component {
  state = {
    post: [],
  };

  componentDidMount() {
    axios
      .get("https://publicapininjaheroes.vercel.app/skill")
      .then((result) => {
        this.setState({
          post: result.data,
        });
      });
  }

  searchChanged = (event) => {
    this.setState({ nama: event.target.value });
  };

  render() {
    TabTitle("Ninja Bocil | Skill");

    return (
      <div className="container-skill">
        <div className="content-skill-cont">
          <h1 className="Judul">Skill</h1>
          <input
            type="text"
            className="search-skill"
            onChange={this.searchChanged}
            value={this.state.nama}
            placeholder="Search..."
          />
          <div className="skill">
            {this.state.post
              .filter((post) => {
                if (
                  post.nama.toLowerCase().includes(this.state.nama) &&
                  post.grade === "SSS"
                ) {
                  return post;
                } else if (this.state.nama == null && post.grade === "SSS") {
                  return (
                    <CardSkillComp
                      key={post._id}
                      logoSkill={post.fotoskill}
                      namaSkill={post.nama}
                      grade={post.grade}
                      chakra={post.chakra}
                      damage={post.damage}
                      effect={post.effect}
                      round={post.round}
                      launch={post.launch}
                      rate={post.procRate}
                      restriction={post.restriction}
                    />
                  );
                }
                return null;
              })
              .map((post) => (
                <CardSkillComp
                  key={post._id}
                  logoSkill={post.fotoskill}
                  namaSkill={post.nama}
                  grade={post.grade}
                  chakra={post.chakra}
                  damage={post.damage}
                  effect={post.effect}
                  round={post.round}
                  launch={post.launch}
                  rate={post.procRate}
                  restriction={post.restriction}
                />
              ))}
            {this.state.post
              .filter((post) => {
                if (
                  post.nama.toLowerCase().includes(this.state.nama) &&
                  post.grade === "SS"
                ) {
                  return post;
                } else if (this.state.nama == null && post.grade === "SS") {
                  return (
                    <CardSkillComp
                      key={post._id}
                      logoSkill={post.fotoskill}
                      namaSkill={post.nama}
                      grade={post.grade}
                      chakra={post.chakra}
                      damage={post.damage}
                      effect={post.effect}
                      round={post.round}
                      launch={post.launch}
                      rate={post.procRate}
                      restriction={post.restriction}
                    />
                  );
                }
                return null;
              })
              .map((post) => (
                <CardSkillComp
                  key={post._id}
                  logoSkill={post.fotoskill}
                  namaSkill={post.nama}
                  grade={post.grade}
                  chakra={post.chakra}
                  damage={post.damage}
                  effect={post.effect}
                  round={post.round}
                  launch={post.launch}
                  rate={post.procRate}
                  restriction={post.restriction}
                />
              ))}
            {this.state.post
              .filter((post) => {
                if (
                  post.nama.toLowerCase().includes(this.state.nama) &&
                  post.grade === "S"
                ) {
                  return post;
                } else if (this.state.nama == null && post.grade === "S") {
                  return (
                    <CardSkillComp
                      key={post._id}
                      logoSkill={post.fotoskill}
                      namaSkill={post.nama}
                      grade={post.grade}
                      chakra={post.chakra}
                      damage={post.damage}
                      effect={post.effect}
                      round={post.round}
                      launch={post.launch}
                      rate={post.procRate}
                      restriction={post.restriction}
                    />
                  );
                }
                return null;
              })
              .map((post) => (
                <CardSkillComp
                  key={post._id}
                  logoSkill={post.fotoskill}
                  namaSkill={post.nama}
                  grade={post.grade}
                  chakra={post.chakra}
                  damage={post.damage}
                  effect={post.effect}
                  round={post.round}
                  launch={post.launch}
                  rate={post.procRate}
                  restriction={post.restriction}
                />
              ))}
            {this.state.post
              .filter((post) => {
                if (
                  post.nama.toLowerCase().includes(this.state.nama) &&
                  post.grade === "A"
                ) {
                  return post;
                } else if (this.state.nama == null && post.grade === "A") {
                  return (
                    <CardSkillComp
                      key={post._id}
                      logoSkill={post.fotoskill}
                      namaSkill={post.nama}
                      grade={post.grade}
                      chakra={post.chakra}
                      damage={post.damage}
                      effect={post.effect}
                      round={post.round}
                      launch={post.launch}
                      rate={post.procRate}
                      restriction={post.restriction}
                    />
                  );
                }
                return null;
              })
              .map((post) => (
                <CardSkillComp
                  key={post._id}
                  logoSkill={post.fotoskill}
                  namaSkill={post.nama}
                  grade={post.grade}
                  chakra={post.chakra}
                  damage={post.damage}
                  effect={post.effect}
                  round={post.round}
                  launch={post.launch}
                  rate={post.procRate}
                  restriction={post.restriction}
                />
              ))}
            {this.state.post
              .filter((post) => {
                if (
                  post.nama.toLowerCase().includes(this.state.nama) &&
                  post.grade === "B"
                ) {
                  return post;
                } else if (this.state.nama == null && post.grade === "B") {
                  return (
                    <CardSkillComp
                      key={post._id}
                      logoSkill={post.fotoskill}
                      namaSkill={post.nama}
                      grade={post.grade}
                      chakra={post.chakra}
                      damage={post.damage}
                      effect={post.effect}
                      round={post.round}
                      launch={post.launch}
                      rate={post.procRate}
                      restriction={post.restriction}
                    />
                  );
                }
                return null;
              })
              .map((post) => (
                <CardSkillComp
                  key={post._id}
                  logoSkill={post.fotoskill}
                  namaSkill={post.nama}
                  grade={post.grade}
                  chakra={post.chakra}
                  damage={post.damage}
                  effect={post.effect}
                  round={post.round}
                  launch={post.launch}
                  rate={post.procRate}
                  restriction={post.restriction}
                />
              ))}
            {this.state.post
              .filter((post) => {
                if (
                  post.nama.toLowerCase().includes(this.state.nama) &&
                  post.grade === "C"
                ) {
                  return post;
                } else if (this.state.nama == null && post.grade === "C") {
                  return (
                    <CardSkillComp
                      key={post._id}
                      logoSkill={post.fotoskill}
                      namaSkill={post.nama}
                      grade={post.grade}
                      chakra={post.chakra}
                      damage={post.damage}
                      effect={post.effect}
                      round={post.round}
                      launch={post.launch}
                      rate={post.procRate}
                      restriction={post.restriction}
                    />
                  );
                }
                return null;
              })
              .map((post) => (
                <CardSkillComp
                  key={post._id}
                  logoSkill={post.fotoskill}
                  namaSkill={post.nama}
                  grade={post.grade}
                  chakra={post.chakra}
                  damage={post.damage}
                  effect={post.effect}
                  round={post.round}
                  launch={post.launch}
                  rate={post.procRate}
                  restriction={post.restriction}
                />
              ))}
            {this.state.post
              .filter((post) => {
                if (
                  post.nama.toLowerCase().includes(this.state.nama) &&
                  post.grade === "D"
                ) {
                  return post;
                } else if (this.state.nama == null && post.grade === "D") {
                  return (
                    <CardSkillComp
                      key={post._id}
                      logoSkill={post.fotoskill}
                      namaSkill={post.nama}
                      grade={post.grade}
                      chakra={post.chakra}
                      damage={post.damage}
                      effect={post.effect}
                      round={post.round}
                      launch={post.launch}
                      rate={post.procRate}
                      restriction={post.restriction}
                    />
                  );
                }
                return null;
              })
              .map((post) => (
                <CardSkillComp
                  key={post._id}
                  logoSkill={post.fotoskill}
                  namaSkill={post.nama}
                  grade={post.grade}
                  chakra={post.chakra}
                  damage={post.damage}
                  effect={post.effect}
                  round={post.round}
                  launch={post.launch}
                  rate={post.procRate}
                  restriction={post.restriction}
                />
              ))}

            {/* {this.state.post
              .map((post) => (
                <CardSkillComp
                  key={post._id}
                  logoSkill={post.fotoskill}
                  namaSkill={post.nama}
                  grade={post.grade}
                  chakra={post.chakra}
                  damage={post.damage}
                  effect={post.effect}
                  round={post.round}
                  launch={post.launch}
                  rate={post.procRate}
                  restriction={post.restriction}
                />
              ))} */}
          </div>
        </div>
      </div>
    );
  }
}

export default SkillCont;

// function SkillCont() {

//   TabTitle("Ninja Bocil | Skill");

//   const [query, setQuery] = useState("");
//   console.log(query);

//   const [skillList, setSkillList] = useState([]);

//   useEffect(()=>{
//     axios
//       .get("https://publicapininjaheroes.vercel.app/skill")
//       .then((response) => {
//         setSkillList(response.data.results)});
//   },[])

//   return (
//     // <Fragment>
//       <div className="container-skill">
//         <h1 className="Judul">Skill</h1>
//         <center>
//           <input
//             type="text"
//             placeholder="Search"
//             className="search-skill"
//             onChange={(e) => setQuery(e.target.value.toLowerCase())}
//           />
//         </center>

//         <div className="skill">
// {skillList &&
//   skillList.map((item)=>{
//     return <h4>{item.nama}</h4>
//   })
// }

//           {/* {skillData
//             .filter((skillData) =>
//               skillData.nama.toLowerCase().includes(query)
//             )
//             .map((item) => (
//               <CardSkillComp
//                 key={item._id}
//                 logoSkill={item.fotoskill}
//                 namaSkill={item.nama}
//                 grade={item.grade}
//                 chakra={item.chakra}
//                 damage={item.damage}
//                 effect={item.effect}
//                 round={item.round}
//                 launch={item.launch}
//                 rate={item.procRate}
//                 restriction={item.restriction}
//               />
//             ))} */}

//             {/* {skillData.map((item) => (
//               <CardSkillComp
//                 key={item.id}
//                 logoSkill={item.fotoskill}
//                 namaSkill={item.nama}
//                 grade={item.grade}
//                 chakra={item.chakra}
//                 damage={item.damage}
//                 effect={item.effect}
//                 round={item.round}
//                 launch={item.launch}
//                 rate={item.procRate}
//                 restriction={item.restriction}
//               />
//             ))} */}

//         </div>
//       </div>
//     // </Fragment>
//   );
// }

// export default SkillCont;
