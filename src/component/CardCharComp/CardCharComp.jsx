import React from "react";
import "./CardCharComp.css";
import Logo from "../../image/Logo.jpeg";
// import { Link, useParams } from "react-router-dom";
// import { charData } from "../../database/charData";

const CardCharComp = (props) => {

  // function detailChar(id) {
  //   return id;
  // }

  return (
    // <Link to={'/detail-char/' + detailChar(props.id)}>
      <div className="card">
        <center>
          <p className="id">{props.id}</p>
          <img src={props.logo} alt="" />
          <p className="nama">{props.nama}</p>
        </center>
      </div>
    // </Link>
    
  );
};

CardCharComp.defaultProps = {
  nama: "Coming Soon",
  logo: Logo,
};

export default CardCharComp;
