import React, { useState } from 'react'

const LoginScreen = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

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
                        <div class="form mt-5">
                            <form action="#" method="post" role="form" class="php-email-form">
                                <div class="row">
                                    <div class="form-group col-md-12">
                                        <input type="text" name="username" class="form-control" id="username" placeholder="Email / Username" onChange={(e)=> setUsername(e.target.value)} required />
                                    </div>
                                    <div class="form-group col-md-12">
                                        <input type="password" class="form-control" name="password" id="password" placeholder="Password" onChange={(e)=> setPassword(e.target.value)} required />
                                    </div>
                                </div>
                                <div class="text-left"><button type="submit">Submit</button></div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default LoginScreen
