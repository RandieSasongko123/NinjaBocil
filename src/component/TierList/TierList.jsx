import React from "react";
import './TierList.css';
import { TabTitle } from "../../container/GeneralFunction";
import Tier from "../../image/tierlist.jpg"

const TierList = () => {
    TabTitle('Ninja Bocil | Tier List')

    return(
        <div className="container-tier">
            <div className="content-tier">
                <h1>Tier List Ninja, Ninja Heroes : New Era</h1>
                <center><img src={Tier} alt="" /></center>
            </div>
        </div>
    )
}

export default TierList;