import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const logo = require('./../../Assets/holidazeLogoWhite.png');
    return (
        <div className=" [ nav ] ">
            <div className=" [ nav-logo ] ">
                <Link to="/"><img className=" [ nav-logo-img ] " alt="Logo" src={logo}
                /></Link>
            </div>
            <ul className=" [ nav-ul ] ">
                <li><Link to="/" className=" [ nav-ul-li ] " ><i className=" [ fa fa-home onlyMobile nav-ul-li-icon ] "></i>Home</Link></li>
                <li><Link to="/allHotels" className=" [ nav-ul-li ] " ><i className=" [ fa fa-hotel onlyMobile nav-ul-li-icon ] "></i>All Hotels</Link></li>
                <li><Link to="/contact" className=" [ nav-ul-li ] " ><i className=" [ fa fa-comment onlyMobile nav-ul-li-icon ] "></i>Contact</Link></li>
                <li><Link to="/adminHome" className=" [ nav-ul-li ] " ><i className=" [ fa fa-lock onlyMobile nav-ul-li-icon ] "></i>Admin</Link></li>
            </ul>
        </div>
    )
}

export default Navbar;