import React from "react";
import './ContactComp.css';
import { TabTitle } from "../../container/GeneralFunction";

const ContactComp = () => {

    TabTitle('Ninja Bocil | Contact')

    return(
        <div className="container-contact">
            <div className="content-contact">
                <h1>Contact</h1>
            </div>
            <div className="detail-contact">
                <p>I made this app in my free tune and also it is open source. you're free to report an issue, propose an idea, ask for a feature or anything to improve the app in my github: Githubor send an email to ninjabocil@gmail.com</p>
            </div>
        </div>
    )
}

export default ContactComp;