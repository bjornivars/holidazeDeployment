import React from 'react';
import { Link } from 'react-router-dom';

const AdminNavbar = () => {
    const logo = require('./../../Assets/holidazeLogoWhite.png');

    function clear() {
        sessionStorage.clear()
    }

    return (
        <div className=" [ nav admin ] ">
            <div className=" [ nav-logo ] ">
                <Link to="/adminHome"><img className=" [ nav-logo-img ] " alt="Logo" src={logo}
                /> <p className=" [ admin-text ] ">ADMIN</p></Link>
            </div>
            <ul className=" [ nav-ul admin-ul ] ">
                <li><Link to="/" className=" [ nav-ul-li ] " ><i className=" [ fa fa-user  nav-ul-li-icon mobile-tablet ] "></i><span className=" [ notMobile notTablet ] ">User Site</span></Link></li>
                <li><Link to="/enquiries" className=" [ nav-ul-li ] " ><i className="[ fa fa-address-book  nav-ul-li-icon mobile-tablet ] "></i><span className=" [ notMobile notTablet ] ">Enquiries</span></Link></li>
                <li><Link to="/contactMessages" className=" [ nav-ul-li ] " ><i className="[ fa fa-comment  nav-ul-li-icon mobile-tablet ] "></i><span className=" [ notMobile notTablet ] ">Contact Messages</span></Link></li>
                <li><Link to="/newEstablishment" className=" [ nav-ul-li ] " ><i className=" [ fa fa-plus-square  nav-ul-li-icon mobile-tablet ] "></i><span className=" [ notMobile notTablet ] ">New Establishment</span></Link></li>
                <li><Link to="/adminHome" className=" [ nav-ul-li ] "  ><i className=" [ fa fa-home  nav-ul-li-icon mobile-tablet ] "></i><span className=" [ notMobile notTablet ] ">Admin Home</span></Link></li>
                <li onClick={clear}><Link to="/adminHome" className=" [ nav-ul-li ] "  ><i className=" [ fa fa-sign-out  nav-ul-li-icon mobile-tablet ] "></i><span className=" [ notMobile notTablet ] "> Log out</span></Link></li>
            </ul>
        </div>
    )
}

export default AdminNavbar;