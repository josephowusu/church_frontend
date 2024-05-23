import React, { useState } from 'react'
import { APIClient, storeData } from '../modules/helper'
import { useNavigate } from 'react-router-dom'

const LoginScreen = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()
        if (!email || !password) {
            alert("required fields")
            return
        }
        APIClient.post('/login_user', {email, password}).then((response) => {
            if (response.data.status === "success") {
                alert(response.data.message) 
                storeData('userData', response.data.data)
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
                            <h1 class="page-title">User Login</h1>
                        </div>
                    </div>
                    <div className='d-flex justify-content-center'>
                        <div className="form mt-5 col-12 col-md-6">
                            <form action="#" method="post" role="form" class="php-email-form">
                                <div class="row">
                                    <div class="form-group col-md-12">
                                        <input type="text" name="username" class="form-control" id="email" placeholder="Email / Phone" onChange={(e)=> setEmail(e.target.value)} required />
                                    </div>
                                    <div class="form-group col-md-12">
                                        <input type="password" class="form-control" name="password" id="password" placeholder="Password" onChange={(e)=> setPassword(e.target.value)} required />
                                    </div>
                                </div>
                                <div class="text-left"><button type="submit" onClick={onSubmit}>Submit</button></div><br />
                                <p style={{fontSize: 12, marginTop: 10}}>Forgot my password <a href='/forgot_password' style={{color: 'red'}}>change password</a></p>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default LoginScreen
