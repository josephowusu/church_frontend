import React, { useEffect, useState } from 'react';
import HeroSlider from '../components/HeroSlider';
import { postData, trendingData } from '../modules/dummyData';
import image1 from "./../images/backgroundImage2.jpeg"
import logo from "./../images/logo.jpeg"
import pastor from "./../images/pastor.jpeg"
import { SocketIO, fetchData, fullDate, shortenText } from '../modules/helper';
import MediaComponent from '../components/FileComponent';
import { useParams } from 'react-router-dom';

const Post = () => {
    const [post, setPost] = useState([])
    const { id } = useParams()

    const fetchEvent = () => {
        const sessionData = fetchData('sessionData')
		SocketIO.emit('/fetch-event', { sessionID: sessionData ? sessionData.token : null, limit: 10, offset: 0, hiddenID: id}, (response) => {
			if (response.status === 'success') {
				setPost(response.data)
			}
		})
    }

    const isImage = (file) => {
        return /\.(jpg|jpeg|png|gif|bmp)$/i.test(file);
    }
    
    const isVideo = (file) => {
        return /\.(mp4|webm|ogg)$/i.test(file);
    }
    
    useEffect(() => {
        fetchEvent()
    }, [])

    return (
        <>
            <section class="single-post-content">
                <div class="container">
                    <div class="row">
                        <div class="col-md-9 post-content" data-aos="fade-up">
                        <div class="single-post">                   
                            <div class="post-meta"><span class="date">Event</span> <span class="mx-1">&bullet;</span> <span>{new Date(post[0]?.createdAt).toLocaleDateString()}</span></div>
                            <h1 class="mb-5">{post[0]?.title}</h1>

                            <p><span class="firstcharacter">{post[0]?.description[0]}</span>{post[0]?.description.slice(1)}</p>

                            <figure class="my-4">
                                {post[0] ? JSON.parse(post[0].images).map((file, fileIndex) => (
                                    <div key={fileIndex}>
                                        {isImage(file) ? (
                                            <img src={`http://localhost:3030/api/files/${file}`} alt="" className="img-fluid" />
                                        ) : isVideo(file) ? (
                                            <video controls={true} className="img-fluid">
                                                <source src={`http://localhost:3030/api/files/${file}`} type="video/mp4" />
                                                Your browser does not support the video tag.
                                            </video>
                                        ) : null}
                                    </div>
                                )) : ''} 
                            </figure>
                            <figcaption style={{fontSize: 20, fontWeight: 'bold', marginTop: 50}}>Extra Info </figcaption>
                            <p style={{marginTop: 10}}>{post[0]?.extra_info}</p>
                            <figcaption style={{fontSize: 20, fontWeight: 'bold', marginTop: 50}}>Location </figcaption>
                            <p style={{marginTop: 10}}>{post[0]?.location}</p>
                            <figcaption style={{fontSize: 20, fontWeight: 'bold', marginTop: 50}}>Author </figcaption>
                            <p style={{marginTop: 10}}>{post[0]?.author}</p>
                          </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )

}

export default Post