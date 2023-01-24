import React from "react";
import './RecomComp.css';
import Logo from "../../image/Logo.jpeg";

const RecomComp = (props) => {

    return(
        <div className="container-recom">

            <div className="recom-skill">
                <h3 className="sub-judul">Skill Recommended</h3>
                <img src={props.skill1} alt="" />
                <img src={props.skill2} alt="" />
                <img src={props.skill3} alt="" />
                <img src={props.skill4} alt="" />
                <img src={props.skill5} alt="" />
            </div>

            <div className="recom-summon">
                <h3 className="sub-judul">Summon Recommended</h3>
                <img src={props.summon1} alt="" />
                <img src={props.summon2} alt="" />
                <img src={props.summon3} alt="" />
            </div>

            <div className="recom-tailed">
                <h3 className="sub-judul">Tailed Beast Recommended</h3>
                <img src={props.tailed1} alt="" />
                <img src={props.tailed2} alt="" />
            </div>

        </div>
    )
}

RecomComp.defaultProps = {
    skill1: Logo,
    skill2: Logo,
    skill3: Logo,
    skill4: Logo,
    skill5: Logo,
    summon1: Logo,
    summon2: Logo,
    summon3: Logo,
    tailed1: Logo,
    tailed2: Logo
}

export default RecomComp;