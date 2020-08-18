import React from 'react';
import { Link } from 'react-router-dom';

const AdminFooter = (props) => {
    function clear() {
        sessionStorage.clear()
    }
    const logo = require('./../../Assets/holidazeLogoWhite.png');
    return (
        <div className=" [ bg-gray ] ">
            <div className=" [ footer-admin ] ">
                <div className=" [ footer-logo-admin ] ">
                    <Link to="/" className=" [ white ] "><img className=" [ footer-logo-img ] " alt="Logo" src={logo}
                    />ADMIN</Link>
                </div>
                <ul className=" [ footer-ul footer-ul-admin ] ">
                    <li onClick={clear}><Link to="/" className=" [ footer-ul-li-admin ] " >User Site</Link></li>
                    <li><Link to="/enquiries" className=" [ footer-ul-li-admin ] " >Enquiries</Link></li>
                    <li><Link to="/contactMessages" className=" [ footer-ul-li-admin ] " >Contact Messages</Link></li>
                    <li><Link to="/newEstablishment" className=" [ footer-ul-li-admin ] " >New Establishment</Link></li>
                    <li><Link to="/adminHome" className=" [ footer-ul-li-admin ] " >Admin Home</Link></li>
                    <li onClick={clear}><Link to="/contactMessages" className=" [ footer-ul-li-admin ] " >Contact Messages</Link></li>
                </ul>
            </div>
            <p className=" [ col-12 m-0 copyright ] ">Copyright <i className=" [ fa fa-copyright ] "></i> 2020 Bjørn-Ivar Skuggen</p>
        </div>
    )
}

export default AdminFooter;