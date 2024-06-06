import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import axios from 'axios';
import { APIClient, deleteData, fetchData, storeData } from '../modules/helper';

const Dropzone = ({fieldName, onChangeFile}) => {
    const [uploadedFiles, setUploadedFiles] = useState(0)

    const onDrop = useCallback((acceptedFiles) => {
        const formData = new FormData()
        acceptedFiles.forEach(file => {
            formData.append('files', file)
        })

        APIClient.post('/upload', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
        .then(response => {
            onChangeFile(fieldName, JSON.stringify(response.data.fileNames))
            setUploadedFiles(response.data.fileNames ? response.data.fileNames.length : 0)
        })
        .catch(error => {
            console.error('Error uploading files:', error)
        })
    }, [])

    const { getRootProps, getInputProps } = useDropzone({ onDrop, multiple: true });
    

    return (
        <div {...getRootProps()} style={{ border: '2px dashed #999', padding: '40px', textAlign: 'center' }}>
            <input {...getInputProps()} />
            <p>Drag 'n' drop some files here, or click to select files</p>
            <p>Total Uploaded Files: {uploadedFiles}</p>
        </div>
    )
}

export default Dropzone
