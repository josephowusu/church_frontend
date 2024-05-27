import React, { useState } from 'react'
import { useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { SocketIO, fetchData } from '../modules/helper';

function CustomFormComponent({formData}) {
    const [isLoading, setIsLoading] = useState(false)
    const [optionsFetched, setOptionsFetched] = useState({})
    const [searchValues, setSearchValues] = useState({})
    const initialValues = {}
    formData.formData.forEach(field => {
        initialValues[field.name] = field.value ? field.value : ''
    })
    const [formValues, setFormValues] = useState({
        ...Object.fromEntries(formData.formData.filter(field => field.type !== 'hr').map(field => [field.name, ''])),
        ...initialValues,
    })

    const handleAlert = (message, status) => {
        if (status == 'success'){
            toast.success(message)
        } else if(status == 'warning') {
            toast.warn(message)
        } else {
            toast.info(message)
        }
    }

    const handleInputChange = (event) => {
        const { name, value } = event.target
        setFormValues({
            ...formValues,
            [name]: value,
        })
    }

    const clearForm = () => {
        // navigate(formData.backEndPoint)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        setIsLoading(true)
        if (!formData.endPoint) {
            console.log('endPoint missing')
            return
        }
        const sessionData = fetchData('sessionData')
        SocketIO.emit(formData.endPoint, {sessionID: sessionData.token, hiddenID: formData.hiddenID ? formData.hiddenID : null, ...formValues}, (response) => {
            setIsLoading(false)
            handleAlert(response.message, response.status)
        })
        setIsLoading(false)
    }

    const fetchOptions = async (field) => {
        try {
            const sessionData = fetchData('sessionData')
            SocketIO.emit(field.fetchEndPoint, { sessionID: sessionData.token, limit: 10, offset: 0, search: searchValues[field.name]}, (response) => {
                if (response.status === 'success') {
                    const transformedOptions = response.data.map(option => ({
                        label: field.display.map((item) => item !== null ? option[item] : '').join(' '),
                        field: field.name,
                        value: option.id
                    }))
                    setOptionsFetched((prevState) => ({
                        ...prevState,
                        [field.name]: transformedOptions
                    }))
                }
            })
        } catch (error) {
            console.log(error.message)
        }
    }

    useEffect(() => {
        formData.formData.forEach((field) => {
            if (field.type === 'fetchList' && field.fetchEndPoint && !optionsFetched[field.name]) {
                fetchOptions(field)
            }
        })
    }, [optionsFetched])

    const handleChange = (selectedOption) => {
        const { label, value, field } = selectedOption
        setFormValues({
            ...formValues,
            [field]: `${label}**${value}`,
        })
    }

    useEffect(() => {
        formData.formData.forEach((field) => {
            setFormValues({
                ...formValues,
                [field.name]: `${field.value}`,
            })
        })
    }, [])
    
    const handleInputChange2 = (inputValue, field) => {
        setSearchValues({
            ...searchValues,
            [field.name]: inputValue
        })
        fetchOptions(field)
    }

    return (
        <div className='mb-5'>
            <form className='forms-sample' onSubmit={handleSubmit}>
                <div className='row'>
                    {formData.formData.map((field, index) => (
                        <React.Fragment key={index}>
                            {field.type === "hr" && (
                                <div key={index} style={{ width: '100%', paddingTop: 30, paddingBottom: 10 }}>
                                    <h3>{field.title} </h3>
                                </div>
                            )}
                            {field.type === "textarea" && (
                                <div key={index} controlId={field.name} className={`form-group col-${field.colSize} mt-1`}>
                                    <label style={{ fontSize: 12 }}>{field.label} {field.required ? '*' : ''}</label>
                                    <textarea key={index} className='form-control' placeholder={field.label} required={field.required}>   
                                    </textarea>
                                </div>
                            )}
                            {field.type === "text" || field.type === "tel" || field.type === "email" || field.type === "number" ? (
                                <div key={index} controlId={field.name} className={`form-group col-${field.colSize} mt-1`}>
                                    <label style={{ fontSize: 12 }}>{field.label} {field.required ? '*' : ''}</label>
                                    <input 
                                        type={field.type}
                                        name={field.name}
                                        className='form-control'
                                        placeholder={field.label} 
                                        value={formValues[field.name]}
                                        onChange={handleInputChange}
                                        required={field.required}
                                        dissabled={field.dissabled}
                                    />
                                </div>
                            ) : null}
                        </React.Fragment>
                    ))}
                    <div style={{ marginTop: 15, width: '100%', display: 'flex', justifyContent: 'flex-end', marginBottom: 25 }}>
                        <button type="submit" className='btn btn-success' disabled={isLoading}>
                            Submit
                        </button>
                    </div>
                </div>
            </form>
            <ToastContainer />
        </div>
    )
}

export default CustomFormComponent
