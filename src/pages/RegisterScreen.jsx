import React, { useState } from 'react'

const RegisterScreen = () => {
    const [firstName, setFirstName] = useState('')
    const [otherName, setOtherName] = useState('')
    const [lastName, setLastName] = useState('')
    const [password, setPassword] = useState('')
    const [passwordC, setPasswordC] = useState('')


    return (
        <>
            <section id="contact" className="contact mb-5">
                <div className="container" data-aos="fade-up">
                    <div className="row">
                        <div className="col-lg-12 text-center mb-5">
                            <h1 className="page-title">User Register</h1>
                        </div>
                    </div>
                    <div className='d-flex justify-content-center'>
                        <div className="form mt-5 w-50">
                            <form action="#" method="post" role="form" className="php-email-form">
                                <div className="row">
                                    <div className="form-group col-md-4">
                                        <input type="text" name="firstName" className="form-control" id="firstName" placeholder="First Name" onChange={(e)=> setFirstName(e.target.value)} required />
                                    </div>
                                    <div className="form-group col-md-4">
                                        <input type="text" name="otherName" className="form-control" id="otherName" placeholder="Other Name" onChange={(e)=> setOtherName(e.target.value)} />
                                    </div>
                                    <div className="form-group col-md-4">
                                        <input type="text" name="lastName" className="form-control" id="lastName" placeholder="Last Name" onChange={(e)=> setLastName(e.target.value)} required />
                                    </div>
                                    <div className="form-group col-md-12">
                                        <input type="email" name="email" className="form-control" id="email" placeholder="Email" onChange={(e)=> setLastName(e.target.value)} required />
                                    </div>
                                    <div className="form-group col-md-6">
                                        <input type="password" name="password" className="form-control" id="password" placeholder="Password" onChange={(e)=> setPassword(e.target.value)} required />
                                    </div>
                                    <div className="form-group col-md-6">
                                        <input type="password" name="passwordC" className="form-control" id="passwordC" placeholder="Confirm Password" onChange={(e)=> setPasswordC(e.target.value)} required />
                                    </div>
                                </div>
                                <div className="text-left"><button type="submit">Submit</button></div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default RegisterScreen
