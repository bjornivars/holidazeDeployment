import React from 'react';

const AllMessages = ({ clientName, email, message }) => {

    return (
        <div className=" [ enquiry col-8 col-t-10 col-m-11 d-flex jc-center m-auto ] ">
            <div className=" [  col-6 col-t-6 col-m-12 enquiry-box ] ">
                <h3 className=" [ enquiry-name ] ">{clientName}</h3>
                <p className=" [ enquiry-email ] ">{email}</p>
            </div>
            <div className=" [ col-6 col-t-6 col-m-12 enquiry-box-right ] ">
                <div className=" [ pb-20 ] ">
                    <p className=" [ break-word ] ">{message}</p>
                </div>
                <a className=" [ btn ] " href={"mailto:" + email}>Answer with email</a>
            </div>
        </div>
    )
}

export default AllMessages;