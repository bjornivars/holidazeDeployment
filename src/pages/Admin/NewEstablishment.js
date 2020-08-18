
import React, { useState, useEffect } from 'react';
import AdminNavbar from './../../components/Admin/adminNavbar';
import { POST_NEWESTABLISHMENT, GET_ESTABLISHMENTS } from './../../constants/constants';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import AdminFooter from './../../components/Admin/adminFooter';
import Login from './Login';


export default function ContactMessages(props) {
    const { register, handleSubmit, reset, errors } = useForm();
    const [success, setSuccess] = useState(false);
    let [lastEstablishment, setLastEstablishment] = useState(false);

    const [isLoggedIn, setIsLoggedIn] = useState(false); // eslint-disable-line
    // console.log(isLoggedIn);
    function updateLogin() {
        sessionStorage.setItem("isLoggedIn", true)
        setIsLoggedIn(true);
    }


    useEffect(() => {
        axios.get(GET_ESTABLISHMENTS)
            .then((result) => {
                setLastEstablishment(result.data[result.data.length - 1].id);
            })
    }, [])

    let lastId = ++lastEstablishment;

    const onSubmit = (data) => {
        const form = new FormData()
        form.append('establishmentName', data.establishmentName)
        form.append('establishmentEmail', data.establishmentEmail);
        form.append('imageUrl', data.imageUrl);
        form.append('maxGuests', data.maxGuests);
        form.append('price', data.price);
        form.append('googleLat', data.googleLat);
        form.append('googleLong', data.googleLong);
        form.append('description', data.description);
        form.append('selfCatering', data.selfCatering);
        form.append('id', data.id);
        axios.post(POST_NEWESTABLISHMENT, form, {
            headers: { 'Content-Type': 'multipart/form-data' },
        })
            .then(data => {//success
                setSuccess("The New Establishment has been activated");
                clearForm();
            }, error => { //failed
                setSuccess("We have some issues connecting to the server. Please try again later")
            })

    }
    function clearForm() {
        setTimeout(function () {
            setSuccess(false);
            reset();
        }, 3000);
    }
    return (sessionStorage.getItem('username') !== null && sessionStorage.getItem("isLoggedIn") === "true") ? (
        <>
            <AdminNavbar />
            <div className=" [ container m-auto col-6 col-t-8 col-m-11 ] ">
                <h1 className=" [ text-center ] ">New Establishment</h1>

                <form onSubmit={handleSubmit(onSubmit)} className=" [ enquiry-form col-10 m-auto ] " >

                    <div className=" [ form-input-dflex ]">
                        <div className=" [ col-8 col-t-12 col-m-12 ]">
                            <label className=" [ label ] "  >Establishment Name <span className=" [ errorMessage ] ">*</span></label>
                            <div className=" [ input-container border ] ">
                                <input
                                    type="text"
                                    placeholder="Establishment Name"
                                    name="establishmentName"
                                    ref={register({ required: true, maxLength: 40 })}
                                    className=" [ form-input input-padding col-12 col-t-12 col-m-12 ] " />
                            </div>
                            {errors.establishmentName && <p className=" [ errorMessage ] ">Name is required</p>}
                        </div>
                        <div className=" [ col-3 col-t-12 col-m-12 ] ">
                            <label className=" [ label ] " >Max Guests <span className=" [ errorMessage ] ">*</span></label>
                            <div className=" [ input-container border ] ">
                                <input
                                    type="number"
                                    placeholder="Max Guests"
                                    name="maxGuests"
                                    ref={register({ required: true, maxLength: 4 })}
                                    className=" [ form-input input-padding col-12 col-t-12 col-m-12 ] " />
                            </div>
                            {errors.maxGuests && <p className=" [ errorMessage ] ">Max guests is required</p>}
                        </div>
                    </div>

                    <div className="[ form-input-dflex ] ">
                        <div className=" [ col-8 col-t-12 col-m-12 ] ">
                            <label className=" [ label ] "  >Establishment Email <span className=" [ errorMessage ] ">*</span></label>
                            <div className=" [ input-container border ] ">
                                <input
                                    type="text"
                                    placeholder="Establishment Email"
                                    name="establishmentEmail"
                                    ref={register({ required: true, pattern: /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i })} // eslint-disable-line
                                    className=" [ form-input input-padding col-12 col-t-12 col-m-12 ] " />
                            </div>
                            {errors.establishmentEmail && <p className=" [ errorMessage ] ">Email is incorrect</p>}
                        </div>
                        <div className=" [ col-3 col-t-12 col-m-12 ] ">
                            <label className=" [ label ] "  >Breakfast included?</label>
                            <input
                                type="checkbox"
                                placeholder="Checkbox"
                                name="selfCatering"
                                ref={register} />
                        </div>
                    </div>

                    <div className=" [ form-input-dflex ] ">
                        <div className=" [ col-12 col-t-12 col-m-12 ] ">
                            <label className=" [ label ] "  >Description <span className=" [ errorMessage ] ">*</span></label>
                            <div className=" [ input-container border ] ">
                                <textarea
                                    type="text"
                                    placeholder="Description"
                                    name="description"
                                    ref={register({ required: true })}
                                    className=" [ form-input input-padding col-12 col-t-12 col-m-12 ] " />
                            </div>
                            {errors.description && <p className=" [ errorMessage ] "> Description is required</p>}

                        </div>
                    </div>

                    <div className=" [ form-input-dflex ] ">
                        <div className=" [ col-4 col-t-5 col-m-12 ] ">
                            <label className=" [ label ] "  >Latitude <span className=" [ errorMessage ] ">*</span></label>
                            <div className=" [ input-container border ] ">
                                <input
                                    type="text"
                                    placeholder="Latitude"
                                    name="googleLat"
                                    ref={register({ required: true })}
                                    className=" [ form-input input-padding col-12 col-t-12 col-m-12 ] " />
                            </div>
                            {errors.googleLat && <p className=" [ errorMessage ] ">Latitude is required</p>}
                        </div>
                        <div className=" [ col-4 col-t-5 col-m-12 ] ">
                            <label className=" [ label ] "  >Longitude <span className=" [ errorMessage ] ">*</span></label>
                            <div className=" [ input-container border ] ">
                                <input
                                    type="text"
                                    placeholder="Longitude"
                                    name="googleLong"
                                    ref={register({ required: true })}
                                    className=" [ form-input input-padding col-12 col-t-12 col-m-12 ] " />
                            </div>
                            {errors.googleLong && <p className=" [ errorMessage ] ">Longitude is required</p>}
                        </div>
                    </div>

                    <div className=" [ form-input-dflex ] ">
                        <div className=" [ col-4 col-t-12 col-m-12 ] ">
                            <label className=" [ label ] "  >Image (URL) <span className=" [ errorMessage ] ">*</span></label>
                            <div className=" [ input-container border ] ">
                                <input
                                    type="url"
                                    placeholder="Image Url"
                                    name="imageUrl"
                                    ref={register({ required: true })}
                                    className=" [ form-input input-padding col-12 col-t-12 col-m-12 ] " />
                            </div>
                            {errors.imageUrl && <p className=" [ errorMessage ] ">Image is required</p>}
                        </div>
                        <div className=" [ col-4 col-t-12 col-m-12 ] ">
                            <label className=" [ label ] "  >Price $ <span className=" [ errorMessage ] ">*</span></label>
                            <div className=" [ input-container border ] ">
                                <input
                                    type="number"
                                    placeholder="Price"
                                    name="price"
                                    ref={register({ required: true, min: 1, maxLength: 10 })}
                                    className=" [ form-input input-padding col-12 col-t-12 col-m-12 ] " />

                            </div>
                            {errors.price && <p className=" [ errorMessage ] ">Price is required</p>}
                        </div>
                    </div>
                    <input
                        type="hidden"
                        name="id"
                        value={lastId}
                        ref={register({ required: true })}
                        className=" [ border ] "
                        readOnly
                    />
                    <p className=" [ successMessage ] ">{success}</p>
                    <input
                        type="submit" disabled={success !== false} className=" [ btn ] " />
                </form>
            </div>
            <AdminFooter />
        </>
    ) : (
            <Login updateLoginStatus={updateLogin} />
        )
}
