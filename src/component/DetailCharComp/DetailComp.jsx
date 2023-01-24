import React from "react";
import './DetailComp.css';
import Logo from "../../image/Logo.jpeg";

const DetailComp = (props) => {
    return(
        <div className="container-detail-character">
            <div className="content-character">

                <div className="content-kiri-character">
                    <img className="logoChar" src={props.logoChar} alt="" />
                </div>
                
                <div className="content-kanan-character">
                    <h1>{props.namaChar}</h1>
                    <div className="detail-character">
                        <ul>
                            <li>Grade :<br /> {props.grade} </li>
                            <li>Quality :<br /> {props.quality} </li>
                            <li>G. Point :<br /> {props.point} </li>
                            <li>Chakra :<br /> {props.chakra} </li>
                        </ul>
                    </div>
                </div>

            </div>
        </div>
    )
}

DetailComp.defaultProps = {
    logoChar: Logo,
    namaChar: 'Coming Soon',
    grade: 'Coming Soon',
    quality: 'Coming Soon',
    point: 'Coming Soon',
    chakra: 'Coming Soon'
}

export default DetailComp;