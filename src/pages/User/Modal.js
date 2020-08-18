
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { POST_ENQUIRY } from './../../constants/constants';


const Modal = ({ establishmentName, maxGuests, price,
    closeModal
}) => {
    const { register, handleSubmit, errors } = useForm();
    const [success, setSuccess] = useState(false);
    const [fullHotel, setFullHotel] = useState(false);
    const [checkinCheckout, setCheckinCheckout] = useState(false);
    const [checkinBeforeToday, setCheckinBeforeToday] = useState(false);
    const onSubmit = (data, e) => {
        e.preventDefault();

        const form = new FormData()
        form.append('establishment', data.establishment)
        form.append('clientName', data.clientName);
        form.append('email', data.email);
        form.append('checkin', data.checkin);
        form.append('checkout', data.checkout);
        form.append('notes', data.notes);
        form.append('adults', data.adults);
        form.append('children', data.children);

        let cin = Date.parse(data.checkin);
        let cout = Date.parse(data.checkout);
        let days = Math.floor((cout - cin) / (1000 * 60 * 60 * 24));

        let totalPrice = price * (+data.adults + +data.children) * days;

        let today = new Date();
        let dd = String(today.getDate()).padStart(2, '0');
        let mm = String(today.getMonth() + 1).padStart(2, '0');
        let yyyy = today.getFullYear();
        today = yyyy + '-' + mm + '-' + dd;

        if (maxGuests < +data.adults + +data.children) {
            setFullHotel(true)
        } else if (data.checkin > data.checkout) {
            setCheckinCheckout(true)
            setFullHotel(false)
        } else if (data.checkin < today) {
            setCheckinBeforeToday(true);
            setFullHotel(false)
            setCheckinCheckout(false)
        }
        else {
            sessionStorage.setItem('establishment', data.establishment);
            sessionStorage.setItem('clientName', data.clientName);
            sessionStorage.setItem('email', data.email);
            sessionStorage.setItem('checkin', data.checkin);
            sessionStorage.setItem('checkout', data.checkout);
            sessionStorage.setItem('notes', data.notes);
            sessionStorage.setItem('adults', data.adults);
            sessionStorage.setItem('children', data.children);
            sessionStorage.setItem('totalPrice', totalPrice);

            axios.post(POST_ENQUIRY, form, {
                headers: { 'Content-Type': 'multipart/form-data' },
            })
                .then(data => {//success
                    setSuccess(true)
                }, error => { //failed
                    setSuccess("Oops.. Something went wrong. Please try again later")
                })
        }
    }
    let sessionEstablishment = sessionStorage.getItem('establishment');
    let sessionClientName = sessionStorage.getItem('clientName')
    let sessionEmail = sessionStorage.getItem('email')
    let sessionCheckin = sessionStorage.getItem('checkin')
    let sessionCheckout = sessionStorage.getItem('checkout')
    let sessionNotes = sessionStorage.getItem('notes')
    let sessionAdults = sessionStorage.getItem('adults')
    let sessionChildren = sessionStorage.getItem('children')
    let sessionTotalPrice = sessionStorage.getItem('totalPrice')

    return (
        <div className=" [ modal ] ">
            <div className=" [ modal-overlay ] ">
                <div className=" [ modal-box col-6 col-t-8 col-m-10 ] ">
                    <div className=" [ d-flex jc-end ] ">
                        <i onClick={closeModal} className=" [ fa fa-times closeModal ] "></i>
                    </div>
                    <div className={success !== true ? " [ modal-box-form ] " : " [ d-none ] "}>
                        <h1 className=" [ text-center ] ">{establishmentName}</h1>
                        <form onSubmit={handleSubmit(onSubmit)} className=" [ enquiry-form col-10 col-t-10 m-auto ] " >
                            <div className=" [ input-container  ] ">
                                <input
                                    type="hidden"
                                    name="establishment"
                                    value={establishmentName}
                                    ref={register({ required: true })}
                                    className=" [ form-input col-12 col-t-12 input-padding ] "
                                    readOnly />
                            </div>

                            <label className=" [ label ] " >Name <span className=" [ errorMessage ] ">*</span></label>
                            <div className=" [ input-container border ] ">
                                <input
                                    type="text"
                                    placeholder="Enter your name"
                                    name="clientName"
                                    ref={register({ required: true, maxLength: 40 })}
                                    className=" [ form-input col-12 col-t-12 input-padding ] " />
                            </div>
                            {errors.clientName && <p className=" [ errorMessage ] ">Name is required</p>}

                            <label className=" [ label ] " >Email <span className=" [ errorMessage ] ">*</span></label>
                            <div className=" [ input-container border ] ">
                                <input
                                    type="text"
                                    placeholder="Enter your email"
                                    name="email"
                                    ref={register({ required: true, pattern: /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i })} // eslint-disable-line
                                    className=" [ form-input col-12 col-t-12 input-padding ] " />
                            </div>
                            {errors.email && <p className=" [ errorMessage ] ">Email is incorrect</p>}

                            <div className=" [ form-input-dflex ] ">
                                <div className=" [ col-5 col-t-5 col-m-12 ] ">
                                    <label className=" [ label col-12 col-t-12 ] ">Checkin <span className=" [ errorMessage ] ">*</span></label>
                                    <input
                                        type="date"
                                        placeholder="Checkin"
                                        name="checkin"
                                        ref={register({ required: true })}
                                        className=" [ form-input input-padding label-padding border col-12 col-t-12  ] " />
                                    {errors.checkin && <p className=" [ errorMessage ] ">Checkin date is required</p>}
                                </div>

                                <div className=" [ col-5 col-t-5 col-m-12 ] ">
                                    <label className=" [ label col-12 col-t-12 ] ">Checkout <span className=" [ errorMessage ] ">*</span></label>
                                    <input
                                        type="date"
                                        placeholder="Checkout"
                                        name="checkout"
                                        ref={register({ required: true })}
                                        className=" [ form-input input-padding border col-12 col-t-12  ] " />
                                    {errors.checkout && <p className=" [ errorMessage ] ">Checkout date is required</p>}
                                </div>
                            </div>
                            <p className={(!checkinCheckout ? " [ d-none ] " : " [ errorMessage d-block ] ")}>Checkin must be before checkout! </p>
                            <p className={(!checkinBeforeToday ? " [ d-none ] " : " [ errorMessage d-block ] ")}>Checkin must be after todays date! </p>


                            <div className=" [  d-flex jc-start  ] ">
                                <div className=" [ col-2 col-t-2 col-m-5 adultsChildren ] ">
                                    <label className=" [ label col-12 col-t-12 ] ">Adults <span className=" [ errorMessage ] ">*</span></label>
                                    <input
                                        type="number"
                                        placeholder="2"
                                        name="adults"
                                        min="0"
                                        defaultValue="2"
                                        ref={register({ required: true })}
                                        className=" [ form-input input-padding label-padding border col-12 col-t-12  ] " />
                                    {errors.adults && <p className=" [ errorMessage ] ">Adults field is required</p>}
                                </div>

                                <div className=" [ col-2 col-t-2 col-m-5 ] ">
                                    <label className=" [ label col-12 col-t-12 ] ">Children  <span className=" [ errorMessage ] ">*</span></label>
                                    <input
                                        type="number"
                                        placeholder="0"
                                        name="children"
                                        min="0"
                                        defaultValue="0"
                                        ref={register({ required: true })}
                                        className=" [ form-input input-padding border col-12 col-t-12  ] " />
                                    {errors.children && <p className=" [ errorMessage ] ">Children field is required</p>}
                                </div>
                                {errors.full && <p className=" [ errorMessage ] ">Too many guests</p>}
                            </div>
                            <p className={(!fullHotel ? " [ d-none ] " : " [ errorMessage d-block ] ")}>Max {maxGuests} guests for this hotel! </p>

                            <label className=" [ label ] " >Message</label>
                            <div className=" [ input-container border ] ">
                                <textarea
                                    type="text"
                                    placeholder="Enter a message for us"
                                    name="notes"
                                    ref={register({ required: false })}
                                    className=" [ form-input input-padding col-12 col-t-12  ] " />
                            </div>
                            <input
                                type="submit" className=" [ btn ] " />
                        </form>
                    </div>
                    <div className={success ? " [ modal-box-success ] " : " [ d-none ] "}>
                        <h1 className=" [ modal-box-h1 text-center ] " >Thank you for booking <br></br>{sessionEstablishment}</h1>
                        <div className=" [ col-6 col-t-8 m-auto ] ">
                            <p><b>Name: </b> {sessionClientName}</p>
                            <p><b>Email: </b> {sessionEmail}</p>
                            <p><b>Checkin: </b> {sessionCheckin}</p>
                            <p><b>Checkout: </b> {sessionCheckout}</p>
                            <p><b>Adults: </b> {sessionAdults}</p>
                            <p><b>Children: </b> {sessionChildren}</p>
                            <p><b>Message: </b> {sessionNotes}</p>
                            <p><b>Total price: </b> ${sessionTotalPrice}</p>
                            <button className=" [ btn ] " onClick={closeModal}>Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Modal;