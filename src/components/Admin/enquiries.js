import React from 'react';

const AllEnquiries = ({ establishment, clientName, email, checkin, checkout, adults, children, notes }) => {
    return (
        <div className=" [ col-8 col-t-10 col-m-11 d-flex jc-center m-auto enquiry ] ">
            <div className=" [  col-6 col-t-6 col-m-12 enquiry-box ] ">
                <h2 className=" [ enquiry-establishment ] ">{establishment}</h2>
                <h3 className=" [ enquiry-name ] ">{clientName}</h3>
                <a className=" [ purple ] " href={"mailto:" + email}>
                    <p className=" [ enquiry-email ] ">{email}</p>
                </a>
                <p><b>Adults:</b> {adults}</p>
                <p><b>Children:</b> {children}</p>

                <div className=" [ d-flex jc-between col-6 ] ">
                    <div>
                        <span>{checkin}</span>
                    </div>
                    <div>
                        <span>-</span>
                    </div>
                    <div>
                        <span>{checkout}</span>
                    </div>
                </div>
            </div>
            <div className=" [ col-6 col-t-6 col-m-12 enquiry-box-right ] ">
                <div>
                    <p className=" [ break-word ] ">{notes}</p>
                </div>
            </div>
        </div>
    )
}

export default AllEnquiries;