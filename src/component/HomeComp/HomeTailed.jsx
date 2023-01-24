import React from "react";
import './HomeTailed.css';
import Logo from '../../image/Logo.jpeg'

const HomeTailed = (props) => {
    return(
        <div className="container-tailed">
            <div className="content-tailed">
                <div className="content-kiri">
                    <img src={props.logoTailed} alt="" />
                </div>
                <div className="content-kanan">
                    <h1 className="nama-tailed">{props.namaTailed}</h1>
                    <div className="content-skill-tailed">
                        <img src={props.skill1} alt="" />
                        <img src={props.skill2} alt="" />
                        <img src={props.skill3} alt="" />
                        <img src={props.skill4} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

HomeTailed.defaultProps = {
    logoTailed: Logo,
    namaTailed: 'Coming Soon',
    skill1: Logo,
    skill2: Logo,
    skill3: Logo,
    skill4: Logo
}

export default HomeTailed;