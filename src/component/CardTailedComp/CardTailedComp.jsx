import React from "react";
import './CardTailedComp.css';

const CardTailedComp = (props) => {
    return(
        <div className="container-card-tailed">
            <div className="content-card-tailed">
                <div className="content-card-kiri">
                    <img src={props.logoTailed} alt="" />
                </div>
                <div className="content-card-kanan">
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

export default CardTailedComp;