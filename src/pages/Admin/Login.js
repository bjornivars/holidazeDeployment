import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Login(props) {
    const [inputs, setInputs] = useState({
        username: "",
        password: "",
    })
    const { username, password } = inputs;
    const [errorMessage, setErrorMessage] = useState(undefined);

    function handleChange(input) {
        const { name, value } = input.target;
        setInputs(inputs => ({
            ...inputs,
            [name]: value
        }));
    }

    function handleSubmit(event) {
        event.preventDefault();
        sessionStorage.setItem("username", username);
        sessionStorage.setItem("password", password);
        getLocalStorageInfo();
    }

    function getLocalStorageInfo() {
        if (sessionStorage.getItem('username') !== 'cameron') {
            setErrorMessage('Username is incorrect')
        } else if (sessionStorage.getItem('password') !== 'cameron23') {
            setErrorMessage('Password is incorrect')
        } else {
            props.updateLoginStatus();
        }
    }

    return (
        <div className=' [ container contact ] '>
            <div className=" [ contact-container col-6 col-t-10 col-m-11 m-auto ] ">
                <h1 className=' [ text-center mb-5 ] '>Login</h1>
                <div className=' [ col-8 col-t-10 col-m-10 m-auto ] '>
                    <form onSubmit={handleSubmit} className=' [ col-md-4 m-auto ] '>
                        <label className=" [ label ] " >Username</label>
                        <div className=" [ input-container ] ">
                            <i className=" [ fa fa-user form-input-icon ] "></i>
                            <input type='text'
                                name='username'
                                placeholder="Username"
                                onChange={handleChange}
                                className=' [ form-input form-input-contact input-padding col-12 col-t-12 ] '
                            />
                        </div>

                        <label className=" [ label ] " >Password</label>
                        <div className=" [ input-container ] ">
                            <i className=" [ fa fa-key form-input-icon ] "></i>
                            <input type='password'
                                name='password'
                                placeholder="Password"
                                onChange={handleChange}
                                className=' [ form-input form-input-contact input-padding col-12 col-t-12 ] '
                            />
                        </div>
                        {
                            errorMessage !== undefined && <div><p className=' [ errorMessage-white ] '>{errorMessage}</p></div>
                        }
                        <input type='submit' className=' [ btn ] ' />
                    </form>
                </div>
                <div className=' [ col-8 col-t-10 col-m-10 m-auto mt-20 white ] '>
                    <Link to="/" className=" [ white ] ">Back to user site</Link>
                </div>
            </div>
        </div>
    );
}