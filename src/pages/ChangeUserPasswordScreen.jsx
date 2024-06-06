import React, { useState } from 'react';
import { APIClient } from '../modules/helper';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

const ChangePasswordScreen = () => {
    const navigate = useNavigate()
    const [password, setPassword] = useState('')
    const [passwordC, setPasswordC] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()
        if (!password || !passwordC) {
            toast("required fields", { position: "top-right" })
            return
        }
        if (password !== passwordC) {
            toast("Passwords doesnt match", { position: "top-right" })
            return
        }
        APIClient.post('/change_user_password', {email: 'josephowusu027@proton.me', password: password}).then((response) => {
            console.log(response.data)
            if (response.data.status === "success") {
                toast(response.data.message, { position: "top-right" })
                setTimeout(() => {
                    navigate('/user_login')
                }, 1500)
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
                            <h1 className="page-title">Set New Password</h1>
                        </div>
                    </div>
                    <div className='d-flex justify-content-center'>
                        <div className="form mt-5 col-12 col-md-6">
                            <form action="#" method="post" role="form" className="php-email-form">
                                <div className="row">
                                    <div className="form-group col-md-12">
                                        <input type="password" className="form-control" name="password" id="password" placeholder="Password" onChange={(e)=> setPassword(e.target.value)} required />
                                    </div>
                                    <div className="form-group col-md-12">
                                        <input type="password" className="form-control" name="passwordC" id="passwordC" placeholder="Confirm Password" onChange={(e)=> setPasswordC(e.target.value)} required />
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

export default ChangePasswordScreen;
