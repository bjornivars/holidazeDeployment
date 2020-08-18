
import React, { useState, useEffect } from 'react';
import AdminNavbar from './../../components/Admin/adminNavbar';
import { GET_ENQUIRIES } from './../../constants/constants';
import axios from 'axios';
import AllEnquiries from './../../components/Admin/enquiries';
import AdminFooter from './../../components/Admin/adminFooter';
import Login from './Login';

export default function Enquiries(props) {
    const [allEnquiries, setAllEnquiries] = useState(undefined);
    const [isLoggedIn, setIsLoggedIn] = useState(false); // eslint-disable-line

    function updateLogin() {
        sessionStorage.setItem("isLoggedIn", true)
        setIsLoggedIn(true);
    }

    useEffect(() => {
        axios.get(GET_ENQUIRIES)
            .then((result) => {
                setAllEnquiries(result.data);
            })
    }, [])
    return (sessionStorage.getItem('username') !== null && sessionStorage.getItem("isLoggedIn") === "true") ? (
        <div>
            <AdminNavbar />
            <div className=" [ container ] ">
                <h1 className=" [ text-center ] ">Enquiries</h1>
            </div>
            <>
                {
                    (allEnquiries !== undefined) ?
                        allEnquiries.slice(0).reverse().map((value, index) => {
                            return <AllEnquiries key={index}
                                establishment={value.establishment}
                                clientName={value.clientName}
                                email={value.email}
                                checkin={value.checkin}
                                checkout={value.checkout}
                                adults={value.adults}
                                children={value.children}
                                notes={value.notes}
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