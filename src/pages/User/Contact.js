


import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { POST_CONTACTFORM } from '../../constants/constants';
import Navbar from './../../components/User/navbar';
import Footer from './../../components/User/footer';

export default function Contact() {
  const { register, handleSubmit, errors } = useForm();
  const [success, setSuccess] = useState(false)

  const onSubmit = (data, event) => {
    // console.log(data);
    const form = new FormData()
    form.append('clientName', data.clientName);
    form.append('email', data.email);
    form.append('message', data.message);
    axios.post(POST_CONTACTFORM, form, {
      headers: { 'Content-Type': 'multipart/form-data' },
    })
      .then(data => {//success
        setSuccess("Thank you for sending us a message! We will reach out to you soon.")
        event.preventDefault();
      }, error => { //failed
        setSuccess("Oops.. Something went wrong. Please try again later")
      })

  }

  return (
    <>
      <Navbar />
      <div className=" [ container contact ] ">
        <div className=" [ contact-container col-6 col-t-10 col-m-11 m-auto ] ">
          <h1 className=" [ text-center ] ">Contact us</h1>
          <div className=" [ col-8 col-t-10 col-m-10 m-auto ] ">
            <form onSubmit={handleSubmit(onSubmit)}  >
              <label className=" [ label ] " >Name</label>
              <div className=" [ input-container ] ">
                <i className=" [ fa fa-user form-input-icon ] "></i>
                <input
                  type="text"
                  placeholder="Enter your name"
                  name="clientName"
                  ref={register({ required: true, maxLength: 40 })}
                  className=" [ form-input form-input-contact col-12 col-t-12 input-padding ] "
                />
              </div>
              {errors.clientName && <p className=" [ errorMessage-white ] ">Name is required</p>}
              <label className=" [ label ] " >Email</label>
              <div className=" [ input-container ] ">
                <i className=" [ fa fa-envelope form-input-icon ] "></i>
                <input
                  type="text"
                  placeholder="Enter Email"
                  name="email"
                  ref={register({ required: true, pattern: /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i })} // eslint-disable-line
                  className=" [ form-input form-input-contact col-12 col-t-12 input-padding ] "
                />
              </div>
              {errors.email && <p className=" [ errorMessage-white ] ">Email is incorrect</p>}
              <label className=" [ label ] " >Message</label>
              <div className=" [ input-container ] ">

                <i className="fa fa-comment form-input-icon form-input-icon-comment"></i>
                <textarea
                  name="message"
                  placeholder="Enter Message"
                  ref={register({ required: true, maxLength: 80000 })}
                  className=" [  form-input form-input-contact col-12 col-t-12 input-padding ] "
                />
              </div>
              {errors.message && <p className=" [ errorMessage-white ] ">Message is required</p>}

              <p className=" [ successMessage ] ">{success}</p>
              <input type="submit" className=" [ btn ] " />
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

















