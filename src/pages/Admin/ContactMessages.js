
import React, { useState, useEffect } from 'react';
import AdminNavbar from './../../components/Admin/adminNavbar';
import { GET_CONTACTS } from './../../constants/constants';
import axios from 'axios';
import AllMessages from './../../components/Admin/contactMessages';
import AdminFooter from './../../components/Admin/adminFooter';
import Login from './Login';

export default function ContactMessages(props) {
    const [allContactMessages, setAllContactMessages] = useState(undefined);
    const [isLoggedIn, setIsLoggedIn] = useState(false); // eslint-disable-line

    function updateLogin() {
        sessionStorage.setItem("isLoggedIn", true)
        setIsLoggedIn(true);
    }

    useEffect(() => {
        axios.get(GET_CONTACTS)
            .then((result) => {
                setAllContactMessages(result.data);
            })
    }, [])

    return (sessionStorage.getItem('username') !== null && sessionStorage.getItem("isLoggedIn") === "true") ? (
        <div>
            <AdminNavbar />
            <div className=" [ container ] ">
                <h1 className=" [ text-center ] ">Contact Messages</h1>
            </div>
            <>
                {
                    (allContactMessages !== undefined) ?
                        allContactMessages.slice(0).reverse().map((value, index) => {
                            return <AllMessages key={index}
                                clientName={value.clientName}
                                email={value.email}
                                message={value.message}
                            />
                        }) :
                        <div className=' [ d-flex justify-content-center col-md-3 ] '>
                            <img src='https://flevix.com/wp-content/uploads/2019/07/Bubble-Preloader-1.gif' className='col-8 col-md-12' alt='loading' />
                        </div>
                }
            </>
            <AdminFooter />
        </div>
    ) : (
            <Login updateLoginStatus={updateLogin} />
        )

}