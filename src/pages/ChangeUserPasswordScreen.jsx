import React, { useState } from 'react';
import { APIClient } from '../modules/helper';
import { useNavigate } from 'react-router-dom';

const ChangePasswordScreen = () => {
    const navigate = useNavigate()
    const [password, setPassword] = useState('')
    const [passwordC, setPasswordC] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()
        if (!password || !passwordC) {
            alert("required fields")
            return
        }
        if (password !== passwordC) {
            alert("passwords doesnt match")
            return
        }
        APIClient.post('/change_user_password', {email: 'hackmanling_official1@proton.me', password: password}).then((response) => {
            console.log(response.data)
            if (response.data.status === "success") {
                alert(response.data.message) 
                setTimeout(() => {
                    navigate('/user_login')
                }, 1500)
            } else {
                alert(response.message)
            }
        })
    }

    return (
        <>
            <section id="contact" class="contact mb-5">
                <div class="container align-items-center" data-aos="fade-up">
                    <div class="row">
                        <div class="col-lg-12 text-center mb-5">
                            <h1 class="page-title">Set New Password</h1>
                        </div>
                    </div>
                    <div className='d-flex justify-content-center'>
                        <div class="form mt-5 w-50">
                            <form action="#" method="post" role="form" class="php-email-form">
                                <div class="row">
                                    <div class="form-group col-md-12">
                                        <input type="password" class="form-control" name="password" id="password" placeholder="Password" onChange={(e)=> setPassword(e.target.value)} required />
                                    </div>
                                    <div class="form-group col-md-12">
                                        <input type="password" class="form-control" name="passwordC" id="passwordC" placeholder="Confirm Password" onChange={(e)=> setPasswordC(e.target.value)} required />
                                    </div>
                                </div>
                                <div class="text-left"><button type="submit" onClick={onSubmit}>Submit</button></div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default ChangePasswordScreen;
