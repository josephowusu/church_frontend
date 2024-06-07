import React, { useState } from 'react';
import { APIClient } from '../modules/helper';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

const ForgotPassword = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()
        if (!email) {
            toast("required fields", { position: "top-right" })
            return
        }
        APIClient.post('/check_user_email', { email }).then((response) => {
            if (response.data.status === "success") {
                toast(response.data.message, { position: "top-right" })
            } else {
                toast(response.data.message, { position: "top-right" })
            }
        })
    }

    return (
        <>
            <section id="contact" className="contact mb-5">
                <div className="container align-items-center" data-aos="fade-up">
                    <div className="row">
                        <div className="col-lg-12 text-center mb-5">
                            <h1 className="page-title">Forgot Password</h1>
                        </div>
                    </div>
                    <div className='d-flex justify-content-center'>
                        <div className="form mt-5 col-12 col-md-6">
                            <form action="#" method="post" role="form" className="php-email-form">
                                <div className="row">
                                    <div className="form-group col-md-12">
                                        <input type="email" className="form-control" name="email" id="email" placeholder="Email" onChange={(e)=> setEmail(e.target.value)} required />
                                    </div>
                                </div>
                                <div className="text-left"><button type="submit" onClick={onSubmit}>Submit</button></div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            <ToastContainer />
        </>
    );
}

export default ForgotPassword;
