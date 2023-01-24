import React from "react";
import "./HomeKet.css";

const HomeKet = (props) => {
  return (
    <div className="container-detail-tailed">
      <div className="detail-skill-tailed">
        <div className="content-detail">
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
  );
};

HomeKet.defaultProps = {
  grade: "S",
  chakra: "Wind",
  damage: "240%Strength",
  effect: "Create Rasengan Through Shadow Clone to cause a magnificent strike",
  round: "1",
  launch: "When player attacks",
  rate: "20%",
  restriction: "It launches 2 time per battle",
};

export default HomeKet;
