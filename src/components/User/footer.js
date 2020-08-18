import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    const logo = require('./../../Assets/holidazeLogoWhite.png');
    return (
        <div className=" [ bg-gray ] ">
            <div className=" [ footer ] ">
                <div className=" [ footer-logo ] ">
                    <Link to="/"><img className=" [ footer-logo-img ] " alt="Logo" src={logo}
                    /></Link>
                </div>
                <ul className=" [ footer-ul ] ">
                    <li><Link to="/" className=" [ footer-ul-li ] " >Home</Link></li>
                    <li><Link to="/allHotels" className=" [ footer-ul-li ] " >All Hotels</Link></li>
                    <li><Link to="/contact" className=" [ footer-ul-li ] " >Contact</Link></li>
                </ul>
            </div>
            <p className=" [ col-12 m-0 copyright ] ">Copyright <i className=" [ fa fa-copyright ] "></i> 2020 Bjørn-Ivar Skuggen</p>
        </div>
    )
}

export default Footer;