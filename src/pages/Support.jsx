import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Support = () => {
    const navigate = useNavigate()
    const [firstName, setFirstName] = useState('')
    const [otherName, setOtherName] = useState('')
    const [lastName, setLastName] = useState('')
    const [message, setMessage] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')


    return (
        <>
            <section id="contact" className="contact mb-5">
                <div className="container align-items-center" data-aos="fade-up">
                    <div className="row">
                        <div className="col-lg-12 text-center mb-5">
                            <h1 className="page-title">Contact Us</h1>
                        </div>
                    </div>
                    <div className='d-flex justify-content-center'>
                        <div className="form mt-5 col-12 col-md-6">
                            <form action="#" method="post" role="form" className="php-email-form">
                                <div className="row">
                                    <div className="form-group col-12 col-md-4">
                                        <input type="text" name="firstName" className="form-control" id="firstName" placeholder="First Name" onChange={(e)=> setFirstName(e.target.value)} required />
                                    </div>
                                    <div className="form-group col-12 col-md-4">
                                        <input type="text" name="otherName" className="form-control" id="otherName" placeholder="Other Name" onChange={(e)=> setOtherName(e.target.value)} />
                                    </div>
                                    <div className="form-group col-12 col-md-4">
                                        <input type="text" name="lastName" className="form-control" id="lastName" placeholder="Last Name" onChange={(e)=> setLastName(e.target.value)} required />
                                    </div>
                                    <div className="form-group col-12 col-md-12">
                                        <input type="email" name="email" className="form-control" id="email" placeholder="Email" onChange={(e)=> setEmail(e.target.value)} required />
                                    </div>
                                    <div className="form-group col-12 col-md-12">
                                        <input type="phone" name="phone" className="form-control" id="phone" placeholder="Phone" onChange={(e)=> setPhone(e.target.value)} required />
                                    </div>
                                    <div className="form-group col-12 col-md-12">
                                        <textarea name="message" className="form-control" id="message" rows={5} placeholder="Message" onChange={(e)=> setMessage(e.target.value)} required />
                                    </div>
                                </div>
                                <div className="text-left"><button type="submit" onClick={()=>{}}>Submit</button></div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Support;
