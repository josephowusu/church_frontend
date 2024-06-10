import React, { useEffect, useState } from 'react'
import { APIClient, SocketIO, fetchData } from '../modules/helper'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import Select from 'react-select';

const RegisterScreen = () => {
    const navigate = useNavigate()
    const [firstName, setFirstName] = useState('')
    const [otherName, setOtherName] = useState('')
    const [lastName, setLastName] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [passwordC, setPasswordC] = useState('')
    const [branches, setBranches] = useState([])
    const [branch, setBranch] = useState({label: '', value: ''})

    const onSubmit = (e) => {
        e.preventDefault()
        if (!firstName || !password || !lastName || !passwordC || !email || !phone) {
            toast('Required fields', { position: "top-right" })
            return
        }
        if (password !== passwordC) {
            toast("password doesnt match", { position: "top-right" })
            return
        }
        APIClient.post('/register_user', {firstname: firstName, othername: otherName, lastname: lastName, password, email, phone, branchID: branch.value}).then((response) => {
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

    const handleChange = (e) => {
        const { label, value, field } = e
        setBranch({label, value})
    }

    const fetchOptions = async () => {
        try {
            const sessionData = fetchData('userData')
            SocketIO.emit('/fetch-branch', { sessionID: sessionData ? sessionData.token : null, limit: 100, offset: 0}, (response) => {
                if (response.status === 'success') {
                    const transformedOptions = response.data.map(option => ({
                        label: option.name,
                        field: 'branches',
                        value: option.id
                    }))
                    setBranches(transformedOptions)
                }
            })
        } catch (error) {
            console.log(error.message)
        }
    }

    const handleInputChange = (value) => {
        if(value) {
            console.log({value})
        }
    }

    useEffect(() => {
        fetchOptions()
    }, [])


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
                        <div className="form mt-5 col-12 col-md-6">
                            <form action="#" method="post" role="form" className="php-email-form">
                                <div className="row">
                                    <div className="form-group col-12 col-md-12">
                                        <Select
                                            name="branches"
                                            value={branch.value}
                                            onChange={handleChange}
                                            options={branches}
                                            isLoading={false}
                                            isSearchable={true}
                                            onInputChange={handleInputChange}
                                            placeholder={branch.label ? branch.label : 'None'}
                                            styles={{
                                                control: (provided) => ({
                                                    ...provided,
                                                    height: 46
                                                }),
                                            }}
                                        />
                                    </div>
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
                                        <input type="tel" name="phone" className="form-control" id="phone" placeholder="Phone Number" onChange={(e)=> setPhone(e.target.value)} required />
                                    </div>
                                    <div className="form-group col-12 col-md-12">
                                        <input type="email" name="email" className="form-control" id="email" placeholder="Email" onChange={(e)=> setEmail(e.target.value)} required />
                                    </div>
                                    <div className="form-group col-12 col-md-6">
                                        <input type="password" name="password" className="form-control" id="password" placeholder="Password" onChange={(e)=> setPassword(e.target.value)} required />
                                    </div>
                                    <div className="form-group col-12 col-md-6">
                                        <input type="password" name="passwordC" className="form-control" id="passwordC" placeholder="Confirm Password" onChange={(e)=> setPasswordC(e.target.value)} required />
                                    </div>
                                </div>
                                <div className="text-left"><button type="submit" onClick={onSubmit}>Submit</button></div>
                                <p style={{fontSize: 12, marginTop: 10}}>Already have an account? <a href='/user_login' style={{color: 'red'}}>Login</a></p>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            <ToastContainer />
        </>
    )
}

export default RegisterScreen
