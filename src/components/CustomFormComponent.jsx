import React, { useState } from 'react'
import { useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { SocketIO, fetchData } from '../modules/helper';
import Select from 'react-select';
import Dropzone from './DropZoneComponent';

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
        console.log({name}, value)
        setFormValues({
            ...formValues,
            [name]: value,
        })
        console.log(formValues)
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
        const sessionData = fetchData('userData')
        SocketIO.emit(formData.endPoint, {sessionID: sessionData ? sessionData[0].id : 0, hiddenID: formData.hiddenID ? formData.hiddenID : null, ...formValues, branchID: sessionData ? sessionData[0].branchID : 0}, (response) => {
            setIsLoading(false)
            handleAlert(response.message, response.status)
        })
        setIsLoading(false)
    }

    const fetchOptions = async (field) => {
        try {
            const sessionData = fetchData('userData')
            SocketIO.emit(field.fetchEndPoint, { sessionID: sessionData ? sessionData.token : null, limit: 10, offset: 0, branchID: sessionData ? sessionData[0].branchID : 0}, (response) => {
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
                [field.name]: `${field.value ? field.value : ''}`,
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

    const onChangeFile = (field, value) => {
        setFormValues({
            ...formValues,
            [field]: value && Array.isArray(value) ? JSON.stringify(value) : value,
        })
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
                            {field.type === "dropzone" && (
                                <Dropzone fieldName={field.name} onChangeFile={onChangeFile} />
                            )}
                            {field.type === "textarea" && (
                                <div key={index} controlId={field.name} className={`form-group col-${field.colSize} mt-1`}>
                                    <label style={{ fontSize: 12 }}>{field.label} {field.required ? '*' : ''}</label>
                                    <textarea 
                                        key={index} 
                                        className='form-control' 
                                        name={field.name}
                                        placeholder={field.label} 
                                        required={field.required}
                                        // value={formValues[field.name] || ''}
                                        onChange={handleInputChange}
                                        rows={5}
                                        dissabled={field.dissabled}
                                    > 
                                    </textarea>
                                </div>
                            )}
                            {field.type === "fetchList" && (
                                <div key={index} controlId={field.name} className={`col-${field.colSize} mt-1`}>
                                    <label style={{ fontSize: 12, marginBottom: 12 }}>{field.label} {field.required ? '*' : ''}</label>
                                    <Select
                                        name={field.name}
                                        value={formValues[field.name]}
                                        onChange={handleChange}
                                        options={optionsFetched[field.name]}
                                        isLoading={isLoading}
                                        isSearchable={true}
                                        onInputChange={(value)=>handleInputChange2(value, field)}
                                        placeholder={formValues[field.name] ? formValues[field.name] : 'None'}
                                        styles={{
                                            control: (provided) => ({
                                                ...provided,
                                                height: 46
                                            }),
                                        }}
                                    />
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
                                        value={formValues[field.name] || ''}
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
