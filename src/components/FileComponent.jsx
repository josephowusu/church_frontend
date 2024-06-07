import React from 'react';
import { api_url } from '../modules/credentials';

const MediaComponent = ({ event }) => {
    const isImage = (file) => /\.(jpg|jpeg|png|gif)$/.test(file);
    const isVideo = (file) => /\.(mp4|avi|mov|wmv|flv|mkv)$/.test(file);

    const getFirstFile = (files) => {
        if (Array.isArray(files)) {
            return files[0];
        }
        try {
            const parsedFiles = JSON.parse(files);
            return parsedFiles[0];
        } catch (e) {
            console.error("Error parsing files:", e);
            return null;
        }
    };

    const firstFile = getFirstFile(event.images);
    let media = '';

    if (firstFile) {
        if (isImage(firstFile)) {
            media = (
                <img src={`${api_url}/api/files/${firstFile}`} alt="" className="img-fluid" />
            )
        } else if (isVideo(firstFile)) {
            media = (
                <video controls={false} className="img-fluid">
                    <source src={`${api_url}/api/files/${firstFile}`} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            );
        }
    }

    return (
        <div className="col-lg-12">
            {media || <p>No media available</p>}
        </div>
    );
};

export default MediaComponent;
