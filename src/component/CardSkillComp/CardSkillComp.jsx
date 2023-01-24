import React from "react";
import Logo from "../../image/Logo.jpeg";
import "./CardSkillComp.css";

const CardSkillComp = (props) => {
  return (
    <div className="container-card-skill">
      <div className="detail-skill">
        <div className="nama-skill">
          <div className="content-atas">
            <img src={props.logoSkill} alt="" />
            <div className="keterangan-skill">
              <h1 className="namaSkill">{props.namaSkill}</h1>
              <h3 className="effect">{props.effect}</h3>
            </div>
          </div>
          <div className="content-bawah">
            <ul>
              <li className="grade">Grade : {props.grade}</li>
              <li className="chakra">Chakra : {props.chakra}</li>
              <li className="damage">Damage : {props.damage}</li>
            </ul>
            <table>
              <tbody>
                <tr>
                  <td>Round of duraction</td>
                  <td> : </td>
                  <td>{props.round}</td>
                </tr>
                <tr>
                  <td>Launch time</td>
                  <td> : </td>
                  <td>{props.launch}</td>
                </tr>
                <tr>
                  <td>Proc. Rate</td>
                  <td> : </td>
                  <td>{props.rate}</td>
                </tr>
                <tr>
                  <td>Restriction</td>
                  <td> : </td>
                  <td>{props.restriction}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

CardSkillComp.defaultProps = {
  logoSkill: Logo,
  namaSkill: "Shadow Clone Rasengan",
  grade: "S",
  chakra: "Wind",
  damage: "240%Strength",
  effect: "Create Rasengan Through Shadow Clone to cause a magnificent strike",
  round: "1",
  launch: "When player attacks",
  rate: "20%",
  restriction: "It launches 2 time per battle",
};

export default CardSkillComp;
